import { useState } from "react";

function Student() {
  const [student, setStudent] = useState({
    name: "Andrul",
    age: 21,
    city: "Nagpur"
  })
  const changeCity = () => {
    setStudent({...student, city: "Gondia"})
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>City: {student.city}</p>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}

export default Student;
