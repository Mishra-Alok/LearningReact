// If i don't pass any thing then print default value
function User({name="default value"}){
    return(
        <div style={{border: "2px solid grey", width: "300px", padding: "10px", margin: "2px", color: "red", backgroundColor: "lightyellow"}}>
            <h1>Name: {name}</h1>
        </div>
    )
}
export default User;