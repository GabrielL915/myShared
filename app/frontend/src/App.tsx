import "./App.css";
import FileHistory from "./components/feature/FileHistory";
import { Button } from "./components/ui/button";
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
  return (
    <MainLayout>
      <FileHistory files={mockData} />
      <Button>Click me</Button>
    </MainLayout>
  );
}

export default App;
