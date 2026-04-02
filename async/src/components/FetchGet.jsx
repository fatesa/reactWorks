import { useEffect, useState } from "react"

function FetchGet(){
    const [users, setUsers] = useState([]);

    //users.json의 모든 데이터 가져오기
    useEffect(() => {
        fetch("/json/users.json")
        .then(response => response.json()) //json->객체로 변환
        .then(data => {
            console.log("데이터 가져오기 성공 : ", data);
            
            setUsers(data);
        })
        .catch(err => console.log(err));
    },[]);
    return(
        <div>
            <h2>회원 목록</h2>
            {/* 테이블로 변경 */}
            <table className="table-list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>도시</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address.city}</td>
                            <td>{user.email}</td>                            
                        </tr>
                        
                    ))}
                </tbody>
            </table>

            {/* <ul>
                {users.map((user)=>(
                    <li key={user.id}>이름 : {user.name}, 도시 : {user.address.city}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default FetchGet