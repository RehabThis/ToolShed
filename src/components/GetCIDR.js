import React from 'react'

function GetCIDR(list) {
        var cidrInfo = list.split("/");
        var mask2 = "0";
        switch (cidrInfo[1]) {
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

export default GetCIDR;
