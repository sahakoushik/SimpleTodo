import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { added } from '../redux/todos/actions'
const Header = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch()
  const handelSubmit =(e)=> {
    e.preventDefault();
    dispatch(added(todoText));
    setTodoText('');
  }
  return (
        <>
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
          {/* <div className="mb-5 flex row justify-between">
            <div className='text-sm text-slate-500'>Complete All</div>
            <div className='text-sm text-slate-500'>Clear Completed</div>
          </div>
          <hr className='mb-4'/> */}
        </>
    )
}

export default Header