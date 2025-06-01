import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  value: 0,
  status: 'idle',
  
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value +1;
    },
    decrement: (state) => {
      state.value --;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
})

// 호출용 
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

//스토어 연결용
export default counterSlice.reducer;
// 스토어가 슬라이스의 상태를 관리하도록 연결할때 사용