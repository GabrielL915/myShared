import "./App.css";
import { Button } from "./components/ui/button";

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
    <div className="text-customText">
      <aside className="fixed left-0 top-0 h-full w-64 bg-custombackground p-4 border-r-2 border-white">
        <h2 className="text-lg font-bold mb-4 text-center">File History</h2>
        <ul>
          {mockData.map((item) => (
            <li
              key={item.id}
              className="flex items-center mb-3 p-2 bg-customcard rounded hover:bg-gray-800"
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-8 h-8 mr-3"
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">{item.type}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <div className="ml-64 p-6">
        <header className="App-header">
          <p>MyShared</p>
        </header>
        <Button>Send File</Button>
      </div>
    </div>
  );
}

export default App;
