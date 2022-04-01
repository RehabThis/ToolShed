import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import ClipboardCopy from './ClipboardCopy'
import { Link } from 'react-router-dom'
import GetMask from './GetMask'


function parseConfig2(array, nextHop) {
    var y = array.split("\n");
    var z = [];
    var h = y.map((e) => {
      var mask2 = GetMask(e);
      var subnet = e.split("/");
      var t = "ip route " + subnet[0] + " " + mask2 + " " + nextHop + "\n";
      return t;
    })
    return h.join("");
    }

    
  

function FortigateIPObjects() {
    var [showModal, setShow] = useState(true)
    var handleClose = () => setShow(false)
    var handleShow = () => setShow(true)
    var [fqdnList, setFqdnList] = useState("")
    var [output, setOutput] = useState("")  
    var [nextHop, setNextHop] = useState("")

    var handleChange = (e) => { 
        if (e.target.value) {
          setFqdnList(e.target.value);
          setOutput(parseConfig2(e.target.value, nextHop));
        } else {
          setOutput("");
          setFqdnList("");
          setNextHop("");
        }
      }

      var nextHopChange = (e) => {
        if (e.target.value != null) {
          setNextHop(e.target.value);
        } else {
          setNextHop("");
        } 
      }
    
    return (
        <div className="appContainer">
        <div>
          <h1 className="appTitle">Static Route Generator Tool</h1> <br />
          <p className="subTitle">This tool will generate the configuration input required to create new static routes. Input a list of IP's on the left text area with CIDR and the right will auto-populate with the template. Each IP must be on a line of its own. Please make sure you do not include an extra white space or line in the data.</p>
          <br />
          <Button variant="info" className="navLinks" onClick={handleShow}>
            <li>IP Obj Generator</li>
          </Button>
        </div>
  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Static Route Generator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-6">
                <label>IP Input</label>
                <input placeholder="Input Next Hop IP Here" value={nextHop} onChange={nextHopChange}></input>
                <textarea className="textFields" value={fqdnList} onChange={handleChange}></textarea>
              </div>
              <div className="col-6">
                <label>Static Route Config</label>
                <textarea className="textFields" value={output}></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info" disabled>
              Copy to Clipboard
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="backButton">
            <Button variant="secondary" className="navLinks" disabled>
              <li>Settings</li>
            </Button>
          <Link to="/vendor/cisco">
            <Button className="navLinks" variant="info">
              <li>Back</li>
            </Button>
          </Link>
        </div>
      </div>
    )

}

export default FortigateIPObjects;