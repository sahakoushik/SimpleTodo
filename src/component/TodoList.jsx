import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Todo from './Todo'
import Error from './Error';
import { added, edit } from '../redux/todos/actions'

const TodoList = () => {
  const todos = useSelector((state)=> state.todos);
  const filters = useSelector((state)=> state.filters);

  const [todoText, setTodoText] = useState('');
  const [update, setUpdate] = useState('');
  const [editedTodo, setEditedTodo] = useState('');

  const dispatch = useDispatch()
  const handelSubmit =(e)=> {
    e.preventDefault();
    if(!update){
      dispatch(added(todoText));
      setTodoText('');
    }else{
      dispatch(edit(editedTodo.id, todoText));
      setTodoText('');
    }
  }

  const handelEdit = (todo) =>{
    setUpdate(true);
    setTodoText(todo.text);
    setEditedTodo(todo);
    console.log("console.log", todo.text);
    // dispatch(edit(todo.id, todoText));
    // setTodoText('');
  }
  
  console.log("todos list",todos)
  console.log("filtes list",filters)
  
  const filteredArray = todos.filter((todo)=> {
    if (filters.status === "All") {
      return todo
    }else if (filters.status ==="Complete") {
      return todo.completed
    }else return !todo.completed
  })
  return (
    <div className='py-2'>
      <p className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">New Todo</p>
        <form onSubmit={handelSubmit}>
          <div className="mb-5 flex row">
              <input
                value={todoText}
                onChange={(e)=> setTodoText(e.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
              <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center ml-4">ADD</button>
          </div>
        </form>
        <div className='py-2'>
          {
          filteredArray.length ?
            filteredArray.map((todo)=> {
              if(todo){
                return <Todo todo={todo} key={todo.id} handelEdit={()=> handelEdit(todo)}/>
              }else  return <Error/>
            }) :
            <Error/>
          }
        </div>
    </div>
  )
}

export default TodoList