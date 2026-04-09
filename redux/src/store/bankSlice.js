import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0
}

const bankSlice = createSlice({
    name : 'bank',
    initialState,
    reducers:{
        deposit:(state, action) => {
            state.balance += action.payload;
        },
        withdraw:(state, action) => {
            //잔액이 출금액보다 작으면 잔액부족하면 안되게
            console.log('bal : ',state.balance, 'al : ',+action.payload);
            
            if(state.balance >= action.payload){
                state.balance -= action.payload; 
            }else{
                alert('잔액이 부족합니다');
            }
        }
    }
})
//액션과 리듀서를 내보내기
export const {deposit, withdraw} = bankSlice.actions
export default bankSlice.reducer