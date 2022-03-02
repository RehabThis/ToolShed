import React from 'react'
import {Button} from 'react-bootstrap'
import Lumen_Technologies_Logo from '../imgs/Lumen_Technologies_Logo.png'


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
                    <Button className="navLinks" variant="info"><li>Juniper</li></Button>
                    <Button className="navLinks" variant="info"><li>Fortigate</li></Button>
                </ul>
                <ul>    
                    <Button className="navLinks" variant="info"><li>Cisco</li></Button>
                    <Button className="navLinks" variant="info"><li>Palo Alto</li></Button>  
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar