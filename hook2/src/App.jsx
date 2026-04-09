import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import User from './context/User'
import BankReducer from './reducer/BankReducer'
import CountReducer from './reducer/CountReducer'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'
import Header from './layouts/Header'
import ParentTheme from './context/ParentTheme'

function App() {

  return (
    <>
      <section id="container">
        {/* <Counter />
        <InputFocus />
        <CountReducer />
        <User />
        <BankReducer /> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<BankReducer />} />
            <Route path="/bank" element={<BankReducer />} />
            <Route path="/count" element={<CountReducer />} />
            <Route path="/theme" element={<ParentTheme />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
