import { useState } from "react"
import axios from "axios";

const AxiosPost = () => {
    //할 일 제목을 저장하는 상태
    const [title, setTitle] = useState("");

    //입력 필드 변경시 상태 업데이트
    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    //폼 제출 핸들러
    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title : title,
            completed : false
        })
        .then(res => {
            console.log("생성된 데이터 : ", res.data);
            alert("등록 완료");
            setTitle('');            
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>할 일 관리</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title}
                    onChange={handleChange}
                    placeholder="할 일을 입력해주세요."/>

                <button type="submit">추가</button>    
            </form>
        </div>
    )
}

export default AxiosPost