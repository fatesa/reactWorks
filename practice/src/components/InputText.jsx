import { useState } from "react"

const InputText= () => {
    const[inputValue, setInputValue] = useState("");
    const handleInputValue = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
    return (
        <div>
            <h2>글자 입력</h2>
            <input
            type = "text"
            placeholder="글자를 입력하세요"
            onChange={handleInputValue}>
            </input>
            <p>입력된 내용 : {inputValue}</p>
        </div>
    )
}

export default InputText