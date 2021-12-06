import AlbumsUI from "./albums.presenter"


const Albums = () => {
const onClickLogOut = () => {
  localStorage.removeItem("autoSign")
}
  return (<AlbumsUI onClickLogOut={onClickLogOut}/>)
}

export default Albums