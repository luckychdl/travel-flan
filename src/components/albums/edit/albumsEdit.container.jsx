import { useContext } from "react"
import { useState } from "react"
import { GlobalContext } from "../../../App"
import AlbumEditUI from "./albumsEdit.presenter"

const AlbumEdit = (props) => {
  const {data, setData, id ,index } = useContext(GlobalContext)
  const [edit, setEdit] = useState(data[index].title)
  const onChangeInput = (e) => {
    setEdit(e.target.value)
  }
  const onClickEdit = () => {
    if (edit === "") {
      alert("제목을 입력해 주세요")
    }
    else {
      setData(
      data.map((el) => Number(id) === el.id ? {...el,title:edit} : el )
      )
    
    props.setIsActive(false)
    }
    
  }
  return <AlbumEditUI onChangeInput={onChangeInput} onClickEdit={onClickEdit} edit={edit}/>
}

export default AlbumEdit