import React from "react";

interface RecType {
  title: string;
  calories: string;
  image: string;
}

export const Recipe: React.FC<RecType> = ({ title, calories, image }) => {
  return (
    <div>
      <h1> {title} </h1>
      <p> {calories} </p>
      <img src={image} alt="" />
    </div>
  );
};
