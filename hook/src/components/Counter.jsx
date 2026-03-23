//useState 함수를 임포트 해야 함
import { useState } from "react";

const Counter = () => {
    
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];
    // console.log(countState);

    //useState(초기값)
    const [count, setCount] = useState(0);

    //setCount() 사용
    const increasement = () => {
        setCount(count+1);
    }

    const decreasement = () => {
        if (count > 0) {
            setCount(count-1);
        }
    }

    const resetBtn = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>현재 카운트: {count}</p>
            <button onClick={increasement}>+ 증가</button>{' '}
            <button onClick={decreasement}>- 감소</button>{' '}
            <button onClick={resetBtn}>초기화</button>{' '}
        </div>
    )
}

export default Counter