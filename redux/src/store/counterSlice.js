import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers :{
        //카운트값 1증가
        increment: (state) => {
            state.count += 1;
        },

        //카운트값 1감소
        decrement: (state) => {
            state.count -= 1;
        },

        //카운트값 리셋
        reset: (state) => {
            state.count = 0;
        },

        //카운트값을 특정 수량으로 증가
        incrementByAmount: (state, action) =>{
            state.count += action.payload;
        }
    }
})

//액션 생성자 exprot
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions
//reducer export
export default counterSlice.reducer