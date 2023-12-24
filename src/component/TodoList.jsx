import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'
const TodoList = () => {
  const todos = useSelector((state)=> state.todos);
  return (
    <div className='py-2'>
      {
        todos.map((todo)=> <Todo todo={todo} key={todo.id}/>)
      }
        
    </div>
  )
}

export default TodoList