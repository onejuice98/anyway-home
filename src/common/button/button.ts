import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "danger";
  url?: string;
  children?: ReactNode;
}

export const buttonConfig = {
  primary: {
    bgColor: "bg-primary",
    color: "text-white font-bold ",
    hover: "hover:bg-third",
  },
  secondary: {
    bgColor: "bg-secondary",
    color: "text-white font-bold",
    hover: "hover:bg-third",
  },
  danger: {
    bgColor: "bg-danger",
    color: "text-white font-bold",
    hover: "hover:bg-third",
  },
};

// 86, 134, 130
//
