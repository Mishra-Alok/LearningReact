function LoopsBasic(){
    // Using Array
    const userName = ["Alok", "Ambikeshwar", "Ankit", "Abhishek", "Tushar", "Abhimanyu", "Anand"];

    // Using object in Array
    const userData = [
        {
            name: "Alok",
            age: 23,
            email: "alok.2426mca1291@kiet.edu",
            id: 1
        },
        {
            name: "Ambikeshwar",
            age: 24,
            email: "ambikeshwar.2426mca807@kiet.edu",
            id: 2
        },
        {
            name: "Ankit",
            age: 24,
            email: "ankit.2426mca1758@kiet.edu",
            id: 3
        }
    ]
    return (
        <>
            <h1>Learning loop in React</h1>
            <h2>Loop wtih Map Function</h2>

            <table border="1px solid black">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            
        </>
    )
}

export default LoopsBasic;