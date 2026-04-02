import { useEffect, useState } from "react";

function FecthGetById({id}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/json/users.json")
        .then(res =>  res.json())
        .then(data => {
            //가져온 리스트 내부에서 검색 - find()
            const foundUser = data.find(user => user.id === id);
            console.log("가져온 데이터 : ", foundUser);
            
            setUser(foundUser);
        })
        .catch(err => console.log(err));
    }, [id])
    return (
        <div>
            <h2>회원 정보</h2>

            {user && (
                <div>
                    <p>ID : {user.id}</p>
                    <p>이름 : {user.name}</p>
                    <p>도시 : {user.address.city}</p>
                    <p>이메일 : {user.email}</p>
                </div>
            )}
        </div>

    )
}

export default FecthGetById;