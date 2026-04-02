import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// // TypedUseSelectorHook 필요한 이유
// // : 제네릭 타입으로, RootState 타입을 인자로 받아줌
// interface Obj<T> {
//     name: T;
// }

// interface State {
//     state: {
//         data: string;
//         loading: boolean;
//     }
// }

// const obj: Obj<State> = {
//     name: {
//         state: {
//             data: 'abcd',
//             loading:  false
//         }
//     }
// }