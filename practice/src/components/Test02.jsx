import { useState } from "react";

const Test02 = () => {
    const [count, setCount] = useState(0);
    const like = () => {
        setCount(count+1);
    }
    return(
        <div>            
            {/* <button onClick={like}>좋아요{' '}{count}</button> */}
            <button onClick={()=>setCount(count+1)}>좋아요{' '}{count}</button>
        </div>
    )
}
export default Test02