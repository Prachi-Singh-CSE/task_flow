import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Ludo from './Ludo'
import TodoList from './TodoList'
import Ticket from './Ticket'
import Tick from './Tick'
import Form from './Forms'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Counter from './Counter'
import Joker from './Joker'
import TicketNum from './TicketNum'

function App() {
  //const [count, setCount] = useState(0)
   let winCondition = (ticket) => {
    return  ticket[0]=== 0;
   };

  return (
    <>
    {/* <Ticket n = {4}  winCondition={winCondition}/> */}
    
     <TodoList />
     
    </>
  )
}

export default App;
