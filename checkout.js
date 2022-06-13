let amount=document.querySelectorAll('.amountWrapper')[0]
let price=sessionStorage.getItem('price')
let days=sessionStorage.getItem('days')
let priceInNaira=Number(price)
let Days=Number(days)

let Total =priceInNaira * Days
let TotalInNaira='Total'

amount.innerHTML =TotalInNaira
