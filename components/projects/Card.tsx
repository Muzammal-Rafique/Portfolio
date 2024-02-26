// components/PortfolioCard.tsx
import Image from "next/image";
import React from "react";

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  link1: string;
  link2: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageSrc,
  title,
  description,
  tags,
  link1,
  link2,
}) => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-primary-300 to-secondary-300 shadow-md rounded-md overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-[500px] h-[250px]"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4 rounded-md">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gradient-to-r from-primary-200 to-secondary-200  text-gray-700 px-2 py-1 mr-2 mb-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
