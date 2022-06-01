import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { MetaFunction, LoaderFunction, json } from "@remix-run/node";
import styles from "~/tailwind.css";
import Layout from "./components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { getUser } from "./session.server";

export const meta: MetaFunction = () => {
  return {
    title: "Sam Blekhman",
    "theme-color": "#0f172a",
    description:
      "My name is Sam Blekhman. I am an operations and technology engineer that believes in making the world a better place. I work with organizations making an impact on both the world as we know it today and, inexorably, on its future.",
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/sfavicon32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: "/sfavicon180.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/sfavicon16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap",
    },
    { rel: "stylesheet", href: styles },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Layout>
          <div>
            <h1>There was an error</h1>
            <p>{error.message}</p>
          </div>
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p className="text-white">
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p className="text-white">
          Oops! Looks like you tried to visit a page that does not exist.
        </p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Layout>
          <h1 className="text-white">
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

function Document({
  children,
  title = "Sam Blekhman",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body className="dark:bg-slate-900 md:flex md:min-h-screen md:flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
