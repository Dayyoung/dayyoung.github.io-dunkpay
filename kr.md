---
layout: kr
---

# DunkPay.com

DunkPay.com은 암호화폐로 상품판매를 원하는 사용자를 위한 서비스입니다.
단순히 링크를 만들고, 판매하시면 됩니다.
구매자가 암호화폐를 입금하면 즉시 확인할 수 있습니다.
거래내용은 블록체인에서 보장해 줍니다.

"플레이 볼! 꿈을 이루세요."

# INSTALLATION
당신의 웹사이트에 <스크립트>를 참조하세요.

```javascript
<script type="text/javascript" src="https://www.dunkpay.com/dunkpay.js"></script>
```

# USAGE

비트코인을 이용한 판매 예

```javascript
var dunkpay = new Dunkpay()
dunkpay.type = "BTC"
dunkpay.address = "1Lc1jhXdsB7t1XpTdNbrchnxKQide9tMia"
dunkpay.amount = 0.001 

dunkpay.shot()
```

# ADVANCE USAGE

비트코인 캐시를 이용한 달러통화 판매 예

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

이더리움을 이용한 에스크로 판매 예

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

**type (필수값*)**
- `type` - TYPE 암호화폐 종류를 선택합니다. 현재 BTC/BCH/ETH 를 지원합니다.  

**address (필수값*)**
- `address` - 소유하고 계신 지갑주소 입니다. 비트코인 송금이 될 예정입니다. 거래 진행중에는 변경할 수 없으니 유의하세요.

**amount (필수값*)**
- `amount` - 판매를 원하는 화폐의 단위를 설정합니다. 현재 BTC/BCH/ETH 단위를 지원합니다. 

**currency**
- `currency` - 판매를 원하는 화폐의 종류를 설정합니다. [지원화폐 보기.](https://blockchain.info/api/exchange_rates_api)

**escrow**
- `escrow` - 에스크로를 활성화 하는 옵션입니다. 구매자의 최종승인 후 거래가 완료됩니다.  

**escrowMail**
- `escrowMail` - 에스크로 결제를 원하는 구매자의 이메일 주소입니다. 옵션을 입력하지 않을 경우 구매 시 물어보게 됩니다. 

**itemName**
- `itemName` - itemName 인보이스(송장)에 표시되는 상품명 입니다. UTF-8로 인코딩된 텍스트를 입력해 주세요.

**invoiceMail**
- `invoiceMail` -  거래가 완료되면 알림메일이 전송될 주소입니다. 이메일을 받지못했다면 스팸메일함을 확인해 주세요.

**redirectUrl**
- `redirectUrl` - 거래가 완료되면 바로 이동되는 URL 목적지입니다. 초기에 전달된 모든 쿼리값도 반환합니다.

**notificationUrl**
- `notificationUrl` - 거래가 완료되면 사용자 서버에서 푸시를 받을 수 있는 주소입니다. 초기에 전달된 모든 쿼리값도 반환합니다.

**customLogo**
- `customLogo` - 사용자정의 로고입니다. 외부이미지 링크를 허용합니다.

**customColor**
- `customColor` - 인보이스화면을 위한 사용자정의 색상입니다. Hex컬러값을 허용합니다.  

**customUrl**
- `customUrl` - 로고 클릭 시 이동하는 홈페이지 주소 입니다. 


# TESTNET
`new dunkpay('testnet')`로 초기화하면 테스트 모드로 작동합니다.
아래표는 지원하는 테스트서버 입니다.

Cryptocurrency | Support 
------------ | -------------
BTC | TESTNET [(https://tbtc.blockdozer.com)](https://tbtc.blockdozer.com)
BCH | TESTNET [(https://tbch.blockdozer.com)](https://tbch.blockdozer.com)
ETH | ROPSTEN [(https://ropsten.etherscan.io)](https://ropsten.etherscan.io)

# TESTING
 [테스트 페이지 : /docs/test.html](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Dayyoung/dunkpay/master/docs/test.html)

 [개발자 문의 : dryudryu@gmail.com](mailto:dryudryu@gmail.com)

# LICENSE
[MPL-2.0](https://www.mozilla.org/MPL/2.0/)
