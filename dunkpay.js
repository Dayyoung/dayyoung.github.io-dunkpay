 /* 
 DunkPay JavaScript Library 
 https://www.DunkPay.com
 
 Copyright 2018, Greg You
 Dual licensed under the MIT or GPL Version 2 licenses.
 Visit https://www.DunkPay.com/license 
 */

var PREFIX = "https://www.dunkpay.com/"
var CONTEXT;

var Dunkpay = function (mode) {
  
  if(!mode)
    mode = "livenet"

  this.mode = mode
  CONTEXT = this
}

Dunkpay.prototype.shot = function(callback)
{
  if(callback)
  {
    this.callback = callback
  }

  var PREFIX = "https://www.dunkpay.com/"

  var popup = window.open(PREFIX+this.type+jsonToQueryString(this), "DunkPay.com", "width=500, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );    

  popup.focus()
}

Dunkpay.prototype.getLink = function()
{ 
  return PREFIX+this.type+jsonToQueryString(this)
}

function jsonToQueryString(json) {
    return "?"+
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
try {
    var jsonData = JSON.parse(event.data)
    if(jsonData.transactionId)
    {
      CONTEXT.callback(undefined , jsonData)
    }
  }
  catch(err) {          
  }
}