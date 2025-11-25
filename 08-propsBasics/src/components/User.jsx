 // // 1st way
// const User = (props) => {
//     return (
//         <div>
//             <h1>User Components</h1>
//             <h1>Name: {props.name}</h1>
//             <h1>Age: {props.age}</h1>
//             <h1>Email: {props.email}</h1>

//         </div>
//     )
// }
// export default User;


// 2nd way
// const User = ({name, age, email}) => {
//     return (
//         <div>
//             <h1>User Components</h1>
//             <h1>Name: {name}</h1>
//             <h1>Age: {age}</h1>
//             <h1>Email: {email}</h1>

//         </div>
//     )
// }
// export default User;


// const User = ({name, age, email}) => {
//     return (
//         <div>
//             <h1>User Component</h1>
//             <h1>Name: {name}</h1>
//             <h1>Age: {age}</h1>
//             <h1>Email: {email}</h1>

//         </div>
//     )
// }
// export default User;

// 4th way
// function User({user}){
//     return(
//         <div>
//             <hr />
//             <h1>Name: {user.name}</h1>
//             <h1>Age: {user.age}</h1>
//             <h1>Email: {user.email}</h1>
//         </div>
//     )
// }
// export default User;

// 5th way
const User = ({names})=>{
    return(
        <div>
            <h1>Props passing using Array</h1>
            <h1>Names: [{names.join(" ")}]</h1>
        </div>
    )
}

export default User;