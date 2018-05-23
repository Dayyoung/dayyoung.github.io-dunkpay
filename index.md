# DunkPay.com

DunkPay.com is the service for users who want to pay with cryptocurrency.
Create a link, copy it and sell what you want.
As soon as transaction is completed, confirmation process starts immediately
Transactions are guaranteed by blockchain method.

"Play ball. Make your dream."

# INSTALLATION
Include script on your site.

```
<script type="text/javascript" src="https://www.dunkpay.com/dunkpay.js"></script>
```

# USAGE

For sell ​​with bitcoin

```
var dunkpay = new Dunkpay()
dunkpay.type = "BTC"
dunkpay.address = "1Lc1jhXdsB7t1XpTdNbrchnxKQide9tMia"
dunkpay.amount = 0.001 // 0.001 BTC

dunkpay.shot()
```

# ADVANCE USAGE

For sell ​​in dollars

```
var dunkpay = new Dunkpay()
dunkpay.type = "BCH"
dunkpay.address = "19zgnCTYzq1eww1JpGCi5ZSvFPiCC7fVHa"
dunkpay.itemName = "Bascketball🏀"
dunkpay.currency = "USD" 
dunkpay.amount = 2 // 2dollars
dunkpay.invoiceMail = "dunkpay.com@gmail.com"

dunkpay.shot(function(err,result){
 if(err)
 {
  alert("Something is wrong." + err)
 } 
 alert("Payment is success." + result)		
})
```

For sell with customize option

```
var dunkpay = new Dunkpay()
dunkpay.type = "ETH"
dunkpay.address = "0x41C87EDB6AB6C719456EACC992F4C2FE278FF8D4"
dunkpay.itemName = "겔럭시9"
dunkpay.amount = 0.1 // 0.1 ETH  
dunkpay.customLogo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
dunkpay.customColor="FF0000" // RED
dunkpay.selfClose = true

dunkpay.shot(function(err,result){
 if(err)
 {
  alert("Something is wrong." + err)
 } 
 alert("Payment is success." + result)			
})
```

Get url link for sell

```
var dunkpay = new Dunkpay()
dunkpay.type = "XRP"
dunkpay.itemName = "🧚🧚🧚🧚🧚"
dunkpay.address = "rPTTVD6uHjZ1daPGSFg4Bfgksfd3sjQ45k"
dunkpay.amount = 0.01 // 0.01 XRP  

var link = dunkpay.getLink()
alert(link)
```

# OPTION

**type (Required*)**
- `type` - The type of cryptocurrency. We support BTC/BCH/ETH/XRP. 

**address (Required*)**
- `address` - Owned by you. When the coin is deposited, it will be sent to this address. 

**amount (Required*)**
- `amount` - Price that you want to get. The default unit of amount is BTC/BCH/ETH. 

**currency**
- `currency` - The unit of currency that you want to sell price. [For support currency see.](https://blockchain.info/api/exchange_rates_api)

**itemName**
- `itemName` - It will be described on your product. It supports UTF-8 encoded character.

**invoiceMail**
- `invoiceMail` - InvoiceMail will send it to you when your transaction is completed. If you cannot receive any mail , please check you spam mailbox. 

**redirectUrl**
- `redirectUrl` - It is url destination to move page when your transaction is completed. 

**notificationUrl**
- `notificationUrl` - It is place where your server can receive request when your transaction is completed. Whole query string will be return. 

**customLogo**
- `customLogo` - It is a customized logo. Allow external image URL. 

**customColor**
- `customColor` - It is a customized color for invoice design. Allow Hex color code. 

**customUrl**
- `customUrl` - It is the URL that will be moved when the logo is clicked. 

**getLink()**
- `getLink()` - Create a shortcut link for selling.

**selfClose**
- `selfClose` - After the transaction is completed, the pop-up closes itself. 


# TESTNET
Initialize `new dunkpay('testnet')` for testing.

Cryptocurrency | Support 
------------ | -------------
BTC | TESTNET [(https://test-insight.bitpay.com)](https://test-insight.bitpay.com)
BCH | TESTNET [(https://test-bch-insight.bitpay.com)](https://test-bch-insight.bitpay.com)
ETH | ROPSTEN [(https://ropsten.etherscan.io)](https://ropsten.etherscan.io)
XRP | TESTNET [(https://ripple.com/build/xrp-test-net)](https://ripple.com/build/xrp-test-net)

# TESTING
 [Click here for testing : /docs/test.html](/docs/test.html)

 [Click here for contacting : dryudryu@gmail.com](mailto:dryudryu@gmail.com)

# LICENSE
[MPL-2.0](https://www.mozilla.org/MPL/2.0/)
