import { useEffect, useState } from "react"

const FetchExample = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json()) //json -> js 객체로 변환
        .then((result) =>{
            setData(result);
            console.log(result); // 객체로 출력           
        })
        .catch((error) => console.log(error));
    },[]);
    return (
        <div>
            <h2>할 일(To-do) 데이터</h2>
            <ul>
            {data.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
            ))};
            </ul>
        </div>
    )
}

export default FetchExample