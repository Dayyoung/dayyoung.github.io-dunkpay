# DunkPay.com

DunkPay.com is the service for users who want to pay with cryptocurrency.
Create a link, copy it and sell what you want.
As soon as transaction is completed, confirmation process starts immediately
Transactions are guaranteed by blockchain method.

"Play ball. Make your dream."

# INSTALLATION
Include script on your site.

```javascript
<script type="text/javascript" src="https://www.dunkpay.com/dunkpay.js"></script>
```

# USAGE

For sell ​​with bitcoin

```javascript
var dunkpay = new Dunkpay()
dunkpay.type = "BTC"
dunkpay.address = "1Lc1jhXdsB7t1XpTdNbrchnxKQide9tMia"
dunkpay.amount = 0.001 

dunkpay.shot()
```

# ADVANCE USAGE

For sell ​​in dollars

```javascript
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
  console.log("Something was wrong." + err)
 } 
 console.log("Payment was success." + result)		
})
```

For sell with escrow

```javascript
var dunkpay = new Dunkpay()
dunkpay.type = "ETH"
dunkpay.address = "0x41C87EDB6AB6C719456EACC992F4C2FE278FF8D4"
dunkpay.itemName = "겔럭시9"
dunkpay.amount = 10000 // 10000원  
dunkpay.currency = "KRW" 
dunkpay.escrow = true

dunkpay.shot(function(err,result){
 if(err)
 {
  console.log("Something was wrong." + err)
 } 
 console.log("Payment was success." + result)			
})
```

# OPTION

**type (Required*)**
- `type` - The type of cryptocurrency. We support BTC/BCH/ETH. 

**address (Required*)**
- `address` - Owned by you. When the coin is deposited, it will be sent to this address. 

**amount (Required*)**
- `amount` - Price that you want to get. The default unit of amount is BTC/BCH/ETH. 

**currency**
- `currency` - The unit of currency that you want to sell price. [For support currency see.](https://blockchain.info/api/exchange_rates_api)

**escrow**
- `escrow` - An option to enable your escrow payment. It completes when your buyer confirms a transaction. 

**itemName**
- `itemName` - It will be described on your product. It supports UTF-8 encoded character.

**invoiceMail**
- `invoiceMail` - InvoiceMail will send it to you when your transaction is completed. If you cannot receive any mail , please check you spam mailbox. 

**redirectUrl**
- `redirectUrl` - It is url destination to move page when your transaction is completed. 

**notificationUrl**
- `notificationUrl` - It is place where your server can receive request when your transaction is completed. Whole query string will be return. 

# TESTNET
Initialize `new dunkpay('testnet')` for testing.

Cryptocurrency | Support 
------------ | -------------
BTC | TESTNET [(https://test-insight.bitpay.com)](https://test-insight.bitpay.com)
BCH | TESTNET [(https://tbch.blockdozer.com)](https://tbch.blockdozer.com)
ETH | ROPSTEN [(https://ropsten.etherscan.io)](https://ropsten.etherscan.io)

# TESTING
 [/docs/test.html](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Dayyoung/dunkpay/master/docs/test.html)

# LICENSE
[MPL-2.0](https://www.mozilla.org/MPL/2.0/)
