import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Banking from './apps/Banking'
import Counter from './apps/Counter'
import Header from './layouts/Header'
import Home from './layouts/home'


function App() {

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/counter' element={<Counter />} />
              <Route path='/bank' element={<Banking />} />              
            </Routes>
        </BrowserRouter>        
      </section>
    </>
  )
}

export default App
