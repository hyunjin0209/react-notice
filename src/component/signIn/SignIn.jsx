import React, { useState } from "react";
import "../../css/signIn.css";

export default function SignIn() {
  const [check, setCheck] = useState(false);

  return (
    <div className="signin-container">
      <h1>SignIn</h1>
      <div className="signin-box">
        <div className="input-field">
          <input type="text" placeholder="id를 입력하세요" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="password를 입력하세요" />
        </div>

        {check && (
          <div className="input-field">
            <input type="text" placeholder="code를 입력하세요" />
          </div>
        )}

        <div className="button-field">
          <button
            type="button"
            onClick={() => {
              setCheck(true);
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
