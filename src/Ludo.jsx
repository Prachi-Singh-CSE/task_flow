import { useState } from "react";


export default function Ludo(){
    let[moves , setMoves] = useState({blue:0, green:0, red:0 ,yellow:0 });

    let updateBlue=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves , blue :prevMoves.blue +1}

        });
    }
     let updategreen=()=>{
       setMoves((prevMoves)=>{
            return {...prevMoves , green :prevMoves.green+1}

        });
      
    }
     let updatered=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves , red :prevMoves.red +1}

        });
        
     } 
    let updateyellow=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves , yellow :prevMoves.yellow +1}

        });
        
    }
    return(
        <div>
            <h2>Game Begins !</h2>
            <h3>Blue count = {moves.blue}</h3>
            <button style = {{backgroundColor : "blue"}}     onClick ={updateBlue}>+1</button>
            <h3>Green count = {moves.green}</h3>
            <button  style = {{backgroundColor : "Green"}}   onClick={updategreen}>+1</button>
            <h3>Red count = {moves.red}</h3>
            <button  style = {{backgroundColor : "red"}}     onClick={updatered}>+1</button>
            <h3>Yellow count = {moves.yellow}</h3>
            <button  style = {{backgroundColor : "yellow" ,  color : "black"}}  onClick={updateyellow}>+1</button>
        </div>
    );
}
