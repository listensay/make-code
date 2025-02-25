import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(count, setCount)

  return (
    <>
      <div>app</div>
    </>
  )
}

export default App
