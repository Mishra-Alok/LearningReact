import React from 'react';

function JsxBasic(){
    const name = "Peter"
    const a = 10;
    const myArr = ["Red", "Blue", "Black", "Green", "Yellow"];
    const myObj = {
        name: "Alok",
        id: 101,
        password: 1234
    }


    return (
        <div>
            <h1>Value of a is {a}</h1>
            <h2>Value of Array : {myArr.join(", ")}</h2>
            <h2>Name : {myObj.name}</h2>
            
            {/* if we want to print value in JSON format the we have to use 'JSON.stringify(objName)' */}
            <h1>Value of object in JSON format{JSON.stringify(myObj)}</h1>
            <label>Enter you name: </label>  {/* But is not editable */}
            <input type='text' value={name} />

            
        </div>
    )
}

export default JsxBasic;