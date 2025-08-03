import { useState } from "react"

export default function Baller () {

    const [balls,setBalls]=useState(0)
    const [runs,setRuns] =useState(227)
    const RomaingRun = () => {
        let totalRuns = runs + 1
        setRuns(totalRuns)
    } 

    const overBall = () => {
        let Balling = balls + 1 
        if (Balling< 7){
            setBalls(Balling)
        }
    }

    const mainDivStyle = {
        display : 'flex',
        border:'1px solid red',
        alignItems:'center'
    }
    const countryNameStyleEng = {
            color:'red',
            backgroundColor : 'white',
            padding:'20px 60px',
            height:'70px',
            borderRadius:'20px',
             margin: 'auto 20px'

           }
    const countryNameStyleNz = {
            color:'white',
            backgroundColor : 'black',
            padding:'20px 60px',
            height:'70px',
            borderRadius:'20px',
            margin: 'auto 20px'

           }
    return (
       <body>
         <div style={mainDivStyle} >
           <h1 style={countryNameStyleEng}>Eng</h1>
            <div style={{
                display:'flex',
                gap:'10px',
                margin:'35px'
                
            }}>
              <h3>Nz v Eng</h3>
              <h3>{runs}-8</h3>
              <h4>49.{balls}</h4> 
              <h4 style={{
                color:'red'
              }}>Target 242</h4>
            </div>
            <div style={{
                margin: 'auto 10px'}}>
              <h2>  England Need</h2>
            </div>
            <div style={{
                display:'flex',
                alignItems:'center',
                gap:'20px',
                
            }}>
                <h1>16</h1>
                <h4>More from</h4>
                <h1>5</h1>
                <h4>Balls</h4>
            </div>
            <h1 style={countryNameStyleNz}>Nz</h1>
        </div>
        <div>
            <button onClick={overBall}>Ball</button>
            <button>six</button>
            <button>Four</button>
            <button onClick={RomaingRun}>single</button>
            <button>Double</button>
            <button>Tripple</button>
            <button>Wicket</button>
            <button>No ball</button>
            <button onClick={RomaingRun}>Wide</button>
        </div>
       </body>
       
        
    )
}
// Balls