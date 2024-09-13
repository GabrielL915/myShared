import "./App.css";
import FileHistory from "./components/feature/FileHistory";
import { Input } from "./components/ui/input";
import MainLayout from "./layout/MainLayout";
import FileUpload from "./components/feature/FileUpload";
import { useState } from "react";

const mockData = [
  {
    id: "1",
    icon: "./assets/react.svg",
    name: "file1",
    type: "txt",
    idFrom: "1",
    idTo: "2",
  },
  {
    id: "2",
    icon: "./assets/react.svg",
    name: "file2",
    type: "txt",
    idFrom: "2",
    idTo: "1",
  },
  {
    id: "3",
    icon: "./assets/react.svg",
    name: "file2",
    type: "txt",
    idFrom: "2",
    idTo: "1",
  },
];

function App() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    console.log(file.name);
    setFileName(file.name);
  };

  return (
    <MainLayout>
      <FileHistory files={mockData} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex items-center space-x-1">
          <Input placeholder="Enter id" />
          <FileUpload onFileSelect={handleFileSelect} />
        </div>
        {fileName && (
        <div className="mt-2 text-center text-customText">
          <pre>{fileName}</pre>
        </div>
      )}
      </div>
    </MainLayout>
  );
}

export default App;
