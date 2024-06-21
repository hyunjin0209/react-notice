import { useState } from "react";
import Result from "./result";
import Results from "./results";

export default function Calculator() {
  const [resultData, setResultdata] = useState(0);

  const addplus = () => {
    setResultdata(resultData + 1);
    console.log(resultData + 1);
  };
  const [resultDatas, setResultdatas] = useState(0);
  const minus = () => {
    setResultdatas(resultDatas - 1);
    console.log(resultDatas - 1);
  };
  return (
    <>
      <h3>1씩 더하기</h3>
      <button onClick={addplus}>더하기</button>
      <Result inputData={resultData} />
      <h3>1씩 마이너스</h3>
      <button onClick={minus}>마이너스</button>

      <Results inputDatas={resultDatas} />
    </>
  );
}
