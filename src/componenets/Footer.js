import { React } from "react";
import { AiOutlineApple } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-center h-8 bg-indigo-600 ">
      <p className=" text-white text-3xl">
        <AiOutlineApple />
      </p>
    </div>
  );
}
