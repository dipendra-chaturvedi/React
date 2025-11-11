import { useState } from 'react';

function BasicValidationForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email) {
      setErrors("All fields are required");
    }else {
      setErrors("");
      console.log("Form Submitted Successfully");
      console.log("Form Submitted :", {name, email});
      setSuccess("Submited Successfully");
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <p>{errors && <span style={{color:"red"}}>{errors}</span>}</p>
          
          {success && <span style={{color:"green"}}>{success}</span>}
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BasicValidationForm
