import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const Mycomponent=()=>{
  //let count = 0;

  const [count, setCount] = useState(0);

  const increment=()=>{
    //count = count + 1;
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="App">
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
    </div>

  )
}

function App() {
  return (
      <Mycomponent></Mycomponent>

  );
}

export default App;
