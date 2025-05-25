import React, { use } from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from "react";
import TodoModal from './TodoModal';

type Todo = {  
  id: number;
  text: string; 
  isChecked: boolean; 
}




const TodoList: React.FC = () => { 
    const title: string = '오늘 할일'; //타이틀만 유지
    const [todos, setTodos] = useState<Todo[]>([ 
        { id: 1, text: '잠자기', isChecked: false },
        { id: 2, text: '공부하기', isChecked: false }, 
        { id: 3, text: '밥먹기', isChecked: false },
        { id: 4, text: '산책하기', isChecked: false },
    ]);

    const [ newTodo, setNewTodo ] = useState<string>('');
    const [ showDetail, setShowDetail] = useState<boolean>(false); // 상세보기 여부 모달창
    const [ selectedTodo, setSelectedTodo ] = useState<Todo | null>(null); // 선택된 할일 상태 - 팝업이 뜨면 저장된 값을 팝업에 보여줌.

    //상세보기 창 보여주기
    const handleTodoClick = (todo: Todo) => {
      setShowDetail(true);
      setSelectedTodo(todo); // 선택된 할일을 상태에 저장
    }

    //상세보기 창 닫기
    const handleCloseDetail = () => {
      setShowDetail(false);
    }

    //체크박스 체크하기
    const handleCheckboxChange = (itemId: number) => {
        //기존데이터에 itemId와 같은 id를 가진 아이템을 찾아서 isChecked 값을 반전시킴
        setTodos((prevItems) =>  prevItems.map((item) => item.id === itemId ? {...item, isChecked: !item.isChecked} : item));
    }

    //할일 추가
    const addTodo = () => { 
        if (newTodo.trim() !== '') {  //사용자가 입력했냐 안했냐를 확인
            setTodos([
                ...todos,
                {id: Date.now(), text: newTodo, isChecked: false}
            ]);
            setNewTodo(''); // 새 할일 입력 후 입력 필드를 비움
        }

    }


    //할일 삭제
    const removeTodo = ( id: number) => { 
        setTodos(todos.filter((todo) => todo.id !== id)); 
    }

    function aF() {
      alert('aF 함수가 호출되었습니다.');
    }

    function bF() {
      alert('bF 함수가 호출되었습니다.');
      aF(); // aF 함수를 호출
    }


    return (
        <Container fluid className="mt-5" style={{ maxWidth: '1200px' }}>
            {/* 제목 */}
            <Container className="p-3 mb-4 bg-dark text-white rounded"> 
                <h1 className="text-center">{title}</h1> 
            </Container>


            {/* 할일 입력 폼 */}
            <Row className="justify-content-center mb-4">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded mb-4 shadow-sm">
                        <Form className="d-flex">
                            <Form.Group controlId="newTodo" className="flex-grow-1 me-2">
                                <Form.Control
                                    type="text"
                                    placeholder="할일 입력"
                                    value={newTodo}  
                                    onChange={(e) =>  setNewTodo(e.target.value) } 
                                    size="lg"
                                />
                            </Form.Group>
                            <Button onClick={addTodo} variant="warning" size="lg">추가</Button>
                        </Form>
                    </div>


                    <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo} />

                    {/* 할일 목록 - 더미 데이터 1개만 표시 */}
                    <div className="border p-3 rounded shadow-sm">
                        <ul className="list-unstyled">


                            {
                              todos.map((todo) => (
                                //한줄임을 표기하기위해 중괄호대신 소괄호를 썼음. {}는 리턴이 필요하고, ()는 바로 리턴한다.



                                
                              <li key={todo.id} className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: '1.25rem' }}>
                                  <Form.Check
                                      type="checkbox"
                                      checked={todo.isChecked} 
                                      onChange={() => handleCheckboxChange(todo.id)}

                                      label={todo.isChecked ? <del><span>{todo.text}</span></del> : <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>} 
                                      //label={todo.isChecked ? <del><span>{todo.text}</span></del> : <span onClick={() => bF('a')}>{todo.text}</span>} 
                                      style={{ fontSize: '1.25rem' }} 
                                  />
                                  <Button onClick={() => removeTodo(todo.id)} variant="danger" size="lg" style={{ fontSize: '1rem' }} >
                                      삭제
                                  </Button>
                              </li>

                              ))

                            }

                        </ul>
                    </div>
                </Col>
            </Row>





            {/* 날씨 및 시간 정보 */}
            <Row className="justify-content-center mt-3">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded shadow-sm">
                        <h4 className="mb-3">날씨 예보</h4>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                            현재 날씨: 맑음, 25°C
                        </p>
                        <h4 className="mt-4 mb-3">현재 시간</h4>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
                            {new Date().toLocaleTimeString()}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default TodoList;