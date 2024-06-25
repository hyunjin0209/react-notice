import React, { useEffect, useState } from "react";
import "../../css/signIn.css";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const 비번 = () => {
    nav("/findpassword");
  };
  const 아이디 = () => {
    nav("/findid");
  };
  const nav = useNavigate();
  const [asd, setasd] = useState();
  useEffect(() => {
    if (asd) {
      if (asd.num1 === "huji0209" && asd.num2 === "dzmzm1") {
        nav("/component1");
      } else {
        alert("아이디,비밀번호가 틀렸습니다");
      }
    }
  }, [asd]);

  const 로그인 = () => {
    const a = {
      num1: document.getElementById("아이디").value,
      num2: document.getElementById("비밀번호").value,
    };
    setasd(a);
  };

  return (
    <div className="signin-container">
      <h1>SignIn</h1>
      <div className="signin-box">
        <div className="input-field">
          <input type="text" id="아이디" placeholder="id를 입력하세요" />
        </div>
        <div className="input-field">
          <input
            type="password"
            id="비밀번호"
            placeholder="password를 입력하세요"
          />
        </div>

        <div className="button-field">
          <button
            type="button"
            onClick={() => {
              로그인();
            }}
          >
            로그인
          </button>
        </div>
        <button
          onClick={() => {
            아이디();
          }}
        >
          아이디찾기
        </button>
        <button
          onClick={() => {
            비번();
          }}
        >
          비밀번호찾기
        </button>
      </div>
    </div>
  );
}
