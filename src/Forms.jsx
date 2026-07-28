import {useState} from "react";

export default  function Form (){
    // let [fullName , setFullName] = useState("");
    // let [username , setUsername] = useState("");

    let [formData , setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });



    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value);
    // }

    //  let handleUsername = (event) =>{
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData)=>{
            currData[fieldName] = newValue;
            return {...currData};
        })
        
    };


    let handleSubmit= (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name </label>
            <input 
            type="text"
            placeholder="enter full Name " 
            value = {formData.fullName}  
            onChange={handleInputChange}
            id="fullName"
            name="fullName"/>
            &nbsp;&nbsp;
            <button>Submit</button>
           <br /> 
       
            <label htmlFor="username">Username </label>
            <input 
            type="text" 
            placeholder="enter Username" 
            value = {formData.username}  
            onChange={handleInputChange}
            id="username"
            name="username"/>
            &nbsp;&nbsp;
            <button>Submit</button>
            <br />

            <label htmlFor="password">Password </label>
            <input 
            type="password" 
            placeholder="enter password" 
            value = {formData.password}  
            onChange={handleInputChange}
            id="password"
            name="password"/>
            &nbsp;&nbsp;
            <button>Submit</button>
        </form>
    )
}