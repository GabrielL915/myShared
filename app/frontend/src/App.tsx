import "./App.css";
import FileHistory from "./components/feature/FileHistory";
import { Input } from "./components/ui/input";
import MainLayout from "./layout/MainLayout";
import FileUpload from "./components/feature/FileUpload";
import { useState } from "react";
import { FileItem } from "./lib/types";

function App() {
  const [fileName, setFileName] = useState<string[]>([]);

  const [mockData, setMockData] = useState<FileItem[]>([]);
  const [idFrom, setIdFrom] = useState<string>('');
  const [idTo, setIdTo] = useState<string>('');

  const handleFileSelect = (files: File[]) => {
    const newFiles = files.map((file, index) => ({
      id: (mockData.length + index + 1).toString(),
      icon: "./assets/react.svg",
      name: file.name,
      type: file.name.split('.').pop() || 'unknown',
      idFrom: idFrom,
      idTo: idTo,
    }));

    setMockData((prev) => [...prev, ...newFiles]);
    setFileName((prev) => [...prev, ...newFiles.map((file) => file.name)]);
  };

  return (
    <MainLayout>
      <FileHistory files={mockData} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex items-center space-x-1">
          <Input placeholder="Enter id" />
          <FileUpload onFileSelect={handleFileSelect} />
        </div>
        {fileName.length > 0 && (
          <div className="mt-2 text-center text-customText">
            <pre>{fileName.map((name) => `${name}\n`)}</pre>
            </div>
        )}
      </div>
    </MainLayout>
  );
}

export default App;
