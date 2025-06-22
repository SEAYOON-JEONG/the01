import { createSlice } from "@reduxjs/toolkit";


// 초기 상태 정의
const initialState = {
  carts: [],           // 카트에 담긴 상품 목록을 저장하는 배열 (초기값은 빈 배열)
  itemCount: 0,        // 카트에 담긴 상품의 총 개수 (초기값 0)
  totalAmount: 0,      // 카트에 담긴 모든 상품의 총 금액 (초기값 0)
};


// createSlice를 사용하여 카트 관련 리듀서와 액션 생성
const cartSlice = createSlice({
  name: "cart",        // 슬라이스 이름 (액션 타입 생성 시 사용됨)
  initialState,       // 위에서 정의한 초기 상태
  reducers: {
    // 상품을 카트에 추가하는 액션
    addToCart: (state, action) => {
      // 카트에 이미 동일한 상품이 있는지 확인
      const isItemCart = state.carts.find((item) => item.id === action.payload.id);
     
      if (isItemCart) {
        // 이미 있는 상품인 경우: 수량과 총 가격 업데이트
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,  // 기존 상품 정보 유지
                quantity: item.quantity + action.payload.quantity,  // 수량 증가
                totalPrice: (item.quantity + action.payload.quantity) * item.price,  // 총 가격 재계산
              }
            : item  // 다른 상품들은 그대로 유지
        );
      } else {
        // 새로운 상품인 경우: 카트에 추가
        const newItem = {
          ...action.payload,  // 액션으로 전달된 상품 정보
          totalPrice: action.payload.price * action.payload.quantity,  // 총 가격 계산
        };
        state.carts.push(newItem);  // 카트 배열에 새 상품 추가
      }
     
      // 카트의 총 금액 재계산 (모든 상품의 가격 * 수량 합계)
      state.totalAmount = state.carts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
     
      // 카트에 담긴 상품 종류 수 업데이트 (배열 길이)
      state.itemCount = state.carts.length;
    },


    // 카트에서 상품 제거 액션
    removeFromCart: (state, action) => {
      // 전달된 id와 일치하지 않는 상품만 필터링 (해당 상품 제거)
      state.carts = state.carts.filter((item) => item.id !== action.payload);
     
      // 총 금액 재계산
      state.totalAmount = state.carts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
     
      // 상품 종류 수 업데이트
      state.itemCount = state.carts.length;
    },


    // 카트 비우기 액션
    clearCart: (state) => {
      state.carts = [];        // 카트 배열 초기화
      state.totalAmount = 0;   // 총 금액 0으로 설정
      state.itemCount = 0;    // 상품 수 0으로 설정
    },


    // 카트 총계 계산 액션
    getCartTotal: (state) => {
      // 총 금액 재계산
      state.totalAmount = state.carts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
     
      // 상품 종류 수 업데이트
      state.itemCount = state.carts.length;
    },
  },
});


// 생성된 액션 생성자 함수 내보내기 (컴포넌트에서 사용)
export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;


// 리듀서 내보내기 (스토어에 등록)
export default cartSlice.reducer;