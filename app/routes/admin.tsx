import type { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  return { userId };
};

export default function Admin() {
  return <Outlet />;
}
