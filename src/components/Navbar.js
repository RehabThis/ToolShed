import React from 'react'
import {Button} from 'react-bootstrap'
import Lumen_Technologies_Logo from '../imgs/Lumen_Technologies_Logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
    return (  
        <>
        <div className="appContainer">
            <div id="logoCol">
                <logo className="logo-main">
                    <h1 className="appTitle">ToolShed</h1>
                    <p className="subTitle">A Networking Resource</p>
                    <p className="subTitle">created by</p>
                    <img src={Lumen_Technologies_Logo} className="logoImg"></img>
                </logo>
            </div>
            <div id="navCol">
                <h2 id="vendorChoice" className="appTitle">Choose Your Vendor:</h2>
                <ul>
                    <Link to="/vendor/juniper"><Button className="navLinks" variant="info"><li>Juniper</li></Button></Link>
                    <Link to="/vendor/fortigate"><Button className="navLinks" variant="info"><li>Fortigate</li></Button></Link>
                </ul>
                <ul>    
                    <Link to="/vendor/cisco"><Button className="navLinks" variant="info"><li>Cisco</li></Button></Link>
                    <Link to="/vendor/palo-alto"><Button className="navLinks" variant="info"><li>Palo Alto</li></Button></Link>  
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar