let forI;

// عشان الصفحة تعمل اسكرول لفوق
let up = document.querySelector('.floating-buttons .up');

up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

function logout(){
    localStorage.removeItem('currentUser')
    location.assign('../index.html')
}



let currentUser = JSON.parse(localStorage.getItem('currentUser'))

let profileData = JSON.parse(localStorage.getItem('infoUser'));

let search = profileData.find(user=> user.email === currentUser.email)
window.onload = function(){

    // تغيير افتار المستخدم
    document.querySelector('.hero .avatar').innerHTML = search.name[0]
    
    
    // تغيير اسم المستخدم
    document.querySelector('.hero h2').innerHTML = search.name
    document.querySelector('.hero p span').innerHTML = search.date
    
    // تغيير معلومات المستخدم
    let infoUser = document.querySelector('.info-account-user ul')
    
    let info = `
    <li>
        <i class="fas fa-user"></i>
        <div class="text">
            <h3>الاسم الكامل</h3>
            <p id="name-user">${search.name}</p>
            </div>
    </li>

    <li>
        <i class="fas fa-envelope"></i>
        <div class="text">
            <h3>البريد الإلكتروني</h3>
            <p id="email-user">${search.email}</p>
            </div>
    </li>

    <li>
        <i class="fas fa-phone"></i>
        <div class="text">
            <h3>رقم الهاتف</h3>
            <p id="phone-user">${search.phone}</p>
        </div>
    </li>
    `
    infoUser.innerHTML = info
    
    let transparent = document.getElementById('transparent')

    let trans = `
    <div class="info-account-user" >
        <div class="head">
                        
            <h3>تعديل معلومات الحساب</h3>
        </div>
        <ul>
            <li>
                <i class="fas fa-user"></i>
                <div class="text">
                    <h3>الاسم الكامل</h3>
                    <p id="name-user-trans">${search.name}</p>
                </div>
            </li>
    
            <li>
                <i class="fas fa-envelope"></i>
                <div class="text">
                    <h3>البريد الإلكتروني</h3>
                    <p id="email-user-trans">${search.email}</p>
                    <span>لو عدلت في البريد الالكتروني هتسجل دخول من جديد</span>

                </div>
            </li>
    
            <li>
                <i class="fas fa-phone"></i>
                <div class="text">
                    <h3>رقم الهاتف</h3>
                    <p id="phone-user-trans">${search.phone}</p>
                </div>
            </li>
        </ul>
    
        <div class="two-button">
            <button onclick="hidTransparent()" id="btn-cancel">إلغاء</button>
            <button onclick="saveEdit()" id="btn-edit">تعديل</button>
        </div>
    </div>
    `

    transparent.innerHTML = trans

}

// بتخليهم يتحولوا الي اينبوت

function editInfoUser(){
    let editInfoUser = document.querySelector('.edit-info-user')
    let transparent = document.getElementById('transparent')
    transparent.style.display = 'block'

    let nameTrans = document.getElementById('name-user-trans');
    nameTrans.innerHTML = `<input type="text" id="edit-name">`
    let nameTransValue = document.querySelector('.info-account-user ul li #name-user-trans input');
    
    let emailTrans = document.getElementById('email-user-trans');
    emailTrans.innerHTML = `<input onblur="emailBlur()" onfocus="emailFocus()" type="email" id="edit-email">`
    let emailTransValue = document.querySelector('.info-account-user ul li #email-user-trans input');
    
    let phoneTrans = document.getElementById('phone-user-trans');
    phoneTrans.innerHTML = `<input type="text" id="edit-email">`
    let phoneTransValue = document.querySelector('.info-account-user ul li #phone-user-trans input');
    
    
    nameTransValue.value = search.name
    emailTransValue.value = search.email
    phoneTransValue.value = search.phone

    
}


// دي بتقفل صفحة التعديل
function hidTransparent(){
    let transparent = document.getElementById('transparent')
    transparent.style.display = 'none'

}
// حفظ التعديلات
function saveEdit(){

    let nameTransValue = document.querySelector('.info-account-user ul li #name-user-trans input').value;
    
    let emailTransValue = document.querySelector('.info-account-user ul li #email-user-trans input').value;
    
    let phoneTransValue = document.querySelector('.info-account-user ul li #phone-user-trans input').value;

    for(let i = 0 ; i < profileData.length ; i++){
        if(profileData[i].email === currentUser.email){
            profileData[i].name = nameTransValue;
            profileData[i].email = emailTransValue;
            profileData[i].phone = phoneTransValue;
            break;
        }
    }

    localStorage.setItem('infoUser', JSON.stringify(profileData))

    hidTransparent()
    
    if(currentUser.email !== emailTransValue){
        location.assign('../HTML/page-login-and-creeat-account.html')
    }

    window.onload()

}
// لما يحاول يغير الايميل 
function emailFocus(){
    document.querySelector('#transparent ul li span').style.display = 'inline-block'
}
function emailBlur(){
    document.querySelector('#transparent ul li span').style.display = 'none'
}


