import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import MetaTags from 'react-meta-tags'

function ActualHome() {
   return(
     <div>
       <MetaTags>
          <title>Cleanfunder - The safe crowdfunding network</title>
          <link rel="icon" type="image/png" href="#" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </MetaTags>
       <Header />
     </div>
   )
}

export default ActualHome
ReactDOM.render(<ActualHome />, document.getElementById('root'))
