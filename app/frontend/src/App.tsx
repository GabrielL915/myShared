import React from "react";
import "./App.css";
import FileHistory from "./components/feature/FileHistory";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import MainLayout from "./layout/MainLayout";

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
  const [fileInfo, setFileInfo] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileInfo(files[0].name);
    }
  };

  return (
    <MainLayout>
      <FileHistory files={mockData} />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex items-center space-x-1">
          <Input placeholder="Enter id" />
          <Button onClick={handleFileClick}>Send File</Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        {fileInfo && (
          <div className="mt-2 w-full text-center text-customText">
            <pre>{fileInfo}</pre>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default App;
