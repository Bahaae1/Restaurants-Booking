
// عرض تفاصيل الحجز
function showDataBooking(){
    let bookingNow = JSON.parse(localStorage.getItem('bookingNow') )
    let clickRest = JSON.parse(localStorage.getItem('clickRest') )


    // عشان اعرض كود الحجز
    document.getElementById('num-booking').innerHTML = 
    `
        <i class="fas fa-hashtag"></i>
        <span>BH${bookingNow[0].numBookings}</span>
    `
    
    // عرض بيانات الحجز
    document.getElementById('info-user').innerHTML = 
    `
    <div class="name">
        <i class="fas fa-user"></i>
        <p><strong>الاسم : </strong> <span>${bookingNow[0].name}</span></p>
    </div>
    <div class="phone">
        <i class="fas fa-phone"></i>
        <p><strong>الهاتف:</strong> <span>${bookingNow[0].phone}</span></p>
    </div>
    <div class="email">
        <i class="fas fa-user"></i>
        <p><strong>البريد الإلكتروني:</strong> <span>${bookingNow[0].email}</span></p>
    </div>
    <div class="date">
        <i class="fas fa-calendar-day"></i>
        <p><strong>التاريخ:</strong> <span>${bookingNow[0].date}</span></p>
    </div>
    <div class="time">
        <i class="fas fa-clock"></i>
        <p><strong>الوقت:</strong> <span>${bookingNow[0].time}</span></p>
    </div>
    <div class="count-people">
        <i class="fas fa-users"></i>
        <p><strong>عدد الأشخاص:</strong> <span>${bookingNow[0].countPeople} أشخاص</span></p>
    </div>
    `
    // عرض بيانات المطعم
    document.getElementById('info-Restaurant').innerHTML = 
    `
    <div class="name">
        <i class="fas fa-store"></i>
        <p><strong>اسم المطعم:</strong> <span>${clickRest.name}</span></p>
    </div>
    <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <p><strong>لعنوان:</strong> <span>${clickRest.location}</span></p>
    </div>
    <div class="date">
        <i class="fas fa-calendar-day"></i>
        <p><strong>هاتف المطعم:</strong> <span>${clickRest.phone}</span></p>
    </div>
    <div class="date">
        <i class="fas fa-calendar-day"></i>
        <p><strong>التقييم:</strong> <span>${clickRest.rating}/5</span></p>
    </div>
    `
}
showDataBooking();

// زرار الذهاب الي الصفحة الشخصي
document.getElementById('go-profile').addEventListener('click',()=>{
    location.assign('../HTML/profil.html')
})

// زرار الذهاب الى صفحة المطعم
document.getElementById('go-Restaurant').addEventListener('click',()=>{
    location.assign('../HTML/Restaurant.html')
})