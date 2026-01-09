
// اظهار بيانات المطعم
window.onload = function(){
    let dataRest = JSON.parse(localStorage.getItem('clickRest'))
    console.log(dataRest.name)
    let showInfo = `
    <div class="box">
                <h2>
                    <i class="fas fa-info-circle"></i>
                    <span>معلومات عامة</span>
                </h2>
                <div class="content">
                    <div class="location">
                        <p>
                            <i class="fas fa-store"></i>
                            <span>اسم المطعم : ${dataRest.name}</span>
                        </p>
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
                            <span> البريد الإلكتروني : info@freekeh.com</span>
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
    `
    document.querySelector('.info-restaurant').innerHTML = showInfo
}


// تجميع بيانات الحجز 
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let countPeople = document.getElementById('count-people');
let date = document.getElementById('date');
let time = document.getElementById('time');
let nots = document.getElementById('nots');


let dataBookingArr = [];

let bookingNow = [];
// عشان اللوكل استورج بيحذف البيانات فعملت الشرط دا
if(localStorage.dataBookingArr != null){
    dataBookingArr = JSON.parse(localStorage.dataBookingArr)
}else{
    dataBookingArr = []
}
// تحميع بيانات الحجز
function dataBooking(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let currentRest = JSON.parse(localStorage.getItem('clickRest'))
    let BookingObj = {
        emailCurrentUser:currentUser.email,
        nameRest:currentRest.name,
        locationRest:currentRest.location,
        typeRest:currentRest.type,
        name:name.value,
        phone:phone.value,
        email:email.value,
        countPeople:countPeople.value,
        date:date.value,
        time:time.value,
        nots:nots.value,
        numBookings:Math.floor(Math.random() * 100000),
    }
    dataBookingArr.push(BookingObj)
    bookingNow.push(BookingObj)



    localStorage.setItem('dataBookingArr' , JSON.stringify(dataBookingArr))
    localStorage.setItem('bookingNow' , JSON.stringify(bookingNow))

    location.replace('../HTML/payment.html')

}
// دا عشان يحذف البيانات اللي في الاينبوتات
function removeValue(){
    name.value = '';
    phone.value = '';
    email.value = '';
    countPeople.value = '';
    date.value = '';
    time.value = '';
    nots.value = '';
}

