import {useState} from 'react';

function InputBasic() {
    const [val, setValue] = useState("User Name");


  return (
    <>
      <h2>Get Input field value</h2>
      <label>Enter user name: </label>
      <input   
        type="text"
        placeholder="Enter Name"
        value={val}
        onChange={(event)=>{
            setValue(event.target.value);
        }}             
      />

      <h2>Your Name: {val}</h2>

      <button onClick={()=>{setValue("")}} >Clear Value</button>
    </>
  );
}

export default InputBasic;
