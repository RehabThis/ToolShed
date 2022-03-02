import React from 'react'


function Navbar() {
    return (  
        <nav>
            <div className="row"></div>
                <div className="col_1">
                    <logo>
                        <img src="#"></img>
                    </logo>
                </div>
                <div className="col_2">
                    <ul>
                        <li>Juniper</li>
                        <li>Cisco</li>
                        <li>Fortigate</li>
                        <li>Palo Alto</li>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar