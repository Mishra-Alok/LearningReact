import {useState} from 'react';

function RadioBasics(){
    const [gender, setGender] = useState("Select Gender");
    const [city, setCity] = useState("Select City");
    return(
        <div>
            <h2>Handle Radio and Dropdown</h2>
            <h4>Select Gender</h4>
            <input type="radio" id="male" name="gender" value={"Male"} onChange={(event)=>setGender(event.target.value)} checked={gender == "Male"} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value={"Female"} onChange={(event)=>setGender(event.target.value)} checked={gender == "Female"} />
            <label htmlFor="female">Female</label>

            <h2>Selected Gender: {gender}</h2>
            <br />
            <br />
            <br />

            <h2>Select City</h2>
            <select defaultValue={"select city"} onChange={(event)=> setCity(event.target.value)} >
                <option value="select city">Select City</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Patna">Patna</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Gurgaon">Gurgaon</option>
            </select>

            <h2>Selected City: {city}</h2>

        </div>
    )
}

export default RadioBasics;