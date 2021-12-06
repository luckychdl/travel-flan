import { Spin } from "antd"
import {
  Loading,
  Title,
  MainWrapper,
  LogOutWrapper,
  LogOutBtn,
  AlbumListWrapper,
  Wrapper,
  AlbumNumber,
  AlbumTitle,Image,
  DataWrapper
} from "./albums.styles"
const AlbumsUI = (props) => {
console.log(props.data,"asd")
  return (
    <>
    <Title>TRAVEL FLAN</Title>
    <MainWrapper>
    <LogOutWrapper>
        <LogOutBtn onClick={props.onClickLogOut}>Sign out</LogOutBtn>
      </LogOutWrapper>
      <AlbumListWrapper>
      
      {props.data.map((el) => {
        return (
      <DataWrapper>
        <Wrapper key={el.id}>
          <AlbumNumber>No.{el.id}</AlbumNumber>
          <AlbumTitle>{el.title}</AlbumTitle>
        </Wrapper>
        <Image src="http://placehold.it/200x150" />
      </DataWrapper>
      )}
      )}

      </AlbumListWrapper>
      {props.isLoading && 
      <Loading>
        <Spin />
      </Loading>
    }
    </MainWrapper>
    </>
    
    )
    
}
export default AlbumsUI
