import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="flex justify-center">
      <div className="custom-div  bg-purple-600 h-96 w-10/12 p-16 m-16 flex flex-row justify-around items-center">
        <div className="flex justify-around items-center flex-none w-72 h-72 animate-fadeInT">
          <p className="text-center text-white text-2xl">
            This page is dedicated to iPhone Lovers. iPhone is the greatest
            technology ever. If you agree, please give me $1600 to buy a new
            iPhone 13 Pro Max. Thank you kind sir.
          </p>
        </div>
        <div className="flex-none w-72 h-72 animate-fadeInP">
          <img
            src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG5.png"
            alt="Iphone 13."
          ></img>
        </div>
      </div>
    </div>
  );
}
