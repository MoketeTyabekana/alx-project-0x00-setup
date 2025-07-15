import React from "react";
import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <button className="border px-3 py-1 text-lg mt-3 bg-amber-500 text-white sm:size-sm md:size-md lg:size-lg sm:rounded-sm md:rounded-md lg:rounded-full">
      {label}
    </button>
  )
}

export default Button;