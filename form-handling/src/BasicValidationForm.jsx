import { useState } from 'react';

function BasicValidationForm() {

  const [name, setName] = useSate("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email) {
      setErrors("")
      console.log("Form Submitted :", {name, email})
    } 
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h2>Basic Validation Form</h2>
          <input 
            type="text"  
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BasicValidationForm
