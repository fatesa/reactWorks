import styled from "styled-components"

//버튼 정의
const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #0056b3;
    }
`

/* Button 컴포넌트를 상속받아 RoundedButton을 생성 
   상속의 형태 : styled(부모 컴포넌트)
*/
const RoundedButton = styled(Button)`
    border-radius: 50px;
`

const StyleButton = () => {

    return (
        <>
        <Button>Click me</Button>
        <RoundedButton>Click me</RoundedButton>
        </>
    )
}

export default StyleButton