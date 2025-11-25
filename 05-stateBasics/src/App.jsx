import { useState } from 'react';
const App = () => {
  const [fruit , setFruit] = useState("Apple");

  function handleFruit(){
    setFruit("Banana");
  }
  return (
    <div>
    <h1>Hello</h1>
    <h1>{fruit}</h1>
    <button onClick={handleFruit} >Change fruit</button>
    </div>
  )
}
export default App; 