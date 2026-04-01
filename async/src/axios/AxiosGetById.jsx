import { useEffect, useState } from "react"
import axios from "axios"

const AxiosGetById = ({id}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)        
        .then((response) =>{
            setData(response.data); // 응답 데이터를 response.data에 저장
            console.log(response.data); // 객체로 출력           
        })
        .catch((error) => console.log(error));        
    }, [id]);

    return (
        <div>
            <h2>할 일 관리</h2>
            {data && (
                <div>
                    <p><strong>제목: {data.title}</strong></p>
                    <p>완료 여부: {data.completed ? "● 완료" : "○ 미완료"}</p>                    
                </div>
            )}
        </div>
    )
}

export default AxiosGetById