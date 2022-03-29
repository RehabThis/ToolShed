import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import ClipboardCopy from './ClipboardCopy'
import { Link } from 'react-router-dom'


function parseConfig2(array) {
    var y = array.split("\n");
    var z = [];
    var cidrInfo = y.map((e) => {
        var x = e.split('/').splice(0, 0, x[1])
        console.log(x)
        return x
    })
    console.log(z)
    console.log(cidrInfo)
    return "this is a test" + y
}

function FortigateIPObjects() {
    var [showModal, setShow] = useState(true)
    var handleClose = () => setShow(false)
    var handleShow = () => setShow(true)
    var [fqdnList, setFqdnList] = useState("")
    var [output, setOutput] = useState("")  
    
    var handleChange = (e) => { 
        if (e.target.value) {
          setFqdnList(e.target.value);
          setOutput(parseConfig2(e.target.value));
        } else {
          setOutput("");
          setFqdnList("");
        }
      }
    
      
      var handleOutput = (e) => {
        // setOutput(parseConfig2(fqdnList))
      }


    return (
        <div className="appContainer">
        <div>
          <h1 className="appTitle">IP Object & Group Tool</h1> <br />
          <p className="subTitle">This tool will generate the configuration input required to create new IP objects and insert them to a group. Input a list of IP's on the left text area with CIDR and the right will auto-populate with the template. Each IP must be on a line of its own.</p>
          <br />
          <Button variant="info" className="navLinks" onClick={handleShow}>
            <li>IP Obj Generator</li>
          </Button>
        </div>
  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>IP Object Generator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-6">
                <label>IP Input</label>
                <textarea className="textFields" value={fqdnList} onChange={handleChange}></textarea>
              </div>
              <div className="col-6">
                <label>Object Config</label>
                <textarea className="textFields" value={output} onChange={handleOutput}></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" onClick={ClipboardCopy(output)}>
              Copy to Clipboard
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="backButton">
            <Button variant="secondary" className="navLinks" disabled>
              <li>Settings</li>
            </Button>
          <Link to="/vendor/fortigate">
            <Button className="navLinks" variant="info">
              <li>Back</li>
            </Button>
          </Link>
        </div>
      </div>
    )

}

export default FortigateIPObjects;