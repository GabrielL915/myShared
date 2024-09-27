import "./App.css";
import { TopNav } from "./components/feature/TopNav";
import MainLayout from "./layout/MainLayout";
import SheetsPage from "./pages/SheetPage";
function App() {
  return (
    <MainLayout>
      <TopNav />
      <SheetsPage />
    </MainLayout>
  );
}

export default App;
