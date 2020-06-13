import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))
