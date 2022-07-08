import type { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { Invoice } from "~/models/invoices.server";
import { getInvoices } from "~/models/invoices.server";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const openInvoices = await getInvoices({});

  return { userId, openInvoices };
};

export function AdminNavLinks({ openInvoices }: { openInvoices?: Invoice[] }) {
  const hasOpenInvoices = openInvoices ? true : false;
  if (hasOpenInvoices && openInvoices) {
    return (
      <>
        <div className="flex items-center">
          <Link className="" to={"invoices"}>
            Invoices
          </Link>
          <Link className="ml-2 hidden md:block" to={"invoices/new"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>
        </div>
        <div className="ml-2">
          {openInvoices.map((i) => (
            <Link key={i.id} to={`invoices/${i.id}`}>
              {}
            </Link>
          ))}
        </div>
        <Link className="block" to={"items"}>
          Invoice Items
        </Link>
        <Link className="ml-2 block" to={"items/new"}>
          New Item
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link className="" to={"invoices"}>
          Invoices
        </Link>
        <Link className="ml-2 hidden md:block" to={"invoices/new"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Link>
        <Link className="ml-2 block md:hidden" to={"invoices/new"}>
          Create Invoice
        </Link>
        <Link className="block" to={"items"}>
          Invoice Items
        </Link>
        <Link className="ml-2 block" to={"items/new"}>
          New Item
        </Link>
      </>
    );
  }
}
//TODO: fix styling on admin navigation
export default function Admin() {
  const { openInvoices }: { openInvoices: Invoice[] } = useLoaderData();
  console.log(openInvoices);
  return (
    <div className="px-6">
      <div className="flex">
        <nav className="hidden w-1/6 rounded-lg bg-slate-800 py-4 px-6 text-lg font-medium text-white md:block">
          <h3 className="text-2xl font-light text-white">Invoicing</h3>
          <hr className="pb-2" />
          <AdminNavLinks openInvoices={openInvoices} />
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
