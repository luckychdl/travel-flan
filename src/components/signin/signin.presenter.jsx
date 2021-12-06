import { useNavigate } from "react-router"
import {
  MainWrapper,SubWrapper,Title,InputUserInfo,AutoSignIn,BtnWrapper,SignInBtn,SignUpBtn,Wrapper
} from "./signin.styles"

const SignInUI = (props) => {
  const navigate = useNavigate()
  const autoSign = localStorage.getItem("autoSign")
  return (
    
    <MainWrapper>
      {autoSign && navigate("/albums")}
      <SubWrapper>
        <Title>TRAVEL FLAN</Title>
        <InputUserInfo placeholder="E-mail" name="email" onChange={props.onChangeSignIn}/>
        <InputUserInfo placeholder="Password" name="password" type="password" onChange={props.onChangeSignIn}/>
        <Wrapper>
          <AutoSignIn type="checkbox" label="asd" onClick={props.onClickAutoSignIn} /> <label style={{fontSize:"14px"}}>자동로그인</label>
        </Wrapper>
        <BtnWrapper>
          <SignInBtn onClick={props.onClickSignIn}>로그인</SignInBtn>
          <SignUpBtn>회원가입</SignUpBtn>
        </BtnWrapper>
      </SubWrapper>
    </MainWrapper>
  )
}

export default SignInUI