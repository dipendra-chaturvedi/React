import { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("Andrul")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Change Age</button>
    </div>
  );
}

export default UserProfile;
