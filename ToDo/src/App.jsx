import { useState } from 'react'

function App() {

  let [input, setInput] = useState("")
  let [add, setAdd] = useState([])

  let hendalAdd = () => {
    setAdd([...add, input])
    setInput("")
  }

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={hendalAdd}>Add</button>

      <ul>
        {
          add.map((e, i) => {
            return (
              <li key={i}>{e}</li>
            )
          })
        }

      </ul>
    </>
  )

}

export default App