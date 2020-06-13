import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/Header.css'

function Header() {
    return(
        <div class="header">
	    <header>
		<h1>Cleanfunder</h1>
		<div id="space-one"></div>
           </header>
	</div>
    )
}

export default Header
ReactDOM.render(<Header />, document.getElementById('root'))
