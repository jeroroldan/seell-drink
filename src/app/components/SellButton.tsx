import * as React from "react";
import { Button } from "@/components/ui/button";

interface ModernButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SellButton({ children, ...props }: ModernButtonProps) {
  return (
    <Button
      className="
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white font-semibold py-2 px-6
        rounded-full shadow-lg
        transform transition duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
        w-60
      "
      {...props}
    >
      {children}
    </Button>
  );
}
