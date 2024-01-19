//Stock
import { ComboboxData, TextareaProps } from "@mantine/core";
import React from "react";

export interface StockItemProps {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

export interface StockListProps {
  stock: StockItemProps[];
}

//Listing Details
export interface ContactFormProps {
  fullName: string;
  email: string;
  phone: number | string;
  comments: string;
}

export interface CustomTextareaProps extends TextareaProps {
  type: "email" | "text" | "number" | "tel" | "password";
  pattern?: string;
}

//Filter

export interface FilterInputsProps {
  bedrooms: string;
  bathrooms: string;
  parking: string;
  price_range: number;
}

export interface SelectFieldsProps {
  name: "bedrooms" | "bathrooms" | "parking" | "price_range";
  label: string;
  placeholder: string;
  data: ComboboxData;
}

//UI

export interface CustomModalProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface AlertProps {
  color?: string;
  title?: string;
  description?: string;
}
