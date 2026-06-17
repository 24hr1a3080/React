import { useState } from "react";
function Fire()
{
    const [name , getName]=useState("");
    return (
        <>
        <label>
            Name: <input type="text" onChange={
                (e)=>getName(e.target.value)
                } />
        </label>
        <h1>{name}</h1>
        </>
    );
}

function Master(){
    const [rename,setname]=useState("Anil");
    return(
        <>
        <h1>{rename}</h1>
        <button style={{width:"fit-content"}} onDoubleClick ={ () => setname("kishore")}>Change Name</button>
        </>
    );
}
function Classic() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button style={{width:"fit-content"}} onClick={() => setCount((c) => c + 1)}>Increment</button><br/>
             <button style={{width:"fit-content"}} onClick={() => setCount((c) => c - 1)}>decrement</button>
             <Master/>

        </>
    );
}
function Classic()
{
    const[show , setshow]=useState(false);
    return (
        <>
        <button
         onClick={()=>setshow(!show)}
        >Reveal</button>
        {show && <App></App>}
        </>
    );
}

export default Classic;
