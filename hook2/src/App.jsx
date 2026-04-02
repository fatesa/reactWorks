import './App.css'
import User from './context/User'
import CountReducer from './reducer/CountReducer'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'

function App() {

  return (
    <>
      <section id="container">
        <Counter />
        <InputFocus />
        <CountReducer />
        <User />
      </section>
    </>
  )
}

export default App
