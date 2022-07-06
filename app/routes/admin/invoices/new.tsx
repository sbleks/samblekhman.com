import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import type { Client } from "~/models/invoices.server";
import { getClients, getInvoices } from "~/models/invoices.server";

export const loader: LoaderFunction = async ({ request }) => {
  const invoices = await getInvoices();
  const clients = await getClients();
  return { invoices, clients };
};

export default function Invoices() {
  const { clients } = useLoaderData();
  clients.sort((a: Client, z: Client) => {
    if (a.name > z.name) return 1;
    if (a.name < z.name) return -1;
    return 0;
  });
  const [itemCount, setItemCount] = useState(1);
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col items-center justify-center gap-8 p-16 dark:text-gray-50">
      <h1 className="text-4xl font-semibold">Create Invoice</h1>
      <Form method="post" className="w-full" autoComplete="off">
        <label
          htmlFor="client-select"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Client
        </label>
        <select
          id="client-select"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          {clients.map((client: Client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
        <div className="pt-4 lg:relative">
          {new Array(itemCount).fill("").map((_, i) => {
            const isLastButton = Boolean(i + 1 === itemCount);
            const isFirstButton = Boolean(1 === itemCount);
            return (
              <div key={i} className="flex items-center gap-4 pb-4 lg:block">
                <label
                  htmlFor={`item-${i}`}
                  className=" mb-2 block flex-shrink-0 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{`Item #${i + 1}`}</label>
                <input
                  type="text"
                  id={`item-${i}`}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                {isLastButton && (
                  <>
                    <button
                      className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 lg:absolute lg:-right-16"
                      onClick={(e) => {
                        e.preventDefault();
                        setItemCount(itemCount + 1);
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                    {!isFirstButton && (
                      <button
                        className="inline-flex items-center rounded-full border border-red-700 p-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 lg:absolute lg:-right-[7.5rem]"
                        onClick={(e) => {
                          e.preventDefault();
                          setItemCount(itemCount - 1);
                        }}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="start_date"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start_date"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="end_date"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              End Date
            </label>
            <input
              type="date"
              id="end_date"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
