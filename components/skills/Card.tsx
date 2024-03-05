import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
}

const Card = ({ image, title }: CardProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-200 shadow-md rounded-md overflow-hidden">
      <Image
        src={image}
        alt="logo"
        width={200}
        height={200}
        className="p-5 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
