import { useState } from "react";
import "./Comment.css"
import CommentsForm from "./CommentsForm";
export default function Comment(){
    let [ comments, setComments] = useState([
        {
            username: "@prachiS",
            remarks: "great work",
            rating: 5,

     },
   ]);

    let addNewComment = (comment) =>{
    setComments((currComments)=>[...currComments, comment]);
    console.log("hello");
    };
    return (
        <>
        <div>
            <h1> All Comments !</h1>
            {comments.map((comments , idx)=>(
                <div className="comment" key={idx}>
                <span>{comments.remarks}</span>
                &nbsp; <br />
                <span>(rating = {comments.rating})</span>
                <p>--{comments.username}</p>
            </div>

            ))}
            
        </div>
       
        <CommentsForm addNewComment = {addNewComment} />

        </>
    );
}