//import { useState } from "react";

const Test01 = () => {
    const user =[{id:1, name:"홍길동"},{id:2, name:"이순신"}];
    return(
        <>
        <div>
            {/* 이건 내가 만든것
            <h3>사용자 목록</h3>
            {user.map((person)=>(
              <p key={person.id}>
                        {person.id} {person.name}
                    </p>
            ))} */}

            <h2>회원 관리</h2>
            <ul className="user-list">
                {user.map((person)=>(
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Test01