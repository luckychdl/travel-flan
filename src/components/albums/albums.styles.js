import styled from "styled-components"

export const Loading = styled.div`
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px; 
`
export const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-top: 80px;
  text-align: center;
  height: 150px;
`
export const MainWrapper = styled.div`
  width : 100vw;
  /* max-width: 1200px; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* margin:0; */
  
`
export const LogOutWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  /* margin: 0px; */
  
`
export const LogOutBtn = styled.button`
  font-size: 18px;
  font-weight: 500;
  background-color: #FFFFFF;
  border:none;
  padding: 10px;
  border-bottom: 2px solid #BDBDBD;
  :hover {
    background-color: #BDBDBD;
  }
  :active {
    position: relative;
    top:2px;
  }
  
`
export const AlbumListWrapper = styled.div`
  width:100%;
  max-width: 1200px;
  /* height: 800px; */
  border-bottom: 1px solid #BDBDBD;
`
export const Wrapper = styled.div`
display: flex;
width:100%;
align-items: center;
height: 150px;
border-top: 1px solid #BDBDBD;

`
export const AlbumNumber = styled.div`
  font-size: 30px;
  margin-right: 40px;
`
export const AlbumTitle = styled.div`
  font-size: 30px;
`
export const Image = styled.img`
  width: 200px;
  height: 150px;
`
export const DataWrapper = styled.div`
display: flex;
:hover{
  background-color: #EEEEEE;
}
:active {
  position: relative;
  top:2px;
}
`
export const PaginationWrapper = styled.div`
width: 1200px;
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top: 30px;
`
export const PrevPage = styled.div`
  width: 30px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  margin:0;
  line-height: 30px;
  `
export const PageLi = styled.div`
  /* padding:10px;   */
  text-align: center;
  
`
export const PageSpan = styled.div`
font-size: 15px;
cursor: pointer;
width: 30px;
height: 30px;
text-align: center;
line-height: 30px;
:hover {
  background-color: #BDBDBD;
  border-radius: 50px;
  text-align: center;
}
  `
export const NextPage = styled.div`
  width: 30px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  margin:0;
  line-height: 30px;
`
