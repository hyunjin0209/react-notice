import { useEffect, useState } from "react";

export default function Findpassword() {
  const [qq, setqq] = useState();
  const [qqq, setqqq] = useState();

  const 인증번호 = () => {
    const aa = {
      id: document.getElementById("아이디").value,
      number: document.getElementById("전화번호").value,
    };
    setqq(aa);
  };
  useEffect(() => {
    if (qq)
      if (qq.id === "huji0209" && qq.number === "01094902880") {
        alert("7777");
      } else {
        alert("아이디 또는 전화번호가 다릅니다");
      }
  }, [qq]);
  const 확인 = () => {
    const aaa = {
      number2: document.getElementById("인증번호").value,
    };
    setqqq(aaa);
  };
  useEffect(() => {
    if (qqq) {
      if (qqq.number2 === "7777") {
        alert("비밀번호는:dzmzm1입니다");
      } else {
        alert("인증번호가 다릅니다");
      }
    }
  }, [qqq]);

  return (
    <>
      <div className="signin-container">
        <h1>SignIn</h1>
        <div className="signin-box">
          <div className="input-field">
            <input type="text" id="아이디" placeholder="id를 입력하세요" />
          </div>
          <div className="input-field">
            <input
              type="number"
              id="전화번호"
              placeholder="전화번호를 입력하세요"
            />
          </div>

          <div className="button-field">
            <button
              type="button"
              onClick={() => {
                인증번호();
              }}
            >
              인증번호발송
            </button>

            <div>
              <input
                type="number"
                id="인증번호"
                placeholder="인증번호를 입력하세요"
              />
              <button
                type="button"
                onClick={() => {
                  확인();
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
