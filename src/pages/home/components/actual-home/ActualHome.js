import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

function ActualHome() {
   return(
     <Header />
   )
}

export default ActualHome
ReactDOM.render(<ActualHome />, document.getElementById('root'))
