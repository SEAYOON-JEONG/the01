import {useState} from "react";

export default function Word({word}) {

  const [isDone, setIsDone] = useState(word.isDone);//외운 단어
  const [isShow, setIsShow] = useState(false);//뜻 보여주기

  function toggleShow(){
    setIsShow(!isShow);
  }

  function toggleDone(){
    setIsDone(!isDone);
  }

  return (
    <tr className={ isDone? "off" : "" }>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>
        {word.eng}
      </td>

    </tr>
  )

}