import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increase}>Up</button>
            <button onClick={decrease}>Down</button>
        </div>
    )

}
 
export default Counter;