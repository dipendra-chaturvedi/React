import SimpleForm from "./SimpleForm"
import MultiInputForm from "./MultiInputForm"
import AdvancedForm from "./AdvancedForm"
import UncontrolledForm from "./UncontrolledForm"
import BasicValidationForm from "./BasicValidationForm"
import "./App.css"

function App() {

  return (
    <>
      <BasicValidationForm />
      <UncontrolledForm />
      <AdvancedForm />
      <MultiInputForm />
      <SimpleForm />
    </>
  )
}

export default App
