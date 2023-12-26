/* eslint-disable no-case-declarations */
import { STATUSCHANGE } from "./actionTypes";
import initialState from "./initialState";
const filterReducer= (state = initialState, action) =>{
    switch (action.type) {
        case STATUSCHANGE:
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
}
export default filterReducer