import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/Header.css'

function Header() {
    return(
        <div class="header">
	        <header>
		        <h1 style={{"padding-right": "200px;"}}>&nbsp;&nbsp;cleanfunder</h1>
                <button>Sign Up</button>
                <button>Login</button>
            </header>
	    </div>
    )
}

export default Header
ReactDOM.render(<Header />, document.getElementById('root'))
