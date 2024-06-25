import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Findid() {
  const [check, setCheck] = useState(false);
  const [asdf, setasdf] = useState();
  const [zxc, setzxc] = useState();
  const nav = useNavigate;
  useEffect(() => {
    if (zxc) {
      if (zxc.number1 === "성현진" && zxc.number2 === "01094902880") {
        alert(1234);
      } else {
        alert("이름또는 전화번호가 다릅니다");
      }
    }
  }, [zxc]);

  const 발송 = () => {
    const qwer2 = {
      number1: document.getElementById("이름").value,
      number2: document.getElementById("전화번호").value,
    };
    setzxc(qwer2);
  };
  useEffect(() => {
    if (asdf) {
      if (asdf.number3 === "1234") {
        alert("확인되었습니다 아이디:huji0209");
      } else {
        alert("인증번호가 틀렸습니다");
      }
    }
  }, [asdf]);

  const 확인 = () => {
    const qwer = {
      number3: document.getElementById("code").value,
    };
    setasdf(qwer);
  };
  return (
    <>
      <div className="signin-container">
        <h1>본인인증</h1>
        <div className="signin-box">
          <div className="input-field">
            <input type="text" id="이름" placeholder="이름을 입력하세요" />
          </div>
          <div className="input-field">
            <input
              type="number"
              id="전화번호"
              placeholder="전화번호를 입력하세요"
            />
          </div>

          {check && (
            <div className="input-field">
              <input
                type="text"
                id="code"
                placeholder="인증번호를 입력하세요"
              />
              <button
                onClick={() => {
                  발송();
                }}
              >
                인증번호 발송
              </button>
              <button
                onClick={() => {
                  확인();
                }}
              >
                인증번호 확인
              </button>
            </div>
          )}

          <div className="button-field">
            <button
              type="button"
              onClick={() => {
                setCheck(true);
              }}
            >
              실명확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
