import SimpleForm from "./SimpleForm"
import MultiInputForm from "./MultiInputForm"
import AdvancedForm from "./AdvancedForm"
import UncontrolledForm from "./UncontrolledForm"
import "./App.css"

function App() {

  return (
    <>
      <UncontrolledForm />
      <AdvancedForm />
      <MultiInputForm />
      <SimpleForm />
    </>
  )
}

export default App
