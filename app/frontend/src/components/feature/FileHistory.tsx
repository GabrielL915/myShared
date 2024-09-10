import React from "react";
import Card from "../ui/card";
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
          <Card key={file.id} icon={file.icon} name={file.name} type={file.type} />
        ))}
      </ul>
    </aside>
  );
};

export default FileHistory;
