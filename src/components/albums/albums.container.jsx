import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { GlobalContext } from "../../App"
import AlbumsUI from "./albums.presenter"


const Albums = () => {
  const {data, setData,isLoading, setId, setIndex} = useContext(GlobalContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(5)
  const [addInput, setAddInput] = useState("")
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()
  const onClickLogOut = () => {
    localStorage.removeItem("autoSign")
    navigate("/")
  }
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
    if (addInput === "") {
      alert("제목을 입력해주세요")
    }
    else {setData([{
      userId: data[0].userId + 1,
      id: data[0].id + 1,
      title: addInput,
    }].concat(data))
  }
  }
  const onClickDeleteAddList = (id) => {
    if( window.confirm ("정말로 삭제하시겠습니까?")) {
      setData(data.filter((el)=> el.id !== id))
    }
  }
  const onClickEdit = (id, idx) => {
    setIsActive(true)
    setId(id)
    setIndex(idx)
  }
  return (
    <AlbumsUI 
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
      isActive={isActive}
      setIsActive={setIsActive}
      paginate={setCurrentPage}
      onClickEdit={onClickEdit}
      />
      
  )
}

export default Albums