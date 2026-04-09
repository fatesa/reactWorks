
import { useContext } from "react"
import { ThemeContext } from "./ParentTheme"

const ChildTheme = () => {
    //context 사용
    const {currentTheme, toggleTheme} = useContext(ThemeContext);

    //자식 컴포넌트 스타일
    const childStyle = {
        background: currentTheme === 'dark' ? '#555' : '#f0f0f0', 
        color: currentTheme === 'dark' ? '#fff' : '#333', 
        padding: '20px'
    }
    return (
        <div style={childStyle}>
            <h2>Child 컴포넌트</h2>
            <h3>현재 테마 : {currentTheme}</h3>
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    )
}

export default ChildTheme