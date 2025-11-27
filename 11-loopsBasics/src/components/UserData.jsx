import User from "./User";
const UserData = () => {
  const userData = [
    {
      id: 1,
      name: "Alok",
      email: "alok@test.com",
      age: 23,
    },

    {
      id: 2,
      name: "Ankit",
      email: "ankit@test.com",
      age: 24,
    },

    {
      id: 3,
      name: "Abhishek",
      email: "abhishek@test.com",
      age: 24,
    },

    {
      id: 4,
      name: "Tushar",
      email: "tushar@test.com",
      age: 23,
    },
  ];
  
  return (
    <div>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <User data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserData;
