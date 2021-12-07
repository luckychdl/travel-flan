import styled from "styled-components"

export const EditListWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display:flex;
  align-items: center;
  justify-content: center;
`
export const EditListInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 10px;
  padding-left: 20px;
  border: 1px solid #BDBDBD;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
  }
`
export const EditListBtn = styled.button`
  width: 100px;
  height: 56px;
  border: 1px solid #BDBDBD;
  background-color: #616161;
  color:#FFFFFF
`