import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedGender, setSelectedGender] = useState('M');

  const ageBands = ['영유아/아동', '10대', '20대', '30대', '그외'];

  const [selectedAgeBand, setSelectedAgeBand] = useState(ageBands[0]); //라디오

  const [SelectBoxAgeBand, setSelectBoxAgeBand] = useState(ageBands[0]); //셀렉트박스

  return (
    <div className='App'>
      <h1>라디오 버튼 연습</h1>
      <div>
        <label>
          <input
            type='radio'
            value='M'
            checked={selectedGender === 'M'}
            onChange={() => {
              setSelectedGender('M');
            }}
          />
          남성
        </label>
        <label>
          <input
            type='radio'
            value='W'
            checked={selectedGender === 'W'}
            onChange={() => {
              setSelectedGender('W');
            }}
          />
          여성
        </label>
      </div>

      <h1>라디오 버튼 연습 여러개</h1>
      <div>
        {ageBands.map((ageBand) => (
          <label key={ageBand}>
            <input
              name='ageBand'
              type='radio'
              value={ageBand}
              checked={ageBand === selectedAgeBand}
              onChange={() => {
                setSelectedAgeBand(ageBand);
              }}
            />
            {ageBand}
          </label>
        ))}
      </div>

      <h1>selectBox</h1>
      <select onChange={(e) => setSelectBoxAgeBand(e.target.value)}>
        <option disabled>--나이대 선택--</option>
        {ageBands.map((ageBand) => (
          <option
            key={ageBand}
            value={ageBand}
            selectded={ageBand === SelectBoxAgeBand}
          >
            {ageBand}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
