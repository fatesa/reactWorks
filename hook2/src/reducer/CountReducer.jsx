import { useReducer } from "react"

//외부에 분리된 reducer 함수 정의
//reducer()는 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수
const reducer = (state, action) => {
    console.log("reducer : ", state, action);
    switch(action.type){
        case "INCREMENT" : return {count : state.count+1};
        case "DECREMENT" : return {count : state.count-1};
        case "RESET" : return {count : 0};
        default :
            return state; // case에 해당되는게 없으면 기존 상태 유지
    }
}

//dispatch({type:"INCREMENT"})} - 요구사항(액션)을 전달하는 함수
const CountReducer = () => {
    // 초기화는 객체로 설정되어있다. - {count : 0}
    const [state, dispatch] = useReducer(reducer,{count : 0});
    
    return (
        <div>
            <br />
            <h3>useReducer() 예제</h3>
            <h3>{state.count}</h3>
            
            <button onClick={() => dispatch({type:"INCREMENT"})}>증가</button>
            <button onClick={() => dispatch({type:"DECREMENT"})}>감소</button>
            <button onClick={() => dispatch({type:"RESET"})}>초기화</button>
        </div>
    )
}

export default CountReducer