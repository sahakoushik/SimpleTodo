import './App.css'
import Filter from './component/Filter'
import Header from './component/Header'
import Navbar from './component/Navbar'
import TodoList from './component/TodoList'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className='w-3/4 bg-slate-100 mt-16 mx-auto shadow-lg'>

        <Navbar/>
        <div className='p-8'>
          <Header/>
          <TodoList/>
          <Filter/>
        </div>
          
      </div>
    </Provider>
  )
}

export default App
