import { useState } from "react";
import "./Ticket.css";
import {genTicket,sum}  from "./helper";
import Tick from "./Tick";



export default function Ticket({n=10, winCondition}){
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

     let buyTicket =()=>{
        setTicket (genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
             <Tick ticket = {ticket}/>
            <br /><br />
            <button style={{padding : "20px" , fontSize: "20px" , borderRadius: "20px", backgroundColor: "skyBlue" , color:"black"}}  onClick={buyTicket}>Gerenate new ticket</button>
            <h3 style={{color : "white" , fontSize: "30px"}}>{isWinning && "Congratulations, you won!🎉🎉"}</h3>
        </div>

    );
}