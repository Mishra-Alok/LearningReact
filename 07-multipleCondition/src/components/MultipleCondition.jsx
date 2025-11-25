import {useState} from 'react';
const MultipleCondition = ()=>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>Multiple Condition</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count</button>

            {
                count == 0? <h1>Count: 0</h1>:
                count == 1? <h1>Count: 1</h1>:
                count == 2? <h1>Count: 2</h1>:
                count == 3? <h1>Count: 3</h1>:
                <h1>Multiple Condition not applied further</h1>

            }
        </div>
    )
}

export default MultipleCondition;