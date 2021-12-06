import { useState } from "react"
import SignInUI from "./signin.presenter"

const USER_INFO = {
  email : "",
  password: ""
}
const SignIn = ({history}) => {
  const [autoSignIn, setAutoSignIn] = useState(false)
  const [userInfo, setUserInfo] = useState(USER_INFO)

  const onClickAutoSignIn = () => {
    setAutoSignIn(prev => !prev)
  }
  console.log(userInfo)
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
    else {
      alert("로그인성공")
    }
  }
  return <SignInUI onClickAutoSignIn={onClickAutoSignIn} onClickSignIn={onClickSignIn} onChangeSignIn={onChangeSignIn}/>
}

export default SignIn