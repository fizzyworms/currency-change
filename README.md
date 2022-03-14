### currency-change
---

### 환율정보 계산기

### 사용 언어 : JavaScript
계산하는 핵심적인 방법인 eval()을 사용하려고 했으나 eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 해킹의 가능성이 있는 위험한 함수라고 하여 자바스크립트로 구현하는 방법을 알아보았다.

### 주요 기능
객체에 환율정보를 넣는다. 
환전 정보가 필요한 통화를 선택한 후 첫번째 박스에 금액을 입력하면 두번째 박스에서 원하는 통화로 환전된다.  


### 문제점
환율정보를 실시간으로 가져올 수 있는 방법이 필요하다.  
입력하는 숫자에 천단위 구분쉼표를 넣어주고자 방법을 찾아봤다. input의 type을 number에서 text로 바꾸니 구분쉼표가 들어가 화면에 표시되었다. 


## 출처
https://stackoverflow.com/questions/64713481/every-jquery-javascript-number-formating-doesnt-work-parsed-out-of-range
