import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button style={{gap: '10px', padding: '4px 10px', marginRight: '10px', backgroundColor: 'yellow', borderRadius: '5px'}}
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Increament
      </button>

      <button style={{gap: '10px', padding: '4px 10px', marginRight: '10px', backgroundColor: 'yellow', borderRadius: '5px'}}
        onClick={function () {
            if(count > 0)
          setCount(count - 1);
        }}
      >
        Decreament  
      </button>

      {/* or, arrow function */}
      {/* <button onClick={()=>{
        setCount(count-1)
      }}> Decreamet </button> */}
    </div>
  );
}

export default Counter;
