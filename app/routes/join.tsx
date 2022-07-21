import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { createUserSession, getUserId } from "~/session.server";
import {
  createUser,
  getProfileByEmail,
  validateAccessCode,
} from "~/models/user.server";
import { validateEmail } from "~/utils";
import * as React from "react";

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up",
  };
};

interface ActionData {
  errors: {
    email?: string;
    password?: string;
    accessCode?: string;
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const accessCode = formData.get("accessCode");
  const redirectTo = formData.get("redirectTo");

  // Ensure the email is valid
  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid." } },
      { status: 400 }
    );
  }

  // What if a user sends us a password through other means than our form?
  if (typeof password !== "string") {
    return json(
      { errors: { password: "Valid password is required." } },
      { status: 400 }
    );
  }

  if (typeof accessCode !== "string") {
    return json(
      { errors: { accessCode: "Valid access code is required." } },
      { status: 400 }
    );
  }

  // Enforce minimum password length
  if (password.length < 6) {
    return json<ActionData>(
      { errors: { password: "Password is too short." } },
      { status: 400 }
    );
  }

  // A user could potentially already exist within our system
  // and we should communicate that well
  const existingUser = await getProfileByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "A user already exists with this email." } },
      { status: 400 }
    );
  }

  const accessCodeData = await validateAccessCode(accessCode);
  console.log("data:", accessCodeData, "accesscode:", accessCode);
  const isInvalidAccessCode = Boolean(accessCodeData === null);
  if (isInvalidAccessCode) {
    console.log(`The access code provided does not exist`);
    return json<ActionData>(
      { errors: { accessCode: "That is not a valid access code." } },
      { status: 400 }
    );
  }

  if (accessCodeData.email !== email) {
    console.log(`The access code provided is not for email ${email}`);
    return json<ActionData>(
      { errors: { accessCode: "That is not a valid access code." } },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  });
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;

  const actionData = useActionData() as ActionData;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const accessCodeRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef?.current?.focus();
    }

    if (actionData?.errors?.password) {
      passwordRef?.current?.focus();
    }

    if (actionData?.errors?.accessCode) {
      accessCodeRef?.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="my-auto flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md rounded-xl bg-slate-800 px-8 py-10 shadow">
        <Form method="post" className="space-y-6" noValidate>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="accessCode"
            >
              <span className="block">Access Code</span>
              {actionData?.errors?.accessCode && (
                <span className="block pt-1 text-red-700" id="accessCode-error">
                  {actionData?.errors?.accessCode}
                </span>
              )}
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              name="accessCode"
              id="accessCode"
              autoComplete="access-code"
              required
              aria-invalid={actionData?.errors?.accessCode ? true : undefined}
              aria-describedby="accessCode-error"
              ref={accessCodeRef}
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="email"
            >
              <span className="block ">Email Address</span>
              {actionData?.errors?.email && (
                <span className="block pt-1 text-red-700" id="email-error">
                  {actionData?.errors?.email}
                </span>
              )}
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              autoComplete="email"
              type="email"
              placeholder="email@mail.com"
              name="email"
              id="email"
              required
              aria-invalid={actionData?.errors?.email ? true : undefined}
              aria-describedby="email-error"
              ref={emailRef}
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="password"
            >
              <span className="block">Password</span>

              {actionData?.errors?.password && (
                <span className="pt-1 text-red-700" id="password-error">
                  {actionData?.errors?.password}
                </span>
              )}
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="•••••••••"
              autoComplete="new-password"
              aria-invalid={actionData?.errors?.password ? true : undefined}
              aria-describedby="password-error"
              ref={passwordRef}
            />
            <span className="block pt-1 font-light text-gray-400">
              Must have at least 6 characters.
            </span>
          </div>
          <button
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Create Account
          </button>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <div className="flex items-center justify-center">
            <div className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                className="text-blue-600 hover:underline dark:text-blue-500"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
