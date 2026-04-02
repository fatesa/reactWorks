import './App.css'
import AxiosGet from './axios/AxiosGet'
import AxiosGetById from './axios/AxiosGetById'
import AxiosPost from './axios/AxiosPost'
import FecthGetById from './components/FecthGetById'
import FetchExample from './components/FetchExample'
import FetchExample2 from './components/FetchExample2'
import FetchGet from './components/FetchGet'
import Todos from './todos/Todos'

function App() {


  return (
    <>
    <section className="center">      
      {/* <FetchExample></FetchExample> */}
      {/* <FetchExample2 id={10}></FetchExample2> */}
      {/* <Todos></Todos> */}
      {/* <AxiosGet /> */}
      {/* <AxiosGetById id={2} /> */}
      {/* <AxiosPost /> */}
      <FetchGet />
      {/* <FecthGetById id={3}/> */}


    </section> 
     
    </>
  )
}

export default App
