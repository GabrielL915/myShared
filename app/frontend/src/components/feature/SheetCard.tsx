import { FileText } from "lucide-react";

interface SheetCardProps {
  username: string;
  repoName: string;
  lastActive: string;
  fileCount: number;
  tags: string[];
  selected: boolean; // Novo: para indicar se o card está selecionado
  onSelect: () => void; // Novo: callback para alternar a seleção
}

const SheetCard: React.FC<SheetCardProps> = ({
  username,
  repoName,
  lastActive,
  fileCount,
  tags,
  selected,
  onSelect,
}) => {
  return (
    <div className={`flex flex-col p-4 text-white border-b border-gray-700 ${selected ? 'bg-gray-600' : 'bg-gray-800'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <input type="checkbox" checked={selected} onChange={onSelect} className="mr-3" />
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
            className="px-2 py-1 mr-2 mb-2 text-xs rounded bg-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SheetCard;
