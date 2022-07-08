import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { Client } from "~/models/invoices.server";
import { getClients } from "~/models/invoices.server";

export const loader: LoaderFunction = async () => {
  const clients = await getClients();
  return { clients };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  return redirect("/admin/items");
};

export default function Invoices() {
  const { clients } = useLoaderData();
  clients.sort((a: Client, z: Client) => {
    if (a.name > z.name) return 1;
    if (a.name < z.name) return -1;
    return 0;
  });
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col items-center justify-center gap-8 p-16 dark:text-gray-50">
      <h1 className="text-4xl font-semibold">Create Invoice Item</h1>
      <Form method="post" className="grid w-full gap-4" autoComplete="off">
        <div className="">
          <label
            htmlFor="client-select"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Client
          </label>
          <select
            id="client-select"
            name="client"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option value="" defaultChecked>
              Select...
            </option>
            {clients.map((client: Client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="hours"
              className="mb-2 block w-full flex-shrink-0 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hours
            </label>
            <input
              type="number"
              id="hours"
              name="hours"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-full"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="ticket"
              className="mb-2 block w-full flex-shrink-0 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ticket Number
            </label>
            <input
              type="number"
              id="ticket"
              name="ticket"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-full"
            />
          </div>
        </div>
        <div className="">
          <label
            htmlFor="item"
            className="mb-2 block w-full flex-shrink-0 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Item
          </label>
          <input
            type="text"
            id="item"
            name="item"
            required
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:w-full"
          />
        </div>

        <div className="">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            name="description"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Item
          </button>
        </div>
      </Form>
    </div>
  );
}
