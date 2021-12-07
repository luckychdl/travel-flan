import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Albums from './components/albums/albums.container';
import SignIn from './components/signin/signin.container';

export const GlobalContext = createContext([])
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [id, setId] = useState(Number)
  const [index, setIndex] = useState(Number)
  const getData = async () => {
    try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
    setData(res.data.reverse())
    }
    catch{
      setIsLoading(true)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const value ={
    email: "travel@naver.com",
    password: "1234",
    data: data,
    setData: setData,
    isLoading: isLoading,
    id:id,
    setId:setId,
    index: index,
    setIndex: setIndex
  }


  return (
    <GlobalContext.Provider value={value}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
