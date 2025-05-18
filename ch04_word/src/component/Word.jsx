import {useState} from "react";

export default function Word({word:W}) {

  const [word, setWord] = useState(W);
  const [isDone, setIsDone] = useState(word.isDone);//외운 단어
  const [isShow, setIsShow] = useState(false);//뜻 보여주기

  function toggleShow(){
    setIsShow(!isShow);
  }

  function toggleDone(){
    setIsDone(!isDone);
  }

  function del(){
    if(window.confirm("삭제하시겠습니까?")){
      fetch(`http://localhost:3010/words/${word.id}`,{
        method: "DELETE",
      }).then(res=>{
        if(res.ok){
          setWord({id:0});
        }else{
          alert("실패하였습니다.");
        }
      })
    }
  }
  if(word.id==0){
    return null;
  }

  return (
    <tr className={ isDone? "off" : "" }>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>
        {word.eng}
      </td>
      <td>
        {isShow&&word.kor}
      </td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow? "숨기기" : "보여주기"}</button> &nbsp;
        <button className="button_delete" onClick={del}>삭제</button>
      </td>
    </tr>
  )

}