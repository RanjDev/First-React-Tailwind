import React from "react";
import Card from "./Card";

export default function Cards() {
  let iPhoneInfo = [
    {
      model: "iPhone 13 Pro Max",
      desc: "The best phone ever. Superior to anything else.",
      imgSrc: "https://pngimg.com/uploads/iphone_13/iphone_13_PNG29.png",
    },
    {
      model: "iPhone 12",
      desc: "One of the bests of its generation. Superior to anything else.",
      imgSrc: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG17.png",
    },
    {
      model: "iPhone 12 Pro Max",
      desc: "The best of its generation. Superior to anything else. a Beast in  performance.",
      imgSrc: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png",
    },
    {
      model: "Mac Book Pro 16",
      desc: "I cry everytime I see this and know I can't afford it.",
      imgSrc: "https://pngimg.com/uploads/macbook/macbook_PNG16.png",
    },
  ];
  return (
    <div className="p-4 m-auto flex flex-col sm:flex-row sm:flex-wrap">
      {iPhoneInfo.map((info) => {
        return (
          <Card model={info.model} desc={info.desc} imgSrc={info.imgSrc} />
        );
      })}
    </div>
  );
}
