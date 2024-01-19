import { CustomTextareaProps } from "@/interfaces";

export const contactData: CustomTextareaProps[] = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Full Name *",
    error: "This field is required / Invalid name",
    required: true,
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email *",
    error: "This field is required / Invalid email",
    required: true,
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone *",
    error: "This field is required / Invalid phone (10 digits)",
    required: true,
    type: "number",
    pattern: "^\\d{10}$",
  },
];
