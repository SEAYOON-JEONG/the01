import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "../component/Word";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

export default function Day(){

  //const day = 1;

  const {day} = useParams();


  //const wordList = dummy.words.filter( word => word.day == day);







  const words = useFetch(`http://localhost:3010/words?day=${day}`);


  
  // const [words, setWords] = useState([]);

  // useEffect(() => {

  //     fetch(`http://localhost:3010/words?day=${day}`)
  //     .then(res => res.json())
  //     .then(data=>{
  //       setWords(data);
  //     })


  // },[day])

  return(

    <>
    
      <h2>
        Day {day}
      </h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word key={word.id} word={word} >



            </Word>
          ))}
        </tbody>
      </table>
    
    
    </>


  )

};