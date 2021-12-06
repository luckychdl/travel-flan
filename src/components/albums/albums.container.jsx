import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import AlbumsUI from "./albums.presenter"


const Albums = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()
const onClickLogOut = () => {
  localStorage.removeItem("autoSign")
  navigate("/")

}
const getData = async () => {
  try {
  const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
  setData(res.data)
  }
  catch{
    setIsLoading(true)
  }
}

useEffect(()=>{
  getData()
},[])
  return (<AlbumsUI onClickLogOut={onClickLogOut} data={data} isLoading={isLoading}/>)
}

export default Albums