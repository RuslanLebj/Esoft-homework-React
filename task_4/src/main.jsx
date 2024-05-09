import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // Когда включён StrictMode, компоненты могут монтироваться, размонтироваться и снова монтироваться 
  // во время начальной загрузки для имитации размонтирования и помощи в отлове ошибок, 
  // связанных с плохо подготовленными для размонтирования компонентами (например, неудалённые обработчики событий).

  // StrictMode удваивает вызовы методов render и жизненных циклов, включая constructor, render, 
  // и методы жизненного цикла, использующиеся после рендеринга (componentDidMount, componentDidUpdate и т.д.). 
)
