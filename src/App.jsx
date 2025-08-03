
import './App.css'
import Baller from './Baller'
import Count from './Counter'
import Batsman from './Batsman'
import User from './User'

function App() {
 
function handleClick () {
   alert('Hello I am clicked')
}
const clicked3 = () => {
  alert('Hi i am clicked 3 ')
}
const addNum = (Num) => {
   let newNum = Num + 5;
   alert(newNum)
}
  return (
    <>
      <h1>Core React Concept 2</h1>
      <User></User>
      <Baller></Baller>
      <Batsman></Batsman>
      <Count></Count>
      <button onClick={handleClick}>Clicked</button>
      <button onClick={function handleClick() {
        alert('Hello im clicked2')
      }}>Clicked2</button>
      <button onClick={clicked3}>Clicked3</button>
      <button onClick={()=> {
        alert('Hello im clicked4')
      }}>Clicked4</button>
      <button onClick={()=> {
        return addNum(90)
      }}>Clicked 5</button>
    </>
  )
}

export default App
