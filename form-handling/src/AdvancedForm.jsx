import { useState } from "react"

function AdvancedForm() {

    const[formData, setFormData] = useState({
        gender: "",
        country: "",
        agree: ""
    })
  return (
    <div>
      <form>
        <h2>Advanced Form</h2>
        <label>
            <input type="radio" name="gender" value="Male" />
            Male
        </label>

        <label>
            <input type="radio" name="gender" value="Female" />
            Female
        </label>
        <br />
        <label>
            Country:
            <select name="country">
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
            </select>
        </label>
        <br />
        <label>
            <input type="checkbox" name="agree" />
            I agree to terms and conditions
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AdvancedForm
