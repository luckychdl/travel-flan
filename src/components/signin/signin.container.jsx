import { useContext, useEffect, useState } from "react"
import {GlobalContext} from "../../App"
import SignInUI from "./signin.presenter"
import {useNavigate} from "react-router-dom"
const USER_INFO = {
  email : "",
  password: ""
}
const SignIn = () => {
  const [autoSignIn, setAutoSignIn] = useState(false)
  const [userInfo, setUserInfo] = useState(USER_INFO)
  const {email, password} = useContext(GlobalContext)
  const navigate = useNavigate()
  const onClickAutoSignIn = () => {
    setAutoSignIn(prev => !prev)
  }
  
  const onChangeSignIn = (e) => {
    const newInfo = {...userInfo, [e.target.name] : e.target.value }
    setUserInfo(newInfo)
  }
  const onClickSignIn = () => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(userInfo.email === "") {
      alert("이메일을 입력해주세요.")
      return
    }
    if(!regExp.test(userInfo.email)) {
      alert("아메일 형식이 올바르지 않습니다.")
      return
    } 
    if(userInfo.password === "") { 
      alert("비밀번호를 입력해주세요.")
      return
    }
    if ( email === "travel@naver.com" && password === "1234") {
      localStorage.setItem("token", "true")
      alert("로그인성공")
      navigate("/albums")
      if( autoSignIn ) {
        localStorage.setItem("autoSign", "true")
      }
    }
  }
  useEffect(()=> {
    if (localStorage.getItem("autoSign")) {
      navigate("/albums")
    }
  },[navigate])
  
  return <SignInUI autoSignIn={autoSignIn} onClickAutoSignIn={onClickAutoSignIn} onClickSignIn={onClickSignIn} onChangeSignIn={onChangeSignIn}/>
}

export default SignIn