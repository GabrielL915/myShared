import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SheetDescription from "@/components/feature/SheetDescription";
import FileInput from "@/components/feature/FileInput";
import CodeTextarea from "@/components/feature/CodeTextarea";

const SheetCreation = () => {
  const [files, setFiles] = useState([{ id: Date.now(), filename: "", code: "" }]);

  const handleAddFile = () => {
    setFiles([...files, { id: Date.now(), filename: "", code: "" }]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <main className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Create a New Sheet</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <SheetDescription />

          {files.map((file, index) => (
            <div key={file.id} className="mb-6">
              <FileInput index={index} />
              <CodeTextarea />
            </div>
          ))}

          <div className="flex justify-between items-center">
            <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600" onClick={handleAddFile}>
              Add file
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 flex items-center">
              Create secret sheet
              <ChevronDown size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SheetCreation;
