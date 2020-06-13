import React from 'react'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import ActualHome from './components/actual-home/ActualHome'

class Home extends Component {
   constructor() {
      super()
   }

   render() {
    return (
     <ActualHome />
    )
   }
}

export default Home
ReactDOM.render(<Home />, document.getElementById('root'))
