// Toggle also known as Hide and Seek
import {useState} from 'react';

function Toggle(){
    const [display, setDisplay] = useState(true);  
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {
                display? <h1>Alok Mishra</h1> : null
            }
        </div>
    )
}

export default Toggle;