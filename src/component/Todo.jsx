/* eslint-disable react/prop-types */
import React from 'react'
import {useDispatch} from 'react-redux'
import { deleted, toggled } from '../redux/todos/actions'
const Todo = ({todo,handelEdit}) => {
  const dispatch = useDispatch()
  const handleCheckbox = (todoId) =>{
    dispatch(toggled(todoId))
  }
  
  const handleDelete = (todoId) =>{
    dispatch(deleted(todoId))
  }
  return (
    <div>
      <div className='flex row gap-2 items-center py-2 border-b-2' key={todo.id}>
        <div>
            <input 
              className='cursor-pointer'
              checked= {todo.completed}
              onChange={()=>handleCheckbox(todo.id)}
              type="checkbox"/>
        </div>
        <div className='flex-1'>{todo.text}</div>
        <button 
            type="button"
            onClick={handelEdit}
            className="text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1 text-center ml-2">EDIT</button>
        <button 
          type="button"
          onClick={()=>handleDelete(todo.id)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1 text-center ml-2">DELETE</button> 
        </div>
    </div>
  )
}

export default Todo