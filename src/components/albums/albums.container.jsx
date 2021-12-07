import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import AlbumsUI from "./albums.presenter"


const Albums = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(5)
  const [addInput, setAddInput] = useState("")
  const navigate = useNavigate()
  const onClickLogOut = () => {
    localStorage.removeItem("autoSign")
    navigate("/")
  }
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
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    function currentPosts(tmp) {
      let currentPosts = 0;
      currentPosts = tmp.slice(indexOfFirst, indexOfLast);
      return currentPosts;
    }

    const onClickNextPage = () => {
      if ( currentPage === 20 ){
        return
      }
      else {
        setCurrentPage(prev => prev+1)
      }
    }
    const onClickPrevPage = () => {
      if ( currentPage === 1) {
        return
      }
      else {
        setCurrentPage(prev => prev-1)
      }
    }
    const onChangeInput = (e) => {
      setAddInput(e.target.value)
    }
    const onClickAddList = () => {
      setData([{
        userId: data[0].userId + 1,
        id: data[0].id + 1,
        title: addInput,
      }].concat(data))
      
    }
    const onClickDeleteAddList = (id) => {
      if( window.confirm ("정말로 삭제하시겠습니까?")) {
        setData(data.filter((el)=> el.id !== id))
      }
    }
  return (<AlbumsUI 
            onClickAddList={onClickAddList}
            onClickLogOut={onClickLogOut} 
            onClickNextPage={onClickNextPage}
            onClickPrevPage={onClickPrevPage}
            onChangeInput={onChangeInput}
            onClickDeleteAddList={onClickDeleteAddList}
            data={currentPosts(data)}
            isLoading={isLoading} 
            perPage={perPage} 
            currentPage={currentPage}
            totalData={data.length} 
            paginate={setCurrentPage}/>)
}

export default Albums