import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  [key: string]: any;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
      <button
        className="w-full cursor-pointer bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-500 transition"
        {...props}
      >
        {children}
      </button>
    );
  }
  