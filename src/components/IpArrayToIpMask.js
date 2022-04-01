import React from 'react'
import GetMask from './GetMask'

function IpArrayToIpMask(array) {
    var y = array.split("\n");
    var z = [];
    var h = y.map((e) => {
      var mask2 = GetMask(e);
      var subnet = e.split("/");
      z.push(mask2 + " " + subnet[0])
      return z;
    })
    return z.join("");
    }

export default IpArrayToIpMask;