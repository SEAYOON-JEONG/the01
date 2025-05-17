import { Navigate, useNavigate} from "react-router-dom"

export default function CreateDay(){

  const days = [1,2,3,4];
  const navigate = useNavigate();

  function addDay() {

    fetch('http://localhost:3010/days', {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          id:""+(days.length+1),
          day:days.length+1
        }),
    })
  .then(res=>{
    if(res.ok){
      alert("생성완료");
      navigate('/')
    }else 
    {
      alert("생성실패");
      navigate('/')
    }
  })


  }

  return(
    <div>
        <h3>현재일수: {days.length}</h3>
        <button onClick={addDay}>day추가</button>
    </div>

  )

}