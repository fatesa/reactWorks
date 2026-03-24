import { useState } from "react"
import DrinkList from "./DrinkLsit.jsx";

const AddDrink = () => {
    //음료를 저장할 상태변수와 함수
    const [drinkName, setDrinkName] = useState([]);

    //입력 필드의 상태를 관리하기 위한 상태 변수
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        console.log(e.target.value);
        
        setInputValue(e.target.value);
    }

    const handleAddDrink = () =>{
        const newDrink = inputValue;
        if(newDrink.trim() === ''){
            alert('음료 이름을 입력해주세요');
            retrun;
        }
        setDrinkName([...drinkName, newDrink]);
        setInputValue(""); // 입력 필드 초기화
    }        
    
    return (
        <div>
            <h2>음료 추가</h2>
            <input 
                type="text"
                placeholder="음료 이름을 입력해주세요."
                value={inputValue}
                onChange={handleInputValue}
            />
            {' '}<button onClick={handleAddDrink}>음료 추가</button>
            {/* join()는 배열에서 제공되는 문자 연결 함수 */}
            {/* <p>현재음료 : {drinkName.join(', ')}</p> */}
            {/* DrinkList 컴포넌트에 drinks 속성으로 drinkName을 전달 */}
            <DrinkList drinks={drinkName}/>
        </div>
    )
}

export default AddDrink