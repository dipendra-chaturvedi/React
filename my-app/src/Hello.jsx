import styles from "./Hello.module.css"
import reactLogo from './assets/react.svg'

const Hello = () => {

    const title = "Hello Component"
    const headingStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
      } 
     
  return (
    <>
      <div  style={headingStyle}>{title}</div>
      <div>
        <h1 className={styles.test}>Andrul</h1>
      </div>
      <div>
        <img src={reactLogo} width="200px"/>
      </div> 
    </>

  )
}

export default Hello
