import { useEffect, useState } from "react"

const FetchExample2 = ({id}) => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(result => {
            setData(result);
            console.log("가져온 데이터 : ", result);            
        })
        .catch(err => console.log(err));
    },[id]); //id가 변경될 때마다 데이터를 다시 가져옴
    
    return (
        <div>
            <h2>할 일 데이터</h2>
            {data && (
                <div>
                    <p><strong>제목: {data.title}</strong></p>
                    <p>완료 여부: {data.completed ? "● 완료" : "○ 미완료"}</p>                    
                </div>
            )}
        </div>
    )
}

export default FetchExample2