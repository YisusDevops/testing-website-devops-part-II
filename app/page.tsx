import { StockList } from "@/components";
import React from "react";
import { getStock } from "@/services";
export default async function Home() {
  const data = await getStock();

  return <StockList stock={data} />;
}
