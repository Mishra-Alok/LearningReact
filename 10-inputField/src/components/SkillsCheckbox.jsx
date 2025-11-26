import {useState} from 'react';

function SkillsCheckbox(){
    const [skill, setSkills] = useState([]);
    
    const handleSkills = (event)=>{
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){
            setSkills([...skill, event.target.value]);
        }
        else{
            setSkills([...skill.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h3>Select your skills</h3>

            <input type="checkbox" id="php" value="PHP" onChange={handleSkills}/>
            <label htmlFor="php" >PHP</label>
            <br />
            <br />

            <input type="checkbox" id="js" value="JS" onChange={handleSkills}/>
            <label htmlFor="js">JS</label>
            <br />
            <br />

            <input type="checkbox" id="node" value="Node" onChange={handleSkills}/>
            <label htmlFor="node">Node</label>
            <br />
            <br />

            <input type="checkbox" id="java" value="Java" onChange={handleSkills}/>
            <label htmlFor="java">Java</label>

            <h2>{skill.toString()}</h2>  {/* ye array ko string mein convert kar deta hai with comma(,)*/}
            <h2>{skill.join(" ")}</h2>
        </div>
    )
}

export default SkillsCheckbox;