import { useState } from "react";
import "./App.css";
import { TopNav } from "./components/feature/TopNav";
import MainLayout from "./layout/MainLayout";
import SheetsPage from "./pages/SheetPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <MainLayout>
      <TopNav isLoggedIn={isLoggedIn} onSignIn={handleSignIn} />
      {isLoggedIn && <SheetsPage />}
    </MainLayout>
  );
}

export default App;
