import { Spin } from "antd"
import { useState } from "react"
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
  DataWrapper,
  PaginationWrapper,
  PrevPage,
  PageLi,
  PageSpan,
  NextPage
} from "./albums.styles"


const AlbumsUI = (props) => {
  const [isActive , setIsActive] = useState([])
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalData / props.perPage); i ++) {
      pageNumbers.push(i);
    }
    
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
      <PaginationWrapper>
        <PrevPage onClick={props.onClickPrevPage}>{'<'}</PrevPage>
          {pageNumbers.map((number) => (
            <PageLi key={number}>
              <PageSpan onClick={()=> props.paginate(number)} >{number}</PageSpan>
            </PageLi>
          ))}
        <NextPage onClick={props.onClickNextPage}>{'>'}</NextPage>
      </PaginationWrapper>
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
