import { useState } from "react"

export default function Count () {
    const [count,setCount] = useState(0)
   function newCount () {
   let  new_count = count + 1
      setCount(new_count)
   }
   function decrease () {
    let gen_count = count - 1
    setCount(gen_count)
   }
    const CountDivStyle = {
        border:'1px solid green',
        padding:'25px',
        margin:'25px'
    }
    const btnStyle ={
        marginRight:'15px'
    }
    return(
        <div style={CountDivStyle}>
            <h3>Count : {count} </h3>
            <button onClick={newCount} style={btnStyle}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}