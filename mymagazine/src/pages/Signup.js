import React from "react";
import { useState } from "react";

import styled from "styled-components";

import Text from "../elements/Text";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Input from "../elements/Input";

import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [nickname, setNickname] = useState('');
  const [pwd_check, setPwdCheck] = useState('');


  const signup = () => {
    if (pwd !== pwd_check) {
      window.alert('패스워드를 체크해주세요');
      return; // 실행안시키고 함수 종료시켜버림
    }

    if (id === '' || pwd === '' || nickname === '') {
      return; // 실행안시키고 함수 종료시켜버림
    }

    dispatch(userAction.signupFB(id, pwd, nickname));
    // 여기 안에 넘길 값 넣어줘야하죠
    // input에서 작성한거 useState써서 만들어주기
  }

  return (
    <React.Fragment>
      <Align>
        <Grid>
        <Text size="42px" margin="0px 0px 20px 0px">SIGNUP</Text>
        <Input label="이메일" placeholder="이메일을 입력해주세요"
          _onChange={(e) => {
            setId(e.target.value);
          }}
        ></Input>
        <Input label="닉네임" placeholder="닉네임을 입력해주세요"
          _onChange={(e) => {
            setNickname(e.target.value);
          }}
        ></Input>
        <Input label="패스워드" placeholder="패스워드를 입력해주세요"
          type="password"
          _onChange={(e) => {
            setPwd(e.target.value);
          }}
        ></Input>
        <Input label="패스워드 확인" placeholder="패스워드를 확인해주세요"
          type="password"
          _onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        ></Input>
        <Button 
        margin="20px 0px 0px 0px"
        color='#fff' bg='black'
          text='회원가입하기'
          _onClick={signup}
        >

        </Button>
        </Grid>
      </Align>
    </React.Fragment>
  )
}

const Align = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Signup;