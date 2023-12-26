import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {statusChange } from '../redux/filter/actions';
const Footer = () => {
    const filter = useSelector((state)=> state.filters)
    const todos = useSelector((state)=> state.todos)
    const completedTodos = todos.filter((todo)=> !todo.completed);
    const {status} = filter
    console.log("filter", filter);
    const dispatch = useDispatch();
    const handleStatus = (status) =>{
        dispatch(statusChange(status))
    }

    return (
        <div className="pt-4 flex row justify-between">
            <div className='text-sm text-slate-500'>{completedTodos.length > 1 ? `${completedTodos.length} tasks left` : `${completedTodos.length} task left`}</div>
            <div className='flex row gap-2 items-center border-2 py-2 px-4 rounded relative'>
                <div className='absolute -top-2 bg-purple-700 px-2 text-sm font-semibold rounded-2xl text-white -left-12'>Filters</div>
                <div
                    onClick={()=> handleStatus("All")} 
                    className={`text-sm text-slate-500 border-r pr-2 border-slate-500 cursor-pointer hover:scale-105 transition-all ${status==="All" && 'font-bold text-teal-700'}`}>All</div>
                <div
                    onClick={()=> handleStatus("Complete")}
                    className={`text-sm text-slate-500 border-r pr-2 border-slate-500 cursor-pointer hover:scale-105 transition-all ${status==="Complete" && 'font-bold text-teal-700'}`}>Complete</div>
                <div 
                    onClick={()=> handleStatus("Incomplete")}
                    className={`text-sm text-slate-500 border-r pr-2 border-slate-500 cursor-pointer hover:scale-105 transition-all ${status==="Incomplete" && 'font-bold text-teal-700'}`}>Incomplete</div>
                </div>
        </div>
    )
}

export default Footer