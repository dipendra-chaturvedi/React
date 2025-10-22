import { useState } from 'react'

function Toggle() {

    const [isOn, setIson] = useState(false)

  return (
    <div>
      <button onClick={() => setIson(!isOn)}>
        {isOn ? "ON" : "OFF"}
      </button>
      {isOn && <p>This is a Secret Key</p>}
    </div>
  )
}

export default Toggle
