import { useState } from 'react';
import styled from 'styled-components';

//컴포넌트 스타일 정의
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding : 40px;
    gap: 20px;
    background-color: lightgray;
    height: 100vh;
`

const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.color};
    border-radius: 8px;
    cursor: pointer;
`

const Blocks = () => {

    //클릭한 블록의 색상을 저장하는 상태
    const [clicked, setClicked] = useState(null);

    //클릭 핸들러
    const handleClick = (color) => {
        setClicked(color);
    }
    
    return (
        <Wrapper>
            <Block color="green" onClick={() => handleClick('green')}></Block>
            <Block color="blue" onClick={() => handleClick('blue')}></Block>
            <Block color="red" onClick={() => handleClick('red')}></Block>
            {clicked && <p>클릭한 색상 : {clicked}</p>}
        </Wrapper>
        
    )
}

export default Blocks