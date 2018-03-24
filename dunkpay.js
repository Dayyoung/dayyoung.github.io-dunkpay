 /* 
 DunkPay JavaScript Library 
 https://www.DunkPay.com
 
 Copyright 2018, Greg You
 Dual licensed under the MIT or GPL Version 2 licenses.
 Visit https://www.DunkPay.com/license 
 */
var Context;

var Dunkpay = function (mode) {
  this.mode = mode
  Context = this
}

Dunkpay.prototype.shot = function(callback)
{
  if(callback)
  {
    this.callback = callback
  }
  // for (var k in this){
  //     if (this.hasOwnProperty(k)) {
  //          console.log(k + " : " + this[k]);
  //     }
  }

  this.ownerAddress = this.address // migration.

  delete this.address

  var PREFIX = "https://www.bitcoinyo.com/"
  
  if(this.mode == "testnet")
    PREFIX = "http://test.bitcoinyo.com/"

  delete this.mode

  window.open(PREFIX+this.type+jsonToQueryString(this), "BitcoinYo", "width=500, height=700, toolbar=no, menubar=no, scrollbars=no, resizable=yes" );    

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
  //alert(event.data);
  //..do something..
  if(Context.callback)
  {
  try {
    var jsonData = JSON.parse(event.data)
    Context.callback(undefined , jsonData)     
    }
    catch(err) {      
    Context.callback(err , undefined)     
    }
  }
}