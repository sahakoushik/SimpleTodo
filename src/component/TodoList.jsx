import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'
import Error from './Error';

const TodoList = () => {
  const todos = useSelector((state)=> state.todos);
  const filters = useSelector((state)=> state.filters);
  
  console.log("todos list",todos)
  console.log("filtes list",filters)
  
  const filteredArray = todos.filter((todo)=> {
    if (filters.status === "All") {
      return todo
    }else if (filters.status ==="Complete") {
      return todo.completed
    }else return !todo.completed
  }).filter((todo)=>{
    if(filters.colors.length > 1){
      return filters.colors.includes(todo?.color)
    } else return todo
  })

 
 
  return (
    <div className='py-2'>
        {
        filteredArray.length ?
          filteredArray.map((todo)=> {
            if(todo){
              return <Todo todo={todo} key={todo.id}/>
            }else  return <Error/>
          }) :
          <Error/>
        }
      
        
    </div>
  )
}

export default TodoList