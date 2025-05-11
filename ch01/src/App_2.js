import { use, useState } from "react";
import './App.css';

const Counter=()=>{
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  const setToMax = () => {
    setCount(100);
  };
  return (
    <div>
      <h2>카운터 Counter</h2>
     <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={reset}>0으로 초기화</button>
        <button onClick={setToMax}>최대값(100)</button>
      </div>
      <div>
        현재 값:{count}
      </div>
    </div>
  );
}
const SetText=()=>{

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>입력 필드 이벤트 SetText</h1>
      <input type="text" onChange={handleChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
    </div>
  )


}

function ChangeApp() {
  const [text, setText] = useState("");


  const handleChange = (event) => {
    setText(event.target.value);
  };


  return (
    <div>
      <h1>입력 필드 이벤트 ChangeApp</h1>
      <input type="text" onChange={handleChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
    </div>
  );
}


function OnChangeApp(props) {
  const [text, setText] = useState("");


  const handleChange = (event) => {
    setText(props.onChange());
  };


  return (
    <div>
      <h1>입력 필드 이벤트 OnChangeApp</h1>
      <input type="text" onChange={handleChange} placeholder="입력하세요" />
      <input type="text" onChange={props.onChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
    </div>
  );
}

function SetBgColor() {

 const [bgColor, setBgColor] = useState("white");
 return (
    <div>
      <h1>마우스 이벤트 SetBgColor</h1>
      <div
        style={{ width: "200px", height: "100px", backgroundColor: bgColor, textAlign: "center", lineHeight: "100px" }}
        onMouseEnter={() => setBgColor("lightblue")}
        onMouseLeave={() => setBgColor("white")}
      >
        마우스를 올려보세요!
      </div>
    </div>
  );

}


function SetKey() {
 const [key, setKey] = useState("");

 const handleKeyDown = (event) => {
    setKey(event.key);
  };


  return (
    <div>
      <h1>키보드 이벤트</h1>
      <input type="text" onKeyDown={handleKeyDown} placeholder="키를 눌러보세요" />
      <p>입력한 키: {key}</p>
    </div>
  );



}


function HandleSubmit() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    alert(`제출된 이름: ${name}`);
  };

  return (
    <div>
      <h1>폼 제출 이벤트</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
        <button type="submit">제출</button>
      </form>


      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
        <button type="submit">제출</button>
      </form>
    </div>
  );

}

 let counter=0;

function App() {





  return (
    <>
      <Counter></Counter>
      <SetText></SetText>
      <ChangeApp></ChangeApp>


      <OnChangeApp onChange={(event)=>{
        return counter++;
      }}></OnChangeApp>


      <SetBgColor></SetBgColor>


      <SetKey></SetKey>
      <HandleSubmit></HandleSubmit>
    </>

  );
}


export default App;