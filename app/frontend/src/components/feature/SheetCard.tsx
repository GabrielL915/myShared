import React from "react";
import { FileText } from "lucide-react";

interface SheetCardProps {
  username: string;
  repoName: string;
  lastActive: string;
  fileCount: number;
  tags: string[];
}

const SheetCard: React.FC<SheetCardProps> = ({
  username,
  repoName,
  lastActive,
  fileCount,
  tags,
}) => {
  return (
    <div className="flex flex-col p-4 text-white border-b border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <img
            src="/api/placeholder/20/20"
            alt="Profile picture"
            className="w-5 h-5 rounded-full mr-3"
          />
          <div className="text-sm">
            <div className="flex items-center">
              <a href="#" className="text-blue-400 hover:underline mr-1">
                {username}
              </a>
              <span className="text-gray-500">/</span>
              <a href="#" className="text-blue-400 hover:underline ml-1">
                {repoName}
              </a>
            </div>
            <div className="text-gray-400 text-xs">
              Last active {lastActive}
            </div>
          </div>
        </div>
        <div className="flex items-center text-xs text-gray-400">
          <FileText className="w-4 h-4 mr-1" />
          <span>{`${fileCount} files`}</span>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SheetCard;
