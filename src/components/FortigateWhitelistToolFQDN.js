import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
//import ModalNew from './ModalNew'

function parseConfig2(fqdnArray) {
  var fqdnList = fqdnArray.split("\n");
//  var pushFQDN = ["config webfilter urlfilter\nedit 2\nset name \"Environment_URL_Filter\"\nconfig entries\n"];
  var ret = fqdnList.map((e) => {
    return "edit 0\nset url \"" + e + "\"\nset type wildcard\nset action allow\nnext\n";
  }).join("");
  return "config webfilter urlfilter\nedit 2\nset name \"Environment_URL_Filter\"\nconfig entries\n" + ret;
  //return fqdnList.join("block");
}

function handleCopy(handleOutput) {
  navigator.clipboard.writeText(handleOutput);
  console.log(handleOutput);
}

function FortigateWhitelistToolFQDN() {
    var [showModal, setShow] = useState(true);
    var handleClose = () => setShow(false);
    var handleShow = () => setShow(true);

    var [fqdnList, setFqdnList] = useState("");
    var [output, setOutput] = useState("");
    var handleChange = e => {
        setFqdnList(e.target.value);
        setOutput(parseConfig2(fqdnList));
    } 


    var handleOutput = e => {
      setOutput(parseConfig2(fqdnList));
    }

    return (
        <div className="appContainer">
          
          <h1 className="appTitle">FortiWhiteList Config Gen</h1>
        <p className="subTitle">This tool will generate the configuration input required to apply a new URL to an existing Fortigate Content Filter. Input a list of FQDN's on the left text area and the right will auto-populate with the template. You must drop down a line after each FQDN including the last one.</p>
         
        <Button variant="info" className="navLinks" onClick={handleShow}><li>Whitelist</li></Button>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Whitelist Config Generator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-6">
                <label>FQDN Input</label>
                <textarea className="textFields" value={fqdnList} onChange={handleChange}></textarea>
                </div>
                <div className="col-6">
                <label>Configuration Output</label>
                <textarea className="textFields" value={output} onChange={handleOutput}></textarea>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button> 
          <Button variant="info" onClick={handleCopy}>
            Copy to Clipboard 
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="backButton">
      <Link to="/vendor/fortigate"><Button className="navLinks" variant="info"><li>Back</li></Button></Link>
      </div>
        </div>
    )
}

export default FortigateWhitelistToolFQDN


/* 

All document.getElementById's 






*/ //    var fqdnList = document.getElementById("configInput").value.split("\n");
//    var pushFQDN = ["config webfilter urlfilter\nedit 2\nset name \"Environment_URL_Filter\"\nconfig entries\n"];
//    for (i = 0; i < fqdnList.length; i++) {
//      var y = "edit 0\nset url \"" + fqdnList[i] + "\"\nset type wildcard\nset action allow\nnext\n";                                                  
//        pushFQDN.push(y);
//    }
//    document.getElementById("configOutput").value = pushFQDN.join("");

//var fqdnInput = configInput.value;

//const [value, setValue] = useState(props.name);

//const handleChange = (event) => {
//    setValue(event.target.value);
//};




/*

Flags variable bool
  return if bool = true then apply X code
  state tracking on of the form fields


*/