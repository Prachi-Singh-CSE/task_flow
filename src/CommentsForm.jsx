import {useState} from "react";
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username is Required';
   } 

   if (!values.remarks) {
     errors.remarks = 'rremarks is Required';
   } 

   if (!values.rating) {
     errors.rating = ' rating is Required';
   } 
 
   return errors;
 };
   

export default function CommentsForm({addNewComment}){
    // let [formData ,  setFormData] = useState({
    //     username: "",
    //     remarks : "",
    //     rating: "",

    //  });


   const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // let handleInputChange = (event) =>{
    //     setFormData((currData)=>{
    //         return {...currData, [event.target.name]: event.target.value};
    //     });
    // };

    // let handleSubmit = (event) =>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     username: "",
    //     remarks : "",
    //     rating: "",
    // })
    // }

    return (
        <div>
            <h3>Give a Comment!!</h3>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="username">Username </label>
                <br />
                <input 
                name="username"
                type="text" 
                placeholder="username" 
                onChange={formik.handleChange}
                value={formik.values.username}
                id="username"/>
                <br /><br />

                 {formik.errors.username ? <p  style={{color: "red", fontSize:"12px"}}>{formik.errors.username}</p> : null}

                <label htmlFor="remark">Textarea</label>
                <br />
                <textarea 
                name="remarks"
                value={formik.values.remarks}  
                placeholder="add few remarks"
                onChange={formik.handleChange}
                id="remarks">
               
                </textarea>
                <br /><br />
                {formik.errors.remarks ? <p  style={{color: "red", fontSize: "12px"}}>{formik.errors.remarks}</p> : null}


                <label htmlFor="rating" >Rating</label>
                <br />
                <input 
                type="number"
                name="rating"
                min={1} 
                max={5}  
                placeholder="rating"
                value={formik.values.rating}
                onChange={formik.handleChange} 
                id="rating" 
                />
                <br /><br />
                {formik.errors.rating ? <p  style={{color: "red", fontSize:"12px"}}>{formik.errors.rating}</p> : null}

                <button  type="submit"  style={{backgroundColor:"skyBlue", color:"black", borderRadius:"15px",padding:"5px"}}>Add Comment</button>
            </form>
        </div>
    );
}