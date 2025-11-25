import {useState} from 'react';
import User from './components/User';
import Student from './components/Student';
function App(){
  // 3rd way
  // let userName = "Alok Mishra";
  // let age = 23;
  // let email = "alokmishra.patna@gmail.com";

  // 4th way, using object
  // const userObject = {
  //   name: "Alok Mishra",
  //   age: 23,
  //   email: "alokmishra.patna@gmail.com",

  // }

  // let userObject2 = {
  //   name: "Abhimanyu Singh",
  //   age: 24,
  //   email: "abhimanyusingh@gmail.com"
  // }

  // 5th way, using Array
  // const collegeNames = ["KIET", "GL BAJAJ", "IET", "NIET", "MIET", "DU"];


  // 6th 
  const [student, setStudent] = useState();


  return (
    <div>
      <h1>Props in React JS</h1>
      
      {/* 1st way passing data parent to child i.e. using props */}
      {/* <User name="Alok Mishra" age={23} email={"alokmishra.patna@gmail.com"}/> */}


      {/* 2nd way passing data parent to child i.e. using props */}
      {/* <User name="Alok Mishra" age={23} email={"alokmishra.patna@gmail.com"}/> */}


      {/* 3rd way passing data parent to child i.e. using props */}
      {/* <User name={userName} age={age} email={email} /> */}

      {/* 4th way */}
      {/* <User user={userObject} /> */}
      {/* <User user={userObject2} /> */}

      {/* 5th way */}
      {/* <User names={collegeNames} /> */}



      {/* 6th */}
      {
        student && <Student name={student} />
      }
      <button onClick={()=> setStudent("Ankit")} >Click for change</button>
    </div>
  )
}

export default App;