// عرض الحجوزات

let booking = JSON.parse(localStorage.getItem('dataBookingArr'))
let user = JSON.parse(localStorage.getItem('currentUser'))
let bookingUser = booking.filter(e=> e.emailCurrentUser === user.email )
function showBooking(){

    for(let i = 0 ; i < bookingUser.length ; i++){
        show = `
        <div class="booking-card coming-card">
                        <div class="head-booking-card">
                            <h3>${bookingUser[i].nameRest}</h3>
                            <span class="coming">قادم</span>
                        </div>

                        <p>مطعم ${bookingUser[i].typeRest} - ${bookingUser[i].locationRest}</p>

                        <div class="booking-details">
                            <div class="date">
                                <i class="fas fa-calendar"></i>
                                <span>${bookingUser[i].date}</span>
                            </div>
                            <div class="time">
                                <i class="fas fa-clock"></i>
                                <span>${bookingUser[i].time}</span>
                            </div>
                            <div class="count-people">
                                <i class="fas fa-users"></i>
                                <span>${bookingUser[i].countPeople} أشخاص</span>
                            </div>
                        </div>
                    
                    <div class="btns">
                        <button on class="btn-outline">
                            <i class="fas fa-eye"></i>
                            <span>التفاصيل</span>
                        </button>
                        <button onclick="(cancelledBooking(${i}))" class="btn-danger">
                            <i class="fas fa-times"></i>
                            <span>إلغاء الحجز</span>
                        </button>
                        <button onclick="editBooking(${i})" class="btn-success">
                            <i class="fas fa-edit"></i>
                            <span>تعديل</span>
                        </button>
                    </div>
                    </div>
        `
        document.querySelector('.bookings-list').innerHTML += show
    }

    
}
showBooking();



let filters = document.querySelectorAll('#filters button')
filters.forEach(e=>{
    e.addEventListener('click', ()=>{
        filters.forEach(el=>{
            el.classList.remove('active')
        })
        e.classList.add('active')
    })
})

// function filterAll(){
//     let all = document.getElementById('all')
//     let coming = document.getElementById('accoming')

//     let show;
//         for(let i = 0 ; i < bookingUser.length;i++){
//             if(all.classList.contains('active')){
//                 show = `
//         <div class="booking-card coming-card">
//                         <div class="head-booking-card">
//                             <h3>${bookingUser[i].nameRest}</h3>
//                             <span class="coming">قادم</span>
//                         </div>

//                         <p>مطعم ${bookingUser[i].typeRest} - ${bookingUser[i].locationRest}</p>

//                         <div class="booking-details">
//                             <div class="date">
//                                 <i class="fas fa-calendar"></i>
//                                 <span>${bookingUser[i].date}</span>
//                             </div>
//                             <div class="time">
//                                 <i class="fas fa-clock"></i>
//                                 <span>${bookingUser[i].time}</span>
//                             </div>
//                             <div class="count-people">
//                                 <i class="fas fa-users"></i>
//                                 <span>${bookingUser[i].countPeople} أشخاص</span>
//                             </div>
//                         </div>
                    
//                     <div class="btns">
//                         <button on class="btn-outline">
//                             <i class="fas fa-eye"></i>
//                             <span>التفاصيل</span>
//                         </button>
//                         <button class="btn-danger">
//                             <i class="fas fa-times"></i>
//                             <span>إلغاء الحجز</span>
//                         </button>
//                         <button class="btn-success">
//                             <i class="fas fa-edit"></i>
//                             <span >تعديل</span>
//                         </button>
//                     </div>
//                     </div>
//         `
//     }
    
//     document.querySelector('.bookings-list').innerHTML += show
// }
// }
// filterAll()

let showFormEditBooking = document.getElementById('transparen')

let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let countPeople = document.getElementById('count-people');
let date = document.getElementById('date');
let time = document.getElementById('time');
let nots = document.getElementById('nots');

// رفع البيانات في فورم التعديل
function editBooking(i){
    showFormEditBooking.style.display = 'block'

    name.value = bookingUser[i].name
    phone.value = bookingUser[i].phone
    email.value = bookingUser[i].email
    countPeople.value = bookingUser[i].countPeople
    date.value = bookingUser[i].date
    time.value = bookingUser[i].time
    nots.value = bookingUser[i].nots

    forI = i ;
}
// غلق نافذة التعديل
let hidForm = document.getElementById('hid-form')
hidForm.onclick = function(){
    showFormEditBooking.style.display = 'none'
}

// حفظ التعديلات
let btnSaveEdit = document.getElementById('edit')
btnSaveEdit.onclick = function(){
    for(let i = 0 ; i<booking.length;i++){
        if(booking[i].numBookings === bookingUser[forI].numBookings){
            booking[i].name = name.value
            booking[i].phone = phone.value
            booking[i].email = email.value
            booking[i].countPeople = countPeople.value
            booking[i].date = date.value
            booking[i].time = time.value
            booking[i].nots = nots.value
        }
        localStorage.setItem('dataBookingArr', JSON.stringify(booking))
        
    }
    showFormEditBooking.style.display = 'none'
    
}



