import React from "react";

export default function Card(props) {
  return (
    <div className=" flex flex-col items-center justify-between shadow-2xl mx-auto w-80 p-4 transition-all duration-200 transform hover:skew-y-2 hover:skew-x-2">
      <h1 className="text-center text-lg font-bold text-purple-800">
        {props.model}
      </h1>
      <img src={props.imgSrc} alt="" />
      <p className="text-center font-bold">{props.desc}</p>
    </div>
  );
}
