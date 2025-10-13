function Events() {

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
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick} className="test">Eventa Component</p>
            <button onClick={handleClick}>Click Me</button>
            <br/>
            <button onClick={() => alert("hello andrul")}>Say Hello</button>
            <br/>
            <input type="text" onChange={handleInput} placeholder='Enter your text'/>
        </>
    )   

}

export default Events