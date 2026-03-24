import { useState } from 'react'
import './App.css'
import Dog from './components/Dog.jsx'
import Garden from './components/Garden.jsx'
import Counter from './components/counter.jsx'
import Car from './components/Car.jsx'
import AddProduct from './components/AddProduct.jsx'
import Box from './components/Box.jsx'
import AddDrink from './components/AddDrink.jsx'
import User from './components/User.jsx'
import Clock from './components/Clock.jsx'
import Profile from './card/Profile.jsx'

function App() {
 
  return (
    <>
      <h2>props - 속성 전달</h2>      
      <br />
      <Dog breed="말티즈" age={3}/>
      <br />
      <Dog breed="진돗개" age={4}/>
      <br />
      <br />

      <Garden />
      <br />
      <h2>state - 상태 관리</h2>
      <br />
      <Counter />

      <br />
      <Car />

      <br />
      <AddProduct />

      <br />
      
      {/* <Box></Box> 사이의 모든것이 {children}으로 전달 */}
      <Box>
        <h3>박스 안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>

      <Box>
        <h3>또 다른 박스 안의 내용</h3>
        <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>

      <AddDrink />
      <br />
      <User />
      <br />
      <Clock />
      <br />
      <Profile />
    </>
  )
}

export default App
