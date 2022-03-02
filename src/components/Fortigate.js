import React from 'react'
import {Button} from 'react-bootstrap'
import Lumen_Technologies_Logo from '../imgs/Lumen_Technologies_Logo.png'


function Fortigate() {
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
                <ul>
                    <Button className="navLinks" variant="info"><li>Whitelist</li></Button>
                    <Button className="navLinks" variant="info"><li>FW Rule</li></Button>
                    <Button className="navLinks" variant="info"><li>Route Map</li></Button>
                    <Button className="navLinks" variant="info"><li>Static Route</li></Button> 
                </ul>
                <ul>    
                    <Button className="navLinks" variant="info"><li>VPN</li></Button>
                    <Button className="navLinks" variant="info"><li>Static Route</li></Button>  
                    <Button className="navLinks" variant="info"><li>BGP Peer</li></Button>
                    <Button className="navLinks" variant="info"><li>VDOM</li></Button> 
                </ul>
            </div>
        </div>
        </>
    )
}

export default Fortigate