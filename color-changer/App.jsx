import { useState } from 'react'

export default function App() {
  const [color, setColor] = useState('#ffffff')

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    setColor(randomColor)
  }

  return (
    <div style={{backgroundColor:color, height:'100vh', textAlign:'center'}}>
      <h1>Color Changer</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}
