import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
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
    var [showModal, setShow] = useState(false);
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
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          <Button variant="primary" onClick={handleCopy}>
            Copy to Clipboard 
          </Button>
        </Modal.Footer>
      </Modal>
        </>
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