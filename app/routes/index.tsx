import { Form, Link, useActionData } from "@remix-run/react";
import type {
  ActionFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import stylesURL from "~/styles/tailwind.css";
import Layout from "~/components/layout";
import { useOptionalUser } from "~/utils";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesURL,
    },
  ];
};

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <div className="py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="font-cursive text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Sam Blekhman
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500 dark:text-gray-400">
            Operations and Technology Engineer
          </p>
        </div>
      </div>
      <section>
        <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-7xl lg:ml-auto">
            <h2 className="mb-4 text-3xl font-extrabold text-white">
              About me
            </h2>
            <div className="prose prose-lg mb-6 dark:prose-invert">
              <p>
                I am an operations and technology engineer that believes in
                making the world a better place through software. I work with
                organizations making an impact on both the world as we know it
                today and, inexorably, on its future.
              </p>
              <p>
                You can see some of my work in my{" "}
                <Link to="/portfolio">portfolio</Link>. If you would like to get
                in contact with me about a potential project, email me at{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:sam@bleks.dev"
                >
                  sam@bleks.dev
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
