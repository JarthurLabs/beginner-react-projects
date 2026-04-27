import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if(input.trim()){
      setTasks([...tasks, input])
      setInput('')
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>Todo App</h1>
      <input value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={()=>deleteTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
