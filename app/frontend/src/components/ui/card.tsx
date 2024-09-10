import React from "react";

interface CardProps {
  icon: string;
  name: string;
  type: string;
}

const Card: React.FC<CardProps> = ({ icon, name, type }) => {
  return (
    <li className="flex items-center mb-3 p-2 bg-customcard rounded hover:bg-gray-800">
      <img src={icon} alt={`${name} icon`} className="w-8 h-8 mr-3" />
      <div>
        <p className="text-sm text-customText font-medium">{name}</p>
        <p className="text-xs text-gray-400">{type}</p>
      </div>
    </li>
  );
};

export default Card;
