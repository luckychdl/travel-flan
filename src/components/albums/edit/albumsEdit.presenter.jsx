import {
  EditListWrapper,
  EditListInput,
  EditListBtn
}from "./albumsEdit.styles"

const AlbumEditUI = (props) => {

  return (
    <>
      <EditListWrapper>
        <EditListInput placeholder="Edit Title" onChange={props.onChangeInput} defaultValue={props.edit}></EditListInput>
        <EditListBtn onClick={props.onClickEdit}>EDIT</EditListBtn>
      </EditListWrapper>
    </>
  )
}

export default AlbumEditUI