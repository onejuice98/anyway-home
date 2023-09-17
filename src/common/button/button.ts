import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "danger";
  url?: string;
  children?: ReactNode;
}

export const buttonConfig = {
  primary: {
    bgColor: "bg-primary",
    color: "text-white",
    hover: "hover:bg-teal-700",
  },
  secondary: {
    bgColor: "bg-secondary",
    color: "text-white",
    hover: "hover:bg-teal-700",
  },
  danger: {
    bgColor: "bg-danger",
    color: "text-white",
    hover: "hover:bg-teal-700",
  },
};
