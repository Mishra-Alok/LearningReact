import { useState } from 'react';
function Form(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function handleClear(){
        setName("");
        setPassword("")
        setEmail("");
    }
    return(
        <div>
            <form action="">
                <input
                    type="text"
                    value={name}
                    placeholder="Enter name"
                    onChange={(event)=>{
                        setName(event.target.value);
                    }} 
                />
                <br />
                <br />

                <input
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(event)=>{
                        setPassword(event.target.value);
                    }}  
                />
                <br />
                <br />

                <input
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(event)=>{
                        setEmail(event.target.value);
                    }}
                />
                <br />
                <br />

                <button>Submit</button>
                <button onClick={handleClear}>Clear</button>

                <h3>Name: {name}</h3>
                <h3>Password: {password}</h3>
                <h3>Email: {email}</h3>
            </form>
        </div>
    )
}

export default Form;