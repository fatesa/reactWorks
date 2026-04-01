const TodoList = ({todos, onComplete, onDeleteTodo}) => {
    return (
        <div>
            {/* 할 일 목록 */}
            <ul className="todo-list">
                {todos.map(todo =>(
                    <li key={todo.id} className={todo.completed? 'completed' : ''}>
                        <input type="checkbox" checked={todo.completed} onChange={() => onComplete(todo.id)}/>
                        {todo.text}
                        <button onClick={()=>onDeleteTodo(todo.id)}>삭제</button>
                    </li>                                                
                ))}
                
            </ul>
        </div>
    )
}

export default TodoList