import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <div style={{display:"flex"}}>
            <button onClick={() => setCount(count +1)} style={{backgroundColor:"green", color:"white", width:"40px", marginRight:"10px"}}>+</button>
            <button onClick={() => setCount(count -1)} style={{backgroundColor:"red", color:"white", width:"40px"}}>-</button>
            </div>
            
        </div>
    );
};

export default Counter;