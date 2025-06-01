import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import TodoModal from "./TodoModal";

//프롭스 props, 매개변수

//1. State
//2. props
//3. hooks - use로 시작하는 함수, useEffect, useMemo

//type : 기존타입을 베이스로 새로운 타입 생성
//interface : 새로운 객체 구조

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    const title: string = '오늘 할일'; //타입 추정

    //state : 상태 관리, 데이터를 동적으로 감시할 수 있다.
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: '잠자기', isChecked: false },
        { id: 2, text: '공부하기', isChecked: false },
        { id: 3, text: '밥먹기', isChecked: false },
        { id: 4, text: '산책하기', isChecked: false },
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    // setNewTodo(데이터);

    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckboxChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } // isChecked : true
                    : item
            )
        );
    }

    const addTodo = () => {
        //newTodo를 todos에 추가
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, isChecked: false }
            ]);
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((user) => {
            return user.id !== id;
        }))
    }

    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    return (
        <Container fluid className="mt-5" style={{ maxWidth: '1200px' }}>
            <Container className="p-3 mb-4" style={{ backgroundColor: '#343a40' }}>
                <h1 className="text-center text-white">{title}</h1>
            </Container>
            <Row className="justify-content-center mb-4">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded mb-4">
                        <Form className="d-flex">
                            <Form.Group controlId="newTodo" className="flex-grow-1 me-2">
                                <Form.Control
                                    type="text"
                                    placeholder="할일 입력"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    size="lg"
                                />
                            </Form.Group>
                            <Button variant="warning" onClick={addTodo} size="lg">추가</Button>
                        </Form>
                    </div>
                    <div className="border p-3 rounded">
                        <ul className="list-unstyled">
                            {
                                todos.map((todo) => (
                                    <li key={todo.id} className="d-flex align-items-center justify-content-between mb-3" style={{ fontSize: '1.25rem' }}>
                                        <Form.Check
                                            type="checkbox"
                                            checked={todo.isChecked}
                                            onChange={() => handleCheckboxChange(todo.id)}
                                            label={todo.isChecked ? <del>{todo.text}</del> : <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>}
                                            style={{ fontSize: '1.25rem' }}
                                        />
                                        <Button variant="danger" size="lg" onClick={() => removeTodo(todo.id)} style={{ fontSize: '1rem' }}>삭제</Button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Col>
            </Row>
            <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo} />

            <Row className="justify-content-center mt-3">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded">
                        <h4 className="mb-3">날씨 예보</h4>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>현재 날씨: 맑음, 25°C</p>
                        <h4 className="mt-4 mb-3">현재 시간</h4>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>{new Date().toLocaleTimeString()}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoList;
