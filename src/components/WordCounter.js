import React, { useState } from 'react';

function WordCounter() {
    const [count, setCount] = useState(0);

    const handleCheck = (e)=> {
        // console.log(e.target.value);
        // console.log(e.target.value.length);
        // console.log(e.target.value.trim().split(/\s+/));
        setCount(e.target.value.trim().split(/\s+/).length);
        
    }
    return (
        <div>
            <h2>Responsive Paragaraph Word Counter</h2>
            <textarea name="textarea" id="tarea" cols="30" rows="10" onChange={handleCheck}></textarea>
            <h3>Word Count: {count}</h3>
        </div>
    )
}

export default WordCounter