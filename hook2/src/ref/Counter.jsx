import { useRef, useState } from "react"


const Counter = () =>{

    const [count, setCount] = useState(0);

    const countRef = useRef(1); //랜더링이 카운트 되도 값이 유지됨 전역변수 같은 느낌

    let countVar = 0; //랜더링이 되면 카운트 값이 초기화됨 로컬 변수같은 느낌

    console.log("랜더링...",count);
    console.log("countRef...",countRef);
    
    //상태(직접 접근) 증가
    const increaseCount = () => {
        setCount(count+1);
    };

    //참조(Reference, 간접 접근) 증가
    //랜더링이 되어도(상태 업데이트) 값을 유지
    const increaseCountRef = () => {
        countRef.current += 1;
        console.log("Ref : ", countRef.current);        
    }

    //일반 변수 증가
    //랜더링이 되면(상태 업데이트) 초기화 함
    const increaseCountVar = () => {
        countVar += 1;
        console.log("일반 변수 : ", countVar);        
    }

    return (
        <div>
            <h2>userRef() 예제</h2>
            <h3>State : {count}</h3>
            <h3>Ref : {countRef.current}</h3>
            <h3>Var : {countVar}</h3>

            <button onClick={increaseCount}>useState 증가</button>{' '}
            <button onClick={increaseCountRef}>Ref 증가</button>{' '}
            <button onClick={increaseCountVar}>Var 증가</button>
        </div>
    )
}

export default Counter