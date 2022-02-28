import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
//import ModalNew from './ModalNew'

function parseConfig2(fqdnArray) {
  var fqdnList = fqdnArray.split("\n");
//  var pushFQDN = ["config webfilter urlfilter\nedit 2\nset name \"Environment_URL_Filter\"\nconfig entries\n"];
  return fqdnList.map((e) => {
    return "edit 0\nset url \"" + e + "\"\nset type wildcard\nset action allow\nnext\n";
  }).join("");
  //return fqdnList.join("block");
}


function ToolFQDN() {
    var [showModal, setShow] = useState(false);
    var handleClose = () => setShow(false);
    var handleShow = () => setShow(true);

    var [fqdnList, setFqdnList] = useState("");
    var handleChange = e => {
        setFqdnList(e.target.value)
    }

// Test Update

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
                <textarea className="textFields" defaultValue={"config webfilter urlfilter\nedit 2\nset name \"Environment_URL_Filter\"\nconfig entries\n" + parseConfig2(fqdnList)}></textarea>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Copy to Clipboard
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default ToolFQDN


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