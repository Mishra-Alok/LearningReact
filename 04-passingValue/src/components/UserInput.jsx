import { useState } from "react";
function UserInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label>Age: </label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>

      <button onClick={()=>{
        alert("Form submitted")
      }}>Submit</button>
    </div>
  );
}

export default UserInput;
