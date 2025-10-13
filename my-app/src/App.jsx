import Hello from "./Hello";
import Bye from "./Bye";
import Events from "./Events";
import Function from "./Function";
import './App.css'

function App() {
  const heading = "Andrul";
  return (
    <>
      <div className="test">Hello {heading} gaming</div>
      <Hello />
      <Bye />
      <Events />
      <Function />
    </>
  );
}

export default App;
