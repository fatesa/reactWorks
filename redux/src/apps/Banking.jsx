import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {deposit, withdraw} from '../store/bankSlice'

const Banking = () => {
    const balance = useSelector(state => state.bank.balance);

    //금액 입력값 상태 변화
    const [amount, setAmount] = useState(0);

    //입력값 변경 핸들러
    const handleAmountChange = (e) => {
        console.log('Amount : ', e.target.value);
        
        setAmount(Number(e.target.value));
    }

    //dispatch() 함수 가져오기
    const dispatch = useDispatch();

    //입금 버튼 클릭시 deposit 액션
    const handleDeposit = () => {
        dispatch(deposit(Number(amount)));
    }

    //출금 버튼 클릭시 withdraw 액션
    const handleWithdraw = () => {
        dispatch(withdraw(Number(amount)));
    }
    return (
        <div>
            <h1>은행 업무</h1>
            <h3>잔액 : {balance}원</h3>

            <input type="number" 
                value={amount}
                onChange={handleAmountChange}
                //step={1000}
                />
            <button onClick={handleDeposit}>입금</button>
            <button onClick={handleWithdraw}>출금</button>
        </div>
    )
}

export default Banking