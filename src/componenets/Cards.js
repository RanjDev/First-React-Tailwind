import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="flex justify-center">
      <p className="text-center text-yellow-100">
        Cards to display some apple techs
      </p>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
