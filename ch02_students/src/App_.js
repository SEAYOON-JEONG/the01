import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const CreateForm = ({ onCreate }) => {
  const [form, setForm] = useState({ name: '', username: '', age: '', height: '', joinDate: '' });


  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
    setForm({ name: '', username: '', age: '', height: '', joinDate: '' });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>학생 추가</h2>
      <InputForm form={form} setForm={setForm} />
      <button type="submit">등록</button>
    </form>
  );
};

const InputForm = ({ form, setForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };


  return (
    <>
      <div><input name="name" placeholder="이름" value={form.name} onChange={handleChange} required /></div>
      <div><input name="username" placeholder="아이디" value={form.username} onChange={handleChange} required /></div>
      <div><input name="age" type="number" placeholder="나이" value={form.age} onChange={handleChange} required /></div>
      <div><input name="height" type="number" placeholder="키(cm)" value={form.height} onChange={handleChange} required /></div>
      <div><input name="joinDate" type="date" placeholder="가입일" value={form.joinDate} onChange={handleChange} required /></div>
    </>
  );
};

const StudentList = ({ students, onSelect }) => (
  <div>
    <h2>학생 목록</h2>
    <ul>
      {students.map(student => (
        <li key={student.id}>
          <button onClick={() => onSelect(student.id)}>
            {student.id}. {student.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);




const StudentApp=()=>{


    //현재 화면을 어떻게 보여줄건지 선택
    const [mode, setMode] = useState('HOME');

    //프로그램에서 다룰 학생 데이터
    const [students, setStudents] = useState([
      { id: 1, name: 'Alice', username: 'alice123', age: 21, height: 160, joinDate: '2020-01-01' },
      { id: 2, name: 'Bob', username: 'bob123', age: 22, height: 170, joinDate: '2019-03-15' },
      { id: 3, name: 'Charlie', username: 'charlie123', age: 23, height: 180, joinDate: '2018-05-10' },
      { id: 4, name: 'Dave', username: 'dave123', age: 24, height: 175, joinDate: '2017-07-20' },
    ]);

    //선택된 학생 데이터
    const [selectedId, setSelectedId] = useState(null);

    //신규 학생의 아이디 번호
    const [nextId, setNextId] = useState(5); 


    //선택된 학생
    const selectedStudent = students.find(s => s.id === selectedId);



    const handleCreate = (student) => {
      setStudents([...students, { ...student, id: nextId }]);
      setNextId(nextId + 1);
      setMode('SELECT');
    };


    const handleUpdate = (updatedStudent) => {
      setStudents(students.map(s => s.id === selectedId ? { ...s, ...updatedStudent } : s));
      setMode('SELECT');
    };


    const handleDelete = () => {
      if (selectedId) {
        setStudents(students.filter(s => s.id !== selectedId));
        setSelectedId(null);
        setMode('SELECT');
      }
    };

   



  return (
    <>
   
        <header>
          <h1>Student Info System</h1>
          <div className="menu-buttons">
            <button onClick={() => { setMode('CREATE'); setSelectedId(null); }}>CREATE</button>
            <button onClick={() => { setMode('SELECT'); setSelectedId(null); }}>SELECT</button>
            <button onClick={() => { selectedId ? setMode('UPDATE') : alert('수정할 학생을 선택하세요'); }}>UPDATE</button>
            <button onClick={() => { selectedId ? setMode('DELETE') : alert('삭제할 학생을 선택하세요'); }}>DELETE</button>
          </div>

          <p className="mode-indicator">현재 페이지: {mode}</p>
        </header>

        <main>
          {mode==='HOME'&& <p>메뉴를 선택해주세요.</p>}
          {mode==='CREATE'&&  <CreateForm onCreate={handleCreate} />}
          {mode === 'SELECT' && (
          <>
            <StudentList
              students={students}
              onSelect={id => setSelectedId(id)}
            />
            {selectedStudent ? (
              <p>test</p>
            ) : (
              <p>학생을 선택하세요.</p>
            )}
          </>
          )}



        </main>

    </>
  )
}

function App() {
  return (

    <>
      <StudentApp></StudentApp>
    </>
  );
}

export default App;
