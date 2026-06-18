import { useState } from "react";
function Application()
{
    const[info, setInfo]=useState({
        name:"",
        email:"",
        gender:"",
        DOB:"",
        skills:""
    });
    const[image, setImage]=useState(null);
    const[age, setAge]=useState(0);
    const change = (e)=>{
        const{name , value} = e.target;
        setInfo
    };
}
export default Application;