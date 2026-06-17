import { useRef } from "react";
function Reference() {
    const inputRef = useRef();
    const uber = () => {
        inputRef.current.focus();
    };
    return (
        <div>
            <label>Name:</label>
            <input ref={inputRef} type="text" />
            <button onClick={uber}>Submit</button>
        </div>
    );
}
export default Reference;