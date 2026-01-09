// دا الاليرت
let alertM = document.getElementById('transparent')
let closeAlert = document.getElementById('close-alert')
let alertMsg = document.getElementById('alert-msg')

closeAlert.addEventListener('click', ()=>{
    alertM.style.display = 'none'
})



// زرار تأكيد الحجز
let btnOk = document.getElementById('continue')

btnOk.addEventListener('click' , ()=>{
    let sendImage = document.getElementById('send-image')
    if(sendImage.value === ''){
        alertMsg.innerHTML = 'من فضلك ارسل ايصال الدفع اولا'
        alertM.style.display = 'block'
    }else{
        location.assign('../HTML/success.html')

    }
})


// زرار العودة لمطاعم الحجز

let btnBack = document.getElementById('back')

btnBack.addEventListener('click' , ()=>{
    location.assign('../HTML/Restaurants-Page.html')
})