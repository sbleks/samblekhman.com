import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GetInvoiceItems } from "~/models/invoices.server";
import type { InvoiceItem } from "~/models/invoices.server";

export const loader: LoaderFunction = async () => {
  const items = await GetInvoiceItems({});
  return { items };
};

export default function InvoiceItemsIndex() {
  const { items } = useLoaderData();
  return (
    <div className="text-white">
      {items.map((item: InvoiceItem) => (
        <div key={item.id}>{item.item}</div>
      ))}
    </div>
  );
}
