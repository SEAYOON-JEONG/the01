import React, { useState } from "react";


const quizData = [
  { question: "지구는 태양을 돈다.", answer: "O" },
  { question: "1 + 1 = 3 이다.", answer: "X" },
  { question: "코끼리는 날 수 있다.", answer: "X" },
  { question: "물은 얼면 부피가 줄어든다.", answer: "X" },
];



function Student() {

  const [students, setStudents] = useState([
    { id: 1, name: "Alice", age: 21 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 23 },
  ]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", age: "" });


  return (
    <div style={{ padding: "20px" }}>
      <h1>학생 목록</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <button onClick={() => setSelectedStudent(student)}>
              {student.name}
            </button>
  age : {student.age}


          </li>
        ))}

<br></br>

        {students.map( (student) => (

          <li key={student.id}>
            <button onClick={() => setSelectedStudent(student)}>


              {student.name}
            </button>
              age: {student.age}

          </li>

        ) )}

      </ul>

     {/*useState(null);이었기 때문에 false로 인식하고 먼저 실행은 안됨*/}
      {selectedStudent && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h2>학생 정보</h2>
          <p>이름: {selectedStudent.name}</p>
          <p>나이: {selectedStudent.age}세</p>
        </div>
      )}


      <div style={{ marginTop: "20px" }}>
        <h2>새 학생 추가</h2>
        <input
          type="text"
          placeholder="이름"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="나이"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        <button
          onClick={() => {
            const newId = students.length + 1;
            setStudents([...students, { id: newId, name: newStudent.name, age: newStudent.age }]);
            setNewStudent({ name: "", age: "" });
          }}
        >
          추가
        </button>

        <button
          onClick={() => {
            const newId = students.length  + 1;
            setStudents([...students, {id: newId, name: newStudent.name, age: newStudent.age}]);
            setNewStudent({ name: "", age: "" });
          }}
        >
          추가
        </button>


      </div>
    </div>
  );



}




function App() {
  const [currentIndex, setCurrentIndex] = useState(0); //현재문제
  const [score, setScore] = useState(0); //총 몇개ㅐ 맞췄냐틀렸냐
  const [showResult, setShowResult] = useState(false); //결과화면을 보여줄지 문제화면을 보여줄지말지


  const handleAnswer = (userAnswer) => {
    if (userAnswer === quizData[currentIndex].answer) {
      setScore(score + 1);
      alert("정답입니다! ✅");
    } else {
      alert("틀렸습니다! ❌");
    }

   //이벤트 발생시 문제가 변경됨.
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };





  return (
    <>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>OX 퀴즈 게임 🏆</h1>


      {!showResult ? (
        <>
          <h2>{quizData[currentIndex].question}</h2>
          <button
            onClick={() => handleAnswer("O")}
            style={{ marginRight: "10px", padding: "10px 20px", fontSize: "18px" }}
          >

          
            O
          </button>

          <button
            onClick={() => handleAnswer("X")}
            style={{ padding: "10px 20px", fontSize: "18px" }}
          >
            X
          </button>

        </>
      ) : (
        <div>
          <h2>게임 종료!</h2>
          <p>당신의 점수: {score} / {quizData.length}</p>
          <button onClick={() => { setCurrentIndex(0); setScore(0); setShowResult(false); }}>
            다시 시작 🔄
          </button>

        </div>
      )}
    </div>

    
    
    <Student></Student>


    </>
  );
}


export default App;