// انشاء زرار للادمن يوديني صفحة الادمن
// function goAdmin(){
//     let email = JSON.parse(localStorage.getItem('currentUser'))
//     let Bahaa = email.email
//     if(Bahaa === "bahaa.hassan.m@gmail.com"){
//         let btn = document.querySelector('.floating-buttons')
    
//         let createBtn = document.createElement('button')
//         createBtn.className = 'admin'
//         createBtn.id = 'admin'
//         let icon = document.createElement('i')
//         icon.className = "fa-solid fa-gear"
    
//         createBtn.appendChild(icon)
//         btn.appendChild(createBtn)

//         createBtn.onclick = function(){
//             location.assign('../HTML/dashbord.html')
//         }
//     }
//     else{
//         console.log(',,,')
//     }
// }
// goAdmin();



// زرار الغاء الحجز
function cancelledBooking(i){
    let cancelled = JSON.parse(localStorage.getItem('cancelled'))
    cancelled.push(bookingUser[i])
    localStorage.setItem('cancelled' , JSON.stringify(cancelled))


    booking.splice(i,1)
    localStorage.setItem('dataBookingArr' , JSON.stringify(booking))
}
// عرض الحجوزات الملغيه
let locCancelled = JSON.parse(localStorage.getItem("cancelled"))
function showCancelledBooking(){
    let bookingUser = locCancelled.filter(e=> e.emailCurrentUser === user.email )
    let showBookingsCancelled ;

    for(let i = 0 ; i < bookingUser.length ;i++){
        showBookingsCancelled = ` 
        <div class="booking-card cancelled-card">
                    <div class="head-booking-card">
                            <h3>${bookingUser[i].nameRest}</h3>
                            <span class="cancelled">ملغي</span>
                        </div>

                        <p>مطعم ${bookingUser[i].typeRest} - ${bookingUser[i].locationRest}</p>

                        <div class="booking-details">
                            <div class="date">
                                <i class="fas fa-calendar"></i>
                                <span>${bookingUser[i].date}</span>
                            </div>
                            <div class="time">
                                <i class="fas fa-clock"></i>
                                <span>${bookingUser[i].time}</span>
                            </div>
                            <div class="count-people">
                                <i class="fas fa-users"></i>
                                <span>${bookingUser[i].countPeople} أشخاص</span>
                            </div>
                        </div>
                    
                    <div class="btns">
                        <button class="btn-outline">
                            <i class="fas fa-eye"></i>
                            <span>التفاصيل</span>
                        </button>
                        <button onclick="returnBooking(${i})" class="btn-secondary">
                            <i class="fas fa-redo"></i>
                            <span>اعادة الحجز</span>
                        </button>
                    </div>
                </div>
    </div>
                `
                document.querySelector('.bookings-list').innerHTML += showBookingsCancelled
            }

}
showCancelledBooking();

// زرار اعادة الحجز
function returnBooking(i){
    
    // console.log(locCancelled[i])
    // console.log(i)
    // localStorage.setItem('clickRest' , JSON.stringify(ratingObj[i]))
}

// عرض الحجوزات اللي انتهت
let locCompleted = JSON.parse(localStorage.getItem("completed"))
function showCompletedBooking(){
    let bookingUser = locCompleted.filter(e=> e.emailCurrentUser === user.email )
    let showBookingsCompleted ;

    for(let i = 0 ; i < bookingUser.length ;i++){
        showBookingsCompleted = `
    <div class="booking-card completed-card">
                        <div class="head-booking-card">
                            <h3>${bookingUser[i].nameRest}</h3>
                            <span class="completed">مكتمل</span>
                        </div>

                        <p>مطعم ${bookingUser[i].typeRest} - ${bookingUser[i].locationRest}</p>

                        <div class="booking-details">
                            <div class="date">
                                <i class="fas fa-calendar"></i>
                                <span>${bookingUser[i].date}</span>
                            </div>
                            <div class="time">
                                <i class="fas fa-clock"></i>
                                <span>${bookingUser[i].time}</span>
                            </div>
                            <div class="count-people">
                                <i class="fas fa-users"></i>
                                <span>${bookingUser[i].countPeople} أشخاص</span>
                            </div>
                        </div>
                    
                    <div class="btns">
                        <button class="btn-outline">
                            <i class="fas fa-eye"></i>
                            <span>التفاصيل</span>
                        </button>
                        <button class="btn-success">
                            <i class="fas fa-redo"></i>
                            <span>اعادة الحجز</span>
                        </button>
                    </div>
                    </div>
                `
                document.querySelector('.bookings-list').innerHTML += showBookingsCompleted
            }

}
showCompletedBooking()