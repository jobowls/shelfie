import React from 'react'
import '../../App.css'
import shelfie from '../../shelfie_icon.png'
import {Link, withRouter} from 'react-router-dom'

function Header(props) {
    return (
        <header id="main-header">
            <div className="left-header">
                <div id="shelfie" >
                    <Link to="/" >
                        <button id="logo"> <img src={shelfie} id='shelfie-icon' alt="" /> </button>
                    </Link>
                </div>
                <div>
                    <h1> SHELFIE </h1>
                </div>

            </div>
                <div id="headbutt">
                    <Link to="/" >                    
                    <button id="dashbutt"> Shelfie Shop </button>
                    </Link>
                    <button id="formbutt" onClick={() => props.history.push('/form')}> New Product </button>
                </div>
        </header>
    )
}
export default withRouter(Header) 