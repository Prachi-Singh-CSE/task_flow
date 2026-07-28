import TicketNum from "./TicketNum";
import "./Tick.css";

export default function Tick({ticket}){
    return (
        <div className="Tick">
            <h3>Ticket</h3>
            {ticket.map((num, idx)=>(
              <TicketNum num = {num} key = {idx}/>
            ))}
            
        </div>
    );

}