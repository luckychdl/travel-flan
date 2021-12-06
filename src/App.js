import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Albums from './components/albums/albums.container';
import SignIn from './components/signin/signin.container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
