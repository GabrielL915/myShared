import { FileText } from "lucide-react";

interface SheetCardProps {
  username: string;
  repoName: string;
  lastActive: string;
  description: string;
  fileCount: number;
}
const SheetCard = ({ username, repoName, lastActive, description, fileCount }: SheetCardProps) => {
    return (
      <div className="flex items-center p-4 bg-gray-800 text-white border-b border-gray-700">
        <img
          src="/api/placeholder/40/40"
          alt="Profile picture"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center">
            <a href="#" className="text-blue-400 hover:underline">
              {username}
            </a>
            <span className="mx-1">/</span>
            <a href="#" className="text-blue-400 hover:underline">
              {repoName}
            </a>
          </div>
          <div className="text-gray-400">Last active {lastActive}</div>
          <div className="text-gray-400">{description}</div>
        </div>
        <div className="flex items-center">
          <FileText className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-gray-400">{fileCount} {fileCount === 1 ? 'file' : 'files'}</span>
        </div>
      </div>
    );
  };
export default SheetCard;
