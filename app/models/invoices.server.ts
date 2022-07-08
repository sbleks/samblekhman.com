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

type InvoiceOptions = {
  clientId?: Client["id"];
  allInvoices?: boolean;
};

export type InvoiceItem = {
  id: string;
  invoice_id?: null | number;
  item: string;
  hours: number;
  description?: string | null;
  created_at: Date;
  updated_at: Date;
  ticket: number | null;
  client_id: string;
};

export async function GetInvoiceItems({
  clientId,
}: {
  clientId?: InvoiceItem["client_id"];
}) {
  if (clientId) {
    const { data, error } = await supabase
      .from("items")
      .select(
        "id, invoice_id, item, hours, description, ticket, created_at, updated_at, client_id"
      )
      .eq("client_id", clientId);
    console.log(`getting all invoice items for client: ${clientId}`);
    if (error) return null;
    return data;
  } else {
    const { data, error } = await supabase
      .from("items")
      .select(
        "id, invoice_id, item, hours, description, ticket, created_at, updated_at, client_id"
      );
    console.log(`getting all invoice items`);
    if (error) return null;
    return data;
  }
}

export async function getInvoices({
  clientId,
  allInvoices = false,
}: {
  clientId?: Client["id"];
  allInvoices?: boolean;
}): Promise<Invoice[] | null> {
  if (clientId && allInvoices) {
    const { data, error } = await supabase
      .from("invoices")
      .select(
        "id, start_date, end_date, created_at, updated_at, paid, sent, due_date, client_id"
      )
      .eq("client_id", clientId);
    console.log(`getting all invoices for client: ${clientId}`);
    if (error) return null;
    return data;
  } else if (clientId) {
    const { data, error } = await supabase
      .from("invoices")
      .select(
        "id, start_date, end_date, created_at, updated_at, paid, sent, due_date, client_id"
      )
      .eq("client_id", clientId)
      .eq("paid", false);
    console.log(`getting open invoices for client: ${clientId}`);
    if (error) return null;
    return data;
  } else if (allInvoices) {
    const { data, error } = await supabase
      .from("invoices")
      .select(
        "id, start_date, end_date, created_at, updated_at, paid, sent, due_date, client_id"
      );
    console.log(`getting all invoices`);
    if (error) return null;
    return data;
  } else {
    const { data, error } = await supabase
      .from("invoices")
      .select(
        "id, start_date, end_date, created_at, updated_at, paid, sent, due_date, client_id"
      )
      .eq("paid", false);
    console.log("getting open invoices");
    if (error) return null;
    return data;
  }
}

export async function getClients() {
  const { data } = await supabase.from("clients").select("id, name");
  return data;
}

export async function createInvoice(items: []) {
  const invoiceItems = items.map((element) => {});
}
