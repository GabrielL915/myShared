import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { TopNav } from './components/feature/TopNav';
import SheetsPage from './pages/SheetPage';
import SheetCreation from './pages/SheetCreation';
import SignInPage from './pages/SignInPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <MainLayout>
        <TopNav isLoggedIn={isLoggedIn} onSignIn={handleSignIn} />
        <Routes>
          <Route 
            path="/" 
            element={isLoggedIn ? <SheetsPage /> : <Navigate to="/" />} 
          />
          <Route 
            path="/create" 
            element={isLoggedIn ? <SheetCreation /> : <Navigate to="/signin" />} 
          />
          <Route 
            path="/signin" 
            element={!isLoggedIn ? <SignInPage /* onSignIn={handleSignIn} */ /> : <Navigate to="/" />} 
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;