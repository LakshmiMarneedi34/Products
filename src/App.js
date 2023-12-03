import {useState} from 'react'

function App(){
  const [count,setCount]=useState(0);

  const onClick = ()=> {
    setCount(count+1)
  }

  return(
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={onClick}>
        increase
      </button>
    </div>
  )
}

export default App;