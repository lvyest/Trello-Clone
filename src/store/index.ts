import {configureStore} from "@reduxjs/toolkit";
import reducer from './reducer/reducer';

const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>; 
// typeof store.getState : getState 함수 자체의 타입
// ReturnType<typeof store.getState> : getState 함수가 반환하는 값의 타입

export type AppDispatch = typeof store.dispatch;

export default store; 