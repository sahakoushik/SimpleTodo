/* eslint-disable react/prop-types */
import React from 'react'
import {useDispatch} from 'react-redux'
import { colorSelected, deleted, toggled } from '../redux/todos/actions'
const Todo = ({todo}) => {
  const dispatch = useDispatch()
  const handleCheckbox = (todoId) =>{
    dispatch(toggled(todoId))
  }
  
  const handleDelete = (todoId) =>{
    dispatch(deleted(todoId))
  }
  const handleColor = (todoId, color)=>{
    dispatch(colorSelected(todoId, color))
  }
  return (
    <div>
      <div className='flex row gap-2 items-center py-4 border-b-2' key={todo.id}>
        <div>
            <input 
              className='cursor-pointer'
              checked= {todo.completed}
              onChange={()=>handleCheckbox(todo.id)}
              type="checkbox"/>
        </div>
        <div className='flex-1'>{todo.text}</div>
          <div
            onClick={() =>handleColor(todo.id, "red")} 
            className={`h-4 w-8 border-2 cursor-pointer border-red-400 ${todo.color === "red" ? 'bg-red-400' : 'border-red-400' }`}></div> 
          <div 
            onClick={() => handleColor(todo.id, "yellow")}
            className={`h-4 w-8 border-2 cursor-pointer border-yellow-400 ${todo.color === "yellow" ? 'bg-yellow-400' : 'border-yellow-400' }`}></div> 
          <div
            onClick={() => handleColor(todo.id, "green")} 
            className={`h-4 w-8 border-2 cursor-pointer border-green-400 ${todo.color === "green" ? 'bg-green-400' : 'border-green-400' }`}></div> 
        <button 
          type="button"
          onClick={()=>handleDelete(todo.id)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1 text-center ml-4">DELETE</button>
      </div>
      
    </div>
  )
}

export default Todo