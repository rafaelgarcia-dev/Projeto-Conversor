const button = document.getElementById("convert-botton")
const select = document.getElementById("change-Currency")

const dolar = 5.2
const euro = 5.4
const bitcoin =127379.06

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValue = document.getElementById('real-value')
  const dolarValue = document.getElementById('dolar-value')

  realValue.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais);

  if (select.value === "US$ Dólar Americano") {
   dolarValue.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(inputReais / dolar);
}
  if (select.value === "€ Euro") {
   dolarValue.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(inputReais / euro)
}
if (select.value === "Bitcoin") {
  dolarValue.innerHTML = new Intl.NumberFormat('en',
   { style: 'currency', currency: 'BTC' }
 ).format(inputReais / bitcoin)
}
}

const changeCurrency = () => {
  const pDolar = document.getElementById("p-dolar")
  const imageEua = document.getElementById("image-eua")

  if (select.value === "Bitcoin") {
    pDolar.innerHTML = "Bitcoin"
    imageEua.src = ("./assets/bitcoin.png")
}


  if (select.value === "US$ Dólar Americano") {
    pDolar.innerHTML = "Dólar Americano"
    imageEua.src = ("./assets/estados-unidos (1) 1.png")
}

  if (select.value === '€ Euro') {
    pDolar.innerHTML = "Euro"
    imageEua.src = ("./assets/Design sem nome 1.png")

  }
  convertValues()
  
 }

 
button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)

