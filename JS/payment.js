







// زرار تأكيد الحجز
let btnOk = document.getElementById('continue')

btnOk.addEventListener('click' , ()=>{
    location.assign('../HTML/success.html')
})


// زرار العودة لمطاعم الحجز

let btnBack = document.getElementById('back')

btnBack.addEventListener('click' , ()=>{
    location.assign('../HTML/Restaurants-Page.html')
})