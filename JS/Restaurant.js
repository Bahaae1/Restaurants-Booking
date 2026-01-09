
// دي بتعرض بيانات المطعم اللي اتفتح
window.onload = function(){
    let dataRest = JSON.parse(localStorage.getItem('clickRest'))
    console.log(dataRest)

    let showInfo = `
    <div class="head">
            <img src="${dataRest.logo}" alt="">
            <div class="pp">
                <h2>${dataRest.name}</h2>
                <p>
                    <i class="fas fa-star"></i>
                    <span>${dataRest.rating} (248 تقييم)</span>
                </p>
            </div>
        </div>
        <div class="info-restaurant">
            <div class="box">
                <h2>
                    <i class="fas fa-info-circle"></i>
                    <span>معلومات عامة</span>
                </h2>
                <div class="content">
                    <div class="location">
                        <p>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>الموقع : ${dataRest.location}</span>
                        </p>
                        <p>
                            <i class="fas fa-utensils"></i>
                            <span>نوع المطبخ : ${dataRest.type}</span>
                        </p>
                        <p>
                            <i class="fas fa-money-bill-wave"></i>
                            <span> نطاق الاسعار : ${dataRest.price}</span>
                        </p>
                        <p>
                            <i class="fas fa-clock"></i>
                            <span>  اوقات العمل : ${dataRest.time}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="box">
                    <h2>
                        <i class="fas fa-phone-alt"></i>
                        <span>معلومات التواصل</span>
                    </h2>
                <div class="content">
                    <div class="contact">
                        <p>
                            <i class="fas fa-phone"></i>
                            <span>الهاتف : ${dataRest.phone}</span>
                        </p>
                        <p>
                            <i class="fas fa-envelope"></i>
                            <span> البريد الإلكتروني : ${dataRest.email}</span>
                        </p>
                        <p>
                            <i class="fas fa-globe"></i>
                            <span>  الموقع الإلكتروني : www.freekeh.com</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="box">
                <h2>
                    <i class="fas fa-check-circle"></i>
                    <span>المميزات</span>
                </h2>
                <div class="content">
                    <div class="feature">
                        <span>سرعة الخدمة</span>
                        <span>مقاعد مريحة</span>
                        <span>توصيل</span>
                        <span>مناسب للعائلات</span>
                        <span>وجبات سريعة</span>
                        <span>مكان هادئ</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="disc">
            <h2>
                <i class="fas fa-align-right"></i>
                <span>وصف المطعم</span>
            </h2>
            <p>${dataRest.dic}</p>
        </div>
    `
    
    document.querySelector('.container').innerHTML = showInfo
}

// function goBooking(){

//     location.assign('../HTML/input-data-user.html')
// }

// لسة هعدل عليها واعملها 
function btnBooking(){
    if(localStorage.getItem('currentUser')){
        location.assign('../HTML/input-data-user.html')
    }else{
        alert( 'يجب عليك تسجيل الدخول اولا')
        // alertM.style.display = 'block'
    }
}