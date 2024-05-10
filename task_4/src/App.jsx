import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './components/CountdownTimer'
import UserList from './components/UserList'
import WindowSize from './components/WindowSize'

function App() {

  return (
    <>
    <h1>Таймер:</h1>
    <CountdownTimer initialTime={10} />
    <h1>Список пользователей:</h1>
    <UserList />
    <h1>Размер окна:</h1>
    <WindowSize />
    </>
  )
}

export default App
