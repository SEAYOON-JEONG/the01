import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "../component/Word";
export default function Day(){

  //const day = 1;

  const {day} = useParams();


  const wordList = dummy.words.filter( word => word.day == day);


  return(

    <>
    
      <h2>
        Day All
      </h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word key={word.id} word={word} >



            </Word>
          ))}
        </tbody>
      </table>
    
    
    </>


  )

};