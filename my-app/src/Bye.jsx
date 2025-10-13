function Bye() {

  //  Array  
  const playstation = [
    "PS1",
    "PS2",
    "PS3",
    "PS4",
    "PS5",
    "XBOX",
    "XBOX 360",
    "XBOX ONE",
    "XBOX SERIES X",
  ];

  // Object
  const user = {
    firstname: "Vishal",
    lastname: "Dhabalia",
    age: 30,
    level: "Chomu",
  };

  function getFullName(user){
    return user.firstname + " " + user.lastname
  }

  // Array of Objects
  // const employee = [
  //   {firstname: "Ashwin", lastname: "Ankar", age: 50},
  //   {firstname: "Bindiya", lastname: "Turkar", age: 50},
  //   {firstname: "Yash", lastname: "Bansod", age: 50}
  // ]

  return (
    <>
      <div className="test">Bye Component</div>
      <div>Full Name : {getFullName(user)} </div>
      <div>Age : {user.age}</div>
      <div>Level : {user.level}</div>
      <div>
        {playstation.map((item, index) => (
          <li>
            {index} - {item}
          </li>
        ))}
      </div>
      {/* <div>
        {employee.map((fullName, index) => (
           <li>{index} - {fullName}</li>
        ))}
      </div> */}
    </>
  );
}
export default Bye;
