import Hello from "./Hello";
import Bye from "./Bye";
import Events from "./Events";
import Function from "./Function";
import Conditional from "./Conditional";
import './App.css'
import Props from "./Porps";

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
    </>
  );
}

export default App;
