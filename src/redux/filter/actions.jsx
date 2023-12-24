import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"

export const colorChange= (color) =>{
    return{
        type: COLORCHANGE,
        payload: color
    }
}

export const statusChange= (status) =>{
    return{
        type: STATUSCHANGE,
        payload: status
    }
}
