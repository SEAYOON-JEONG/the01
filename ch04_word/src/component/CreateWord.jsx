import {useRef} from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3010/days"); //불러오는 애
  const navigate = useNavigate();

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  function onSubmit(e){
    e.preventDefault();

    //저정하는애
    fetch("http://localhost:3010/words",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({

        //입력할 데이터를 넣는곳
        day:Number(dayRef.current.value),
        eng:engRef.current.value,
        kor:korRef.current.value,
        isDone:false,
      })
    }).then(res=>{
      if(res.ok){
        alert("생성이 완료 되었습니다.")
        navigate(`/day/${dayRef.current.value}`);
      }else{
        alert("생성이 실패 되었습니다.");
        navigate(`/`);
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
          <label>Eng</label>
          <input type="text" placeholder="" ref={engRef} />
        </div>
        <div className="input_area">
          <label>Kor</label>
          <input type="text" placeholder="" ref={korRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map(day => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
      </div>
      <button>저장</button>
    </form>
  );


}