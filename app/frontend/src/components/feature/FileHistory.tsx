import React from "react";
import { FileItem } from "../../lib/types";

interface FileHistoryProps {
  files: FileItem[];
}

const FileHistory: React.FC<FileHistoryProps> = ({ files }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-custombackground p-4 border-r-2 border-white">
      <h2 className="text-lg  text-customText font-bold mb-4 text-center">
        File History
      </h2>
      <ul>
        {files.map((file) => (
          <li
            key={file.id}
            className="flex items-center mb-3 p-2 bg-customcard rounded hover:bg-gray-800"
          >
            <img
              src={file.icon}
              alt={`${file.name} icon`}
              className="w-8 h-8 mr-3"
            />
            <div>
              <p className="text-sm text-customText font-medium">{file.name}</p>
              <p className="text-xs text-gray-400">{file.type}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FileHistory;
