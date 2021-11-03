import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center">
      <div className="custom-div  bg-purple-600 h-96 w-10/12 p-16 m-16 flex flex-row justify-center items-center sm:justify-around">
        <div className="flex flex-row z-10 justify-center items-center flex-none w-32 h-16 sm:w-64 sm:h-32 animate-fadeInT">
          <p className="text-center text-white text-sm sm:text-xl">
            This page is dedicated to iPhone Lovers. iPhone is the greatest
            technology ever. If you agree, please give me $1600 to buy a new
            iPhone 13 Pro Max. Thank you kind sir.
          </p>
        </div>
        <div className="absolute sm:relative z-0 opacity-10 sm:opacity-100 flex-none w-48 h-64 sm:visible sm:w-64 sm:h-64 animate-fadeInP">
          <img
            className=""
            src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG5.png"
            alt="Iphone 13."
          ></img>
        </div>
      </div>
    </div>
  );
}
