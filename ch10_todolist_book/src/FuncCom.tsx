import React, { useState } from "react"

interface MyTestProps {
    weather : string;
    children : React.ReactNode;
}

const FuncCom : React.FC<MyTestProps> = ({children, weather}) =>{
    // const [fruits, setFruit] = useState(['apple', 'banana', 'orange']);

    // let data1 = [1,2,3];
    // // let data2 = data1; //shollow copy, 얕은 복사
    // let data2 = [...data1]; //deep copy, 깊은 복사
    // console.log(data1 === data2);

    // const {children, weather} = props;

    return(
        <div>
           {/* <button onClick={()=>{
            let copy = [...fruits];
            // let copy = fruits;
            copy[0] = 'grape';
            setFruit(copy);
           }}>수정</button>
           {fruits} */}

           {children}<br></br>
           오늘의 날씨는 { weather }입니다.

        </div>
    )
}

export default FuncCom;