import Hello from "./Hello";
import Bye from "./Bye";
import Events from "./Events";
import Function from "./Function";
import Conditional from "./Conditional";
import Props from "./Porps";
import Button from "./Button";
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
      <Conditional />
      <Props name="Player" age="20" city="Nagpur"/>
      <Button label="click" handleClick={alert("How are you")} />
    </>
  );
}

export default App;
