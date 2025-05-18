import {Link} from "react-router-dom"
import dummy from "../db/data.json"
import {useState, useEffect} from "react"
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function DayList() {

  const days = useFetch("http://localhost:3010/days");
    const navigate = useNavigate();


  // const [days, setDays] = useState([]);
  
  // useEffect(() => {
  //     fetch("http://localhost:3010/days")
  //     .then((res)=>{
  //         return res.json();
  //     })
  //     .then((data)=>{
  //         setDays(data);
  //     })

  // },[])



  function del(e){

    //alert(e.target.id);

    //해당 날짜의 word
    fetch(`http://localhost:3010/words?day=${e.target.id}`,{
      method: "DELETE",
    }).then(res=>{

      
        fetch(`http://localhost:3010/days/${e.target.id}`,{
          method: "DELETE",
        }).then(res=>{
          if(res.ok){
            alert("해당날짜의 word가 삭제되었습니다.");
            navigate(`/`);

          }
        })

    })





    //day
    fetch(`http://localhost:3010/days/${e.target.id}`,{
      method: "DELETE",
    }).then(res=>{
      if(res.ok){
         alert("날짜가 삭제되었습니다.");
         navigate(`/`);

      }
    })

  }

  return ( 

    <>
    <h1>삭제할 Day를 클릭하세요.</h1>
    <ul className="list_day">
      {
        days.map( day => (
          <li key = {day.id}>
            <button onClick={del} id={day.id}>   Day { day.day }  </button>
          </li>

        ))
      }
    </ul>
    </>
  )
}