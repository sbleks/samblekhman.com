import { supabase } from "./user.server";

export type Client = { id: string; name: string };
export type Invoice = {
  id: string;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
  paid: boolean;
  sent: boolean;
  due_date: Date;
  client_id: string;
};

export async function getInvoices() {
  const { data } = await supabase
    .from("invoices")
    .select(
      "id, start_date, end_date, created_at, updated_at, paid, sent, due_date, client_id"
    );
  return data;
}

export async function getClients() {
  const { data } = await supabase.from("clients").select("id, name");
  return data;
}

export async function createInvoice(items: []) {
  const invoiceItems = items.map((element) => {});
}
