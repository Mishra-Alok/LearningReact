import React from "react";
import "./App.css";

// this is functional component
// functional component always start wich capital letter
// we can write html code in functional component
function App() {
  return (
    <div>
      <h1>sum {sum()}</h1>
      <Color />
    </div>    
  );
}

// this is javascript function
function sum(){
  return 10 + 10;
}


// this is another component
// we can create multiple component in one component
// but this is not good way
// only one component can be export default 
function Color(){
  return (
    <h1>This is color component</h1>
  )
}

export default App;
