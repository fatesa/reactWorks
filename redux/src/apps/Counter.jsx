import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

const Counter = () => {
    //store의 state에서 count 값을 가져옴
    const count = useSelector(state => state.counter.count);

    //액션을 보낼때 사용
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState(0);

    //입력값 상태 핸들러
    const handleInputChange = (e) => {
        //문자형을 숫자형으로 형변환
        setInputValue(parseInt(e.target.value));
    }

    //입력값만큼 카운트를 증가 시키는 함수
    const handleIncrementAmount = () => {
        dispatch(incrementByAmount(inputValue));
    }

    return (
        <div>
            <h2>Counter</h2>
            <h3>Count : {count}</h3>
            <div>
                <button onClick={() => dispatch(increment())}>증가</button>
                <button onClick={() => dispatch(decrement())}>감소</button>
                <button onClick={() => dispatch(reset())}>초기화</button>
            </div>
            <div>
                <input type="number" 
                    value={inputValue} 
                    onChange={handleInputChange}/>
                <button onClick={handleIncrementAmount}>입력값만큼 증가</button>
            </div>
        </div>
    )
}

export default Counter