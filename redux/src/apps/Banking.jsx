import { useSelector } from "react-redux"

const Banking = () => {
    const balance = useSelector(state => state.bank.balance);

    return (
        <div>
            <h1>은행 업무</h1>
            <h3>잔액 : {balance}원</h3>
        </div>
    )
}

export default Banking