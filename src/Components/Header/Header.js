import React from 'react'
import '../../App.css'
import {Link, withRouter} from 'react-router-dom'
import logo from '../../assets/logo.jpg'

function Header(props) {
    return (
        <div>
            <header id='header'>
                <div id='logo-container'>
                    {/* <Link to='/' >
                    </Link> */}
                    <img id='logo' src={logo} alt='' />
                </div>
                    <div id="navbar">
                <Link to='/form' >
                        <button id='inventory' > New Design </button>
                </Link>
                        <button id='inventory' > Instagram </button>
                        <a href='https://www.etsy.com/shop/FreshlyPickedPrints?ref=seller-platform-mcnav' >
                            <button id='inventory' > Etsy Shop </button>
                        </a>
                        <button id='inventory' > Cart </button>
                    </div>
            </header>
        </div>
    )
}
export default withRouter(Header)