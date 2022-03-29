import React, {useState} from 'react'
import GetCIDR from './GetCIDR'
import {Button, Modal} from 'react-bootstrap'
import ClipboardCopy from './ClipboardCopy'
import { Link } from 'react-router-dom'



// function parseConfig2(fqdnArray) {
//     var pushOutputFirewall = [];
//     var pushNormalObjects = [];
//     var fqdnList = fqdnArray.split("\n")
//     var ret = fqdnList
//       .map((e) => {
//         var cidrInfo = fqdnList[i].split("/");
//         var mask2 = getCIDR(fqdnList[i]);
//         var subnet = fqdnList[i].split("/");
//         var grpNormal = "\"" + subnet[0] + "-CustNet\"";
//         var t = "config firewall address\nedit \"" + subnet[0] + "-CustNet\"\nset subnet " + subnet[0] + " " + mask2 + "\nset comment \"" + subnet[0] + "-CustNet\"\nnext\nend\n";
//         pushOutputFirewallGroup.splice(1, 0, grp);
//         pushNormalObjects.push(t);
//         pushOutputFirewallGroup2.splice(1, 0, grpNormal);
//       }).join("")
//       return 'config webfilter urlfilter\nedit 2\nset name "Environment_URL_Filter"\nconfig entries\n' + ret + "end";  
//   }      
  
//   pushOutputFirewallGroup2.join(" ");
//   pushNormalObjects.push(yyy);


function FortigateIPObjects() {
    var [showModal, setShow] = useState(true)
    var handleClose = () => setShow(false)
    var handleShow = () => setShow(true)
    var handleShowSettings = () => setShow(true)
    var parseConfig2;
  
  
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

export default FortigateIPObjects



// function getMask(ip) {
//     var cidrInfo = ip.split("/");
//     var mask2 = "0";
//     switch (cidrInfo[1]) {
//         case "16":
//             mask2 = "255.255.0.0";
//             break;
//         case "17":
//             mask2 = "255.255.128.0";
//             break;
//         case "18":
//             mask2 = "255.255.192.0";
//             break;
//         case "19":
//             mask2 = "255.255.224.0";
//             break;
//         case "20":
//             mask2 = "255.255.240.0";
//             break;
//         case "21":
//             mask2 = "255.255.248.0";
//             break;
//         case "22":
//             mask2 = "255.255.252.0";
//             break;
//         case "23":
//             mask2 = "255.255.254.0";
//             break;
//         case "24":
//             mask2 = "255.255.255.0";
//             break;
//         case "25":
//             mask2 = "255.255.255.128";
//             break;
//         case "26":
//             mask2 = "255.255.255.192";
//             break;
//         case "27":
//             mask2 = "255.255.255.224";
//             break;
//         case "28":
//             mask2 = "255.255.255.240";
//             break;
//         case "29":
//             mask2 = "255.255.255.248";
//             break;
//         case "30":
//             mask2 = "255.255.255.252";
//             break;
//         case "31":
//             mask2 = "255.255.255.254";
//             break;
//         case "32":
//             mask2 = "255.255.255.255";
//             break;
//         default:
//             mask2 = "255.255.255.255"
//             break;
//     }
//     return mask2;
// }

// function parseConfig() {
//     var arrayOfLines = document.getElementById("firewallObjectInput").value.split('\n');
//     var pushOutputFirewall = [];
//     var pushNormalObjects = [];
//     var pushOutputFirewallGroup2 = ["config firewall addrgrp\nedit \"CustList\"\nappend member", "\nend"];
//     fscNextHop = 24 + (1 * 2);
//     fscNextHopLoop = 24 + (1 * 2);
//     for (i = 0; i < arrayOfLines.length; i++) {
//         var cidrInfo = arrayOfLines[i].split("/");
//         var mask2 = getMask(arrayOfLines[i]);
//         var subnet = arrayOfLines[i].split("/");
//         var grpNormal = "\"" + subnet[0] + "-VDOM-" + fscNum + "_CustNet\"";
//         var t = "config firewall address\nedit \"" + subnet[0] + "-VDOM-" + fscNum + "_CustNet\"\nset subnet " + subnet[0] + " " + mask2 + "\nset comment \"" + subnet[0] + "-VDOM-" + fscNum + "_CustNet\"\nnext\nend\n";
//         pushOutputFirewall.push(y);
//         pushOutputFirewallGroup.splice(1, 0, grp);
//         pushNormalObjects.push(t);
//         pushOutputFirewallGroup2.splice(1, 0, grpNormal);
//     }
//     var yy = pushOutputFirewallGroup.join(" ");
//     pushOutputFirewall.push(yy);
//     var yyy = pushOutputFirewallGroup2.join(" ");
//     pushNormalObjects.push(yyy);

