import axios from "axios";
import { StockItemProps } from "@/interfaces";

export async function getStock() {
  try {
    const API = process.env.BASE_API || "";
    const { data } = await axios<StockItemProps[]>(API);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
