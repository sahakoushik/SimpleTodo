/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORS, DELETED, TOGGLED } from "./actionTypes";
import  initialState from "./initialState";

const idCreator = (todos) => {
    const maxId = todos.reduce((maxId,current)=>{ Math.max(current.id,maxId), -1})
    return maxId;
} 
const todoReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: idCreator(state),
                    text: action.payload,
                    completed:false,
                }
            ];
        case DELETED:
            return state.filter((item)=> item.id !== action.payload)
        case TOGGLED:
            return  state.map((todo)=>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        case COLORS:
            const {todoId, color} = action.payload;
            
            return  state.map((todo)=>{
                if(todo.id === todoId){
                    return {
                        ...todo,
                        color : color
                    }
                }
                return todo
            })
        case ALLCOMPLETED:
            return  state.map((todo) => {
                return{
                    ...todo,
                    completed: true
                }
            });
        case CLEARCOMPLETED:
            return state.filter((todo)=> !todo.completed);
        default:
            return state;
    }
}

export default todoReducer