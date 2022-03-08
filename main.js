// 1. 박스2개 만들기 ㅇ
//2. 드랍다운 리스트 만들기 ㅇ
//3. 환율정보 가져오기 ㅇ
//4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜 ㅇ
//5. 금액을 입력하면 환전이 된다.
//6. 드랍다운 리스트에서 아이템 선택하면 다시 그 단위기준으로 환전이 됨
//7. 숫자를 한한국국어어로  읽읽는 법
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위 박스에 환율이 적용됨

let currencyRatio = {
  USD: {
    KRW: 1227.6,
    USD: 1,
    GBP: 0.76,
    EUR: 0.92,
    unit: "달러",
  },

  KRW: {
    KRW: 1,
    USD: 0.00081,
    GBP: 0.00062,
    EUR: 0.00074,
    unit: "원",
  },

  GBP: {
    KRW: 1620.47,
    USD: 1.32,
    GBP: 1,
    EUR: 1.21,
    unit: "파운드",
  },

  EUR: {
    KRW: 1343.13,
    USD: 1.09,
    GBP: 0.83,
    EUR: 1,
    unit: "유로",
  },
};

const fromBtn = document.querySelector("#from-button");
const fromList = document.querySelectorAll("#from-currency-list a");
const toBtn = document.querySelector("#to-button");
const toList = document.querySelectorAll("#to-currency-list a");
const fromInput = document.querySelector("#from-input");
const fromInputDisplay = document.querySelector("#from-input-display");
const toInput = document.querySelector("#to-input");
const toInputDisplay = document.querySelector("#to-input-display");

let fromCurrency = "USD";
let toCurrency = "USD";

fromList.forEach((item) => {
  item.addEventListener("click", () => {
    fromBtn.innerText = item.innerText;
    fromCurrency = item.innerText; // 변수에 저장한다.
    fromInputDisplay.innerText = currencyRatio[item.innerText]["unit"];
    convert("from");
  });
});

toList.forEach((item) => {
  item.addEventListener("click", () => {
    toBtn.innerText = item.innerText;
    toCurrency = item.innerText; // 변수에 저장한다.
    toInputDisplay.innerText = currencyRatio[item.innerText]["unit"];
    convert("from");
  });
});

//1. 키를 입력하는 순간
//2. 환전이 되서
//3. 환전된 값이 보인다.
function convert(type) {
  let amount = 0;
  if (type == "from") {
    amount = fromInput.value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    toInput.value = convertedAmount.toFixed(2);
  } else {
    amount = toInput.value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    fromInput.value = convertedAmount.toFixed(2); // string
  }
}

fromInput.addEventListener("keyup", () => {
  convert("from");
});
fromInput.addEventListener("click", () => {
  fromInput.value = "";
});

toInput.addEventListener("keyup", () => {
  convert("to");
});
toInput.addEventListener("click", () => {
  toInput.value = "";
});
