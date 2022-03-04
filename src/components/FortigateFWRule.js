import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

function handleCopy(textArea) {
  navigator.clipboard.writeText(textArea)
}

function FortigateFWRule() {
  var [showModal, setShow] = useState(true)
  var handleClose = () => setShow(false)
  var handleShow = () => setShow(true)
  var handleShowSettings = () => setShow(true)

  /* Logic Variables */
  var vdomTotal
  var vdomNames = []

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
              <label>Configuration Settings</label>
              {/* <textarea className="textFields" value={output} onChange={handleOutput}></textarea> */}
              {/* 
                  var pushOutputFWSkeleton = [];
                  var ruleName = prompt("What is the Firewall Rule Name?");
                  var rulePortTCPUDP = prompt("Is it TCP or UDP or BOTH? Answer in caps");
                  var portName = prompt("What is the name of the port object? eg TrendMicroInbound");
                  var rulePortRange = prompt("What is the range? eg 15000-15010 or spaced 1550 1650 1300-1301 20");
                  var newPort; 
                */}
              <label>
                Please advise the total number of VDOMs required for the new policy.<input type="text" placeholder="Example: 35"></input>
              </label>
              <label>
                VDOM Name:<input type="text" placeholder="Example: Customer-VDOM-355"></input>
              </label>
              <label>
                Firewall Rule Name:<input type="text" placeholder="Example: Windows-Update-Service"></input>
              </label>
              <label>
                Please advise if this is to allow or deny traffic.
                <select>
                  <option value="allowRule">Allow</option>
                  <option value="denyRule">Deny</option>
                </select>
              </label>
              <label>
                TCP, UDP, or Both?
                <select>
                  <option value="TCP">TCP</option>
                  <option value="UDP">UDP</option>
                  <option value="Both">Both</option>
                  <option value="Both">Mixed</option>
                </select>
              </label>
              <label>
                Would you like these to be added to a Service Group?
                <select>
                  <option value="srvGrpYes">Yes</option>
                  <option value="srvGrpNo">No</option>
                </select>
              </label>
              <label>
                Comma Separated Ports, Hyphen for Range:<input type="text" placeholder="Example: 1550, 1650, 1300-1301, 20"></input>
              </label>
              <label>
                What is the Source Interface Name? (srcintf):<input type="text" placeholder="Example: Inside_Vlan"></input>
              </label>
              <label>
                What is the Destination Interface Name? (dstintf):<input type="text" placeholder="Example: Outside_Vlan"></input>
              </label>
              <label>
                Do the source address IP objects exist currently?
                <select>
                  <option value="srcYes">Yes</option>
                  <option value="srcNo">No</option>
                </select>
              </label>
              <label>
                Please provide the name of the existing Source IP Object(s), Object-Groups (one per line w/quotes around them)?
                <textarea className="textFields"></textarea>
              </label>
              <label>
                Would you like to create a new object group for the Source IPs?
                <select>
                  <option value="srcAddYes">Yes</option>
                  <option value="srcAddNo">No</option>
                </select>
              </label>
              <label>
                Do the destination address IP objects exist currently?
                <select>
                  <option value="dstYes">Yes</option>
                  <option value="dstNo">No</option>
                </select>
              </label>
              <label>
                Please provide the name of the existing Destination IP Object(s), Object-Groups (one per line w/quotes around them)?
                <textarea className="textFields"></textarea>
              </label>
              <label>
                Would you like to create a new object group for the Destination IPs?
                <select>
                  <option value="dstAddYes">Yes</option>
                  <option value="dstAddNo">No</option>
                </select>
              </label>
              <label>
                Would you like the rule enabled upon entry?
                <select>
                  <option value="ruleEnabled">Yes</option>
                  <option value="ruleDisabled">No</option>
                </select>
              </label>
              <label>
                Please provide a description of the rule under 28 characters:<input type="text" placeholder="Example: WSUS Inside_Vlan to Outside_Vlan"></input>
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
