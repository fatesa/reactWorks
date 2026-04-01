import axios from "axios"
import { useEffect, useState } from "react"

const AxiosGet = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")        
        .then((response) =>{
            setData(response.data); // 응답 데이터를 response.data에 저장
            console.log(response.data); // 객체로 출력           
        })
        .catch((error) => console.log(error));        
    },[]);

    return (
        <div>
            <h2>할 일(To-do) 관리</h2>
            <ul>
                {data.map(todo =>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosGet