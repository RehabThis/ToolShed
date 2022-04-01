import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import ClipboardCopy from './ClipboardCopy'
import { Link } from 'react-router-dom'
import GetMask from './GetMask'


function parseConfig2(array, nextHop, vrfName, tagName) {
    var y = array.split("\n");
    var z = [];
    var h = y.map((e) => {
      var mask2 = GetMask(e);
      var subnet = e.split("/");

      var t = "ip route " + subnet[0] + " " + mask2 + " " + nextHop + "\n";
      var y = "ip route vrf " + vrfName + " " + subnet[0] + " " + mask2 + " " + nextHop + "\n";
      var x =  "ip route vrf " + vrfName + " " + subnet[0] + " " + mask2 + " " + nextHop + " tag " + tagName + "\n";
      if (vrfName != "" && tagName != "" ) {
        return x;
      } else if (vrfName != "") {
        return y;
      } else {
        return t;
      }
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
    var [vrfName, setVrfName] = useState("")
    var [tagName, setTagName] = useState("")

    var handleChange = (e) => { 
        if (e.target.value) {
          setFqdnList(e.target.value);
          setOutput(parseConfig2(e.target.value, nextHop, vrfName, tagName));
        } else {
          setOutput("");
          setFqdnList("");
        }
      }

      var nextHopChange = (e) => {
        if (e.target.value != null) {
          setNextHop(e.target.value);
        } else {
          setNextHop("");
        } 
      }
      var vrfNameChange = (e) => {
        if (e.target.value != null) {
          setVrfName(e.target.value);
        } else {
          setVrfName("");
        } 
      }
      var tagNameChange = (e) => {
        if (e.target.value != null) {
          setTagName(e.target.value);
        } else {
          setTagName("");
        } 
      }

      var handleClear = (e) => {
        setOutput("");
      }

    return (
        <div className="appContainer">
        <div>
          <h1 className="appTitle">Static Route Generator Tool</h1> <br />
          <p className="subTitle">This tool will generate the configuration input required to create new static routes. Input a list of IP's on the left text area with CIDR and the right will auto-populate with the template. Each IP must be on a line of its own. Please make sure you do not include an extra white space or line in the data.</p>
          <br />
          <Button variant="info" className="navLinks" onClick={handleShow}>
            <li>Static Route Generator</li>
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
                <textarea className="textFields" value={fqdnList} onChange={handleChange}></textarea>
                <div style={{marginTop: "1%"}}>
                <label style={{marginRight: "1%"}} >Next Hop IP Input</label> 
                <input style={{padding: ".5%", maxWidth: "20%"}} placeholder="X.X.X.X" value={nextHop} onChange={nextHopChange}></input>
                </div>
                <div style={{marginTop: "1%"}}>
                <label style={{marginRight: "1%"}}>VRF Input</label> 
                <input style={{padding: ".5%", maxWidth: "20%"}} placeholder="VRF Name" value={vrfName} onChange={vrfNameChange}></input>
                </div>
                <div style={{marginTop: "1%"}}>
                <label style={{marginRight: "1%"}}>Route Tag</label> 
                <input style={{padding: ".5%", maxWidth: "20%"}} placeholder="Tag Name" value={tagName} onChange={tagNameChange}></input>
                </div>
                
              </div>
              <div className="col-6">
                <label>Static Route Config</label>
                <textarea className="textFields" value={output}></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="info" onClick={handleClear}>
              Clear Output
            </Button>
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