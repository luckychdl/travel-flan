import React, { createContext } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Albums from './components/albums/albums.container';
import SignIn from './components/signin/signin.container';

export const UserInfoContext = createContext([])
function App() {

  const value ={
    email: "travel@naver.com",
    password: "1234"
  }


  return (
    <UserInfoContext.Provider value={value}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
    </UserInfoContext.Provider>
  );
}

export default App;
