import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
import ClipboardCopy from './ClipboardCopy'
import { Link } from 'react-router-dom'
import GetCIDR from './GetCIDR'




function getMask(list) {
    var x = list.split('/');  
      var mask2 = "0";
      switch (x[1]) {
        case "8":
          mask2 = "255.0.0.0";
          break;
        case "9":
          mask2 = "255.128.0.0";
          break;
        case "10":
          mask2 = "255.192.0.0";
          break;
          case "11":
            mask2 = "255.224.0.0";
            break;
          case "12":
            mask2 = "255.240.0.0";
            break;
          case "13":
            mask2 = "255.248.0.0";
            break;
          case "14":
            mask2 = "255.252.0.0";
            break;
          case "15":
            mask2 = "255.254.0.0";
              break;
          case "16":
              mask2 = "255.255.0.0";
              break;
          case "17":
              mask2 = "255.255.128.0";
              break;
          case "18":
              mask2 = "255.255.192.0";
              break;
          case "19":
              mask2 = "255.255.224.0";
              break;
          case "20":
              mask2 = "255.255.240.0";
              break;
          case "21":
              mask2 = "255.255.248.0";
              break;
          case "22":
              mask2 = "255.255.252.0";
              break;
          case "23":
              mask2 = "255.255.254.0";
              break;
          case "24":
              mask2 = "255.255.255.0";
              break;
          case "25":
              mask2 = "255.255.255.128";
              break;
          case "26":
              mask2 = "255.255.255.192";
              break;
          case "27":
              mask2 = "255.255.255.224";
              break;
          case "28":
              mask2 = "255.255.255.240";
              break;
          case "29":
              mask2 = "255.255.255.248";
              break;
          case "30":
              mask2 = "255.255.255.252";
              break;
          case "31":
              mask2 = "255.255.255.254";
              break;
          case "32":
              mask2 = "255.255.255.255";
              break;
          default:
              mask2 = "255.255.255.255"
              break;
      }
      return mask2;
  }
  
function parseConfig2(array) {
    var y = array.split("\n");
    var z = [];
    var h = y.map((e) => {
      var cidrInfo = e.split("/");
      var mask2 = getMask(cidrInfo[e]);
      var subnet = e.split("/");
      var t = "config firewall address\nedit \"" + subnet[0] + "-CustNet\"\nset subnet " + subnet[0] + " " + mask2 + "\nset comment \"" + subnet[0] + "-CustNet\"\nnext\nend\n";
      z.push(t);
      console.log(t);
      console.log(e);
      return z.push(t);
    })
    console.log(h + "this was h");
    console.log(z + "this was z");
    return h;
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