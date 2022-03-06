import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

function handleCopy(textArea) {
  navigator.clipboard.writeText(textArea)
}

function FortigateFWRule() {
  /* State Controls */
  var [showModal, setShow] = useState(true)
  var handleClose = () => setShow(false)
  var handleShow = () => setShow(true)
  var handleShowSettings = () => setShow(true)

  var [state, setState] = useState({
    portCreationReq: "",
    vdomTotal: "",
    isShown: "",
    isHidden: "",
  })

  var handleChange = (e) => {
    var value = e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }
  /* End State Controls */

  return (
    <div id="fortigateFWrule" className="appContainer">
      <div>
        <h1 className="appTitle">FW Rule Generator</h1> <br />
        <p className="subTitle">This tool will generate the configuration necessary for Fortigate Firewall Policy creation. This will create a policy based on the variables provided in "Settings". </p>
        <br />
        <Button variant="info" className="navLinks" onClick={handleShow}>
          <li>FW Rule Gen</li>
        </Button>
        <Link to="/vendor/fortigate/fw-rule-gen/settings">
          <Button variant="info" className="navLinks" onClick={handleShowSettings}>
            <li>Settings</li>
          </Button>
        </Link>
      </div>

      <Modal id="fwRuleModal" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FW Rule Generator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <form id="fwRuleForm">
              <label>
                Configuration Settings <p></p>
              </label>
              <label name="vdomTotal">
                Please advise the total number of VDOMs required for the new policy.<input name="vdomTotal" onChange={handleChange} value={state.vdomTotal} type="text" placeholder="Example: 35"></input>
              </label>
              <label name="vdomName">
                VDOM Name:<input name="vdomName" type="text" placeholder="Example: Customer-VDOM-355"></input>
              </label>
              <label name="fwRuleName">
                Firewall Rule Name:<input name="fwRuleName" type="text" placeholder="Example: Windows-Update-Service"></input>
              </label>
              <label name="allowOrDeny">
                Please advise if this is to allow or deny traffic.
                <select name="allowOrDeny">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="allowRule">Allow</option>
                  <option value="denyRule">Deny</option>
                </select>
              </label>
              <label name="portCreationReq">
                Do you require a new custom service port or port group?
                <select name="portCreationReq" value={state.portCreationReq} onChange={handleChange}>
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label name="protocolList" className={state.portCreationReq ? "isShown" : "isHidden"} onChange={handleChange}>
                TCP, UDP, or Both?
                <select name="protocolList" className={state.portCreationReq ? "isShown" : "isHidden"} onChange={handleChange}>
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="TCP">TCP</option>
                  <option value="UDP">UDP</option>
                  <option value="Both">Both</option>
                  <option value="Both">Mixed</option>
                </select>
              </label>
              <label name="addServiceGroup">
                Would you like these ports to be added to a Service Group or as one individual service?
                <select name="addServiceGroup">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="srvGrpYes">Group</option>
                  <option value="srvGrpNo">Individual</option>
                </select>
              </label>
              <label name="portsList">
                Comma Separated Ports, Hyphen for Range:<input name="portsList" type="text" placeholder="Example: 1550, 1650, 1300-1301, 20"></input>
              </label>
              <label name="existingPorts">
                Please provide the name of the service group or port name you want to use:<input name="existingPorts" type="text" placeholder="Example: WSUS-Ports"></input>
              </label>
              <label name="srcIntfName">
                What is the Source Interface Name? (srcintf):<input name="srcIntfName" type="text" placeholder="Example: Inside_Vlan"></input>
              </label>
              <label name="dstIntfName">
                What is the Destination Interface Name? (dstintf):<input name="dstIntfName" type="text" placeholder="Example: Outside_Vlan"></input>
              </label>
              <label name="newSrcObjReq">
                Do the source address IP objects exist currently?
                <select name="newSrcObjReq">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="srcYes">Yes</option>
                  <option value="srcNo">No</option>
                </select>
              </label>
              <label name="newSrcObjList">
                Please provide the name of the existing Source IP Object(s), Object-Groups (one per line w/quotes around them)?
                <textarea className="textFields" name="newSrcObjList"></textarea>
              </label>
              <label name="newSrcObjGrpReq">
                Would you like to create a new object group for the Source IPs?
                <select name="newSrcObjGrpReq">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label name="newDstObjReq">
                Do the destination address IP objects exist currently?
                <select name="newDstObjReq">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label name="newDestIpList">
                Please provide the name of the existing Destination IP Object(s), Object-Groups (one per line w/quotes around them)?
                <textarea className="textFields" name="newDestIpList"></textarea>
              </label>
              <label name="newDstObjGrpReq">
                Would you like to create a new object group for the Destination IPs?
                <select name="newDstObjGrpReq">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label name="ruleEnabled">
                Would you like the rule enabled upon entry?
                <select name="ruleEnabled">
                  <option value="defaultSelect">-- Please Choose</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label name="ruleDescription">
                Please provide a description of the rule under 28 characters:<input name="ruleDescription" type="text" placeholder="Example: WSUS Inside_Vlan to Outside_Vlan"></input>
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleCopy("")}>
            Copy to Clipboard
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="backButton">
        <Link to="/vendor/fortigate">
          <Button className="navLinks" variant="info">
            <li>Back</li>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FortigateFWRule

/* 

Features To Be Created:

1. Create "Settings"
    Create a settings button that allows the user to provide input that will reflect in the config output.

2. Create a slider to push to multiple VDOMs

3. 











===== ORIGINAL CODE =====
            <div class="col_2">
                <h2>Firewall Rule Skeleton</h2>
                <button onclick="parseConfigFW()">Create FW Rule</button>
                <textarea id="fscRuleSkeleton"></textarea>
            </div>


        function parseConfigFW() {

            if (rulePortTCPUDP == "TCP") {
                newPort = "\nconfig firewall service custom\nedit \"" + portName + "\"\nset comment \"" + portName + "\"\nset tcp-portrange " + rulePortRange + "\nend";
            } else if (rulePortTCPUDP == "UDP") {
                newPort = "\nconfig firewall service custom\nedit \"" + portName + "\"\nset comment \"" + portName + "\"\nset udp-portrange " + rulePortRange + "\nend";
            } else if (rulePortTCPUDP == "BOTH") {
                newPort = "\nconfig firewall service custom\nedit \"" + portName + "\"\nset comment \"" + portName + "\"\nset udp-portrange " + rulePortRange + "\nset tcp-portrange " + rulePortRange + "\nend";
            } else {
                newPort = prompt("Please enter TCP or UDP in caps only");
            }
            for (a = 1; a < 37; a++) {
                fscNumLoop = a;
                var fwRule = "edit vdom-000" + (fscNumLoop < 10 ? "0" : "") + fscNumLoop + newPort + "\nconfig firewall policy\n";
                fwRule = fwRule + "edit 0\nset name \"" + ruleName + "\"\nset srcintf \"VDOM-INT" + fscNumLoop + "_01\"\nset dstintf \"A_Zone\" \"B_Zone\"\nset srcaddr \"all\"\nset dstaddr \"all-2\"\nset action accept\nset schedule \"always\"\nset service \"" + portName + "\"\nset utm-status enable\nset status enable\nset comments \"" + ruleName + "\"\nend";
                console.log("fwRule = " + fwRule);
                pushOutputFWSkeleton.push(fwRule);
            }
            document.getElementById("fscRuleSkeleton").value = pushOutputFWSkeleton.join("\nnext\n");







*/
