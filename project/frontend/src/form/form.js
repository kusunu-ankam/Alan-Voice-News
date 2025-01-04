import { useState } from "react"
import axios from "axios";
import '../App.css';
function Form(){
    const[formdata,setformdata]=useState({
        'name':'',
        'email':'',
    })
    const submit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addsreg',{formdata})
        .then((res)=>
        console.log(res.data))
       return(
        window.location.replace('/Newsdata')
       )
    }
    return(
        <div className="form">
            <h1 className="to">Form</h1>
            <form onSubmit={submit} className="form1">
                <label>Name:</label>
                <input type="text" name="name" onChange={(e)=>setformdata({...formdata,name:e.target.value})}/>
                <br/>
                <label>Email</label>
                <input type="email" name="email"onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
                <br/>
                <button onClick={submit}>let's go</button><br/>
            </form>
        </div>
    )
}
export default Form;