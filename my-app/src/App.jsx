import './App.css'
import Hello from './Hello'
import reactLogo from './assets/react.svg'

function App() {
  const headingStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center'
  }
  
  //classic function
  function getName1(gameName){
    return gameName;
  }

  //arrow function
  const getName2 = (gameName) => {
    return gameName;
  }
  const title = "Top Trending Games 2024"
  const game1 = "God of War"
  const game2 = "Wwe 2k24"
  const game3 = "Fifa 24"
  const game4 = "Grand Theft Auto V"

  function handleClick(){
    alert("Button Clicked")
  }

  const handleInput = (event) => {
    console.log("Input Changed:", event.target.value)
  }

  const handleMouseOver = () => {
    console.log("Mouse Over Event Triggered")
  }

  const handleDoubleClick = () => {
    console.log("Paragraph Double Clicked")
  }
  
  return (
    <>
      <div>
        <h1 style={headingStyle} >Andrul</h1>
        <Hello />
      </div>
      <div>
        <h1>{getName1(title)}</h1>
        <h2>{getName1(game1)}</h2>
        <h2>{getName1(game2)}</h2>
        <h2>{getName1(game3)}</h2>
        <h2>{getName1(game4)}</h2>
      </div>
      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quaerat!</p>
      <div >
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div >
        <button onClick={() => alert("hello andrul")}>Say Hello</button>
      </div>
      <div>
        <input type="text" onChange={handleInput} placeholder='Enter your text'/>
      </div>


      <div>
        <h1>{getName2(title)}</h1>
        <h2>{getName2(game1)}</h2>
        <h2>{getName2(game2)}</h2>
        <h2>{getName2(game3)}</h2>
        <h2>{getName2(game4)}</h2>
      </div>
      
      <div>
        <img src={reactLogo} width="200px" />
      </div>
    </>
  )
}

export default App
