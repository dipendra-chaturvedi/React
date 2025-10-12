// import './App.css'
import styles from "./Hello.module.css"

const Hello = () => {
     const name = "Andrul" 
     
  return (
    // <div className='test'>Hello {name} gaming</div>
    <div className={styles.test}>Hello {name} gaming</div>
  )
}

export default Hello
