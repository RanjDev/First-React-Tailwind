import React from "react";
import {
  AiOutlineApple,
  AiOutlineRise,
  AiOutlineSend,
  AiOutlineSketch,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div>
      <div className="absolute w-screen p-1 text-4xl text-white text-center bg-purple-400 custom-banner animate-fadeOut">
        Stay Safe from Covid-19
      </div>
      <div className="w-screen flex flex-row justify-center bg-indigo-500 shadow-lg">
        <ul className="flex flex-row gap-40 p-2 text-white">
          <li>
            <a
              href="https://www.apple.com/"
              className="text-4xl transition-all duration-300 hover:text-purple-100 hover:text-3xl"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineApple />
            </a>
          </li>
          <li>
            <a
              href="https://www.nasdaq.com/"
              className="text-4xl transition-all duration-300 hover:text-purple-100 hover:text-3xl"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineRise />
            </a>
          </li>
          <li>
            <a
              href="https://www.arrow.com/"
              className="text-4xl transition-all duration-300 hover:text-purple-100 hover:text-3xl
              "
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineSend />
            </a>
          </li>
          <li>
            <a
              href="https://diamondanddesign.com/"
              className="text-4xl transition-all duration-300 hover:text-purple-100 hover:text-3xl
              "
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineSketch />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
