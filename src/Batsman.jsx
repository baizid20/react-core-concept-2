import { useState } from "react"

export default function Batsman () {
    const btnStyle ={
        marginRight : '15px'
    }

    const [runs,setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)
    const [fours,SetFour] = useState(0)

    const single = () => {
       let single = runs + 1
        setRuns(single)
    }
   
    const six = () => {
        let six = runs + 6
        let totalSixes = sixes + 1;
        setSixes(totalSixes)
        setRuns(six)
    }
    const four = () => {
        let four = runs + 4;
        let totalFour = fours + 1
        SetFour(totalFour)
        setRuns(four)
    }
    const initial = () => {
        setRuns(0)
    }
    return (
        <div>
            <h3>Bangla Batter</h3>
            <span>Six : {sixes}</span><br /><span>Four : {fours} </span>
            <h1>Score : {runs} </h1>
            <button onClick={single} style={btnStyle}>Single</button>
            <button onClick={four} style={btnStyle}>Four</button>
            <button onClick={six} style={btnStyle}>Six</button>
            <button onClick={initial}>Initial</button>
        </div>
    )
}