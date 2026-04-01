import { useState } from "react"
import TodoList from "./TodoList";

const Todos = () => {
    //할 일 상태 관리
    const [todos, setTodos] = useState([
        {id:1, text:'운동 하기', completed:false},
        {id:2, text:'영화 보기', completed:false}
    ]);

    //입력 상자 상태 관리
    const [inputValue, setInputValue] = useState('');

    //입력값 변경 핸들러
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);        
    }

    console.log(todos);

    //할 일 추가 함수
    const handleAddTodo = () => {
        if(inputValue.trim() !== ''){
            //새로운 할 일 객체 생성
            const newTodo = {
                id:todos.length+1,
                text : inputValue,
                completed : false
            };
            //할 일 목록(새로운 할일이 기존 할일 추가)
            setTodos([...todos, newTodo]);
            setInputValue(""); //입력 필드 초기화
        }        
    }

    //할 일 완료 체크
    const handleComplete = (id) => {
        //todos 배열을 순회하면서 id가 일치하는 할 일의 completed 값을 반전시킴
        //id가 일치하지 않는 할 일은 그대로 유지
        setTodos(
            todos.map(todo => (
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ))
        )
    }

    //할 일 삭제
    const handleDeleteTodo = (id) => {
        //id가 일치하지 않는 할 일만 남김
        setTodos(todos.filter(todo=> todo.id !== id));
    }

    return (

        <div className="container">
            <h2>할 일(To-do) 관리</h2>
            <input type="text" 
                placeholder="할 일을 입력하세요." 
                value={inputValue}
                onChange={handleInputChange}/>
            <button onClick={handleAddTodo}>추가</button>
            <TodoList 
                todos={todos}
                onComplete={handleComplete}
                onDeleteTodo={handleDeleteTodo} />            
        </div>
    )
}
export default Todos