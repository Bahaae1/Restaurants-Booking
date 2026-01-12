let mood = 'create';
let indexEdit ;

// بتعرض الاسليد في الشاشات الصغيرة
let iconBar = document.querySelector('.icon-bar');
let sidebar = document.querySelector('.sidebar');

iconBar.addEventListener('click' , ()=>{
    if(sidebar.classList.contains('block')){
        sidebar.classList.remove('block')
    }else{
        sidebar.classList.add('block')
        
    }
})

// للتنقل بين الصفحات

let btns = document.querySelectorAll('.sidebar ul li');
let control = document.querySelector('.control-panel');
let bookings = document.querySelector('.bookings');
let restaurants = document.querySelector('.restaurants');
let users = document.querySelector('.users');
let logout = document.querySelector('.logout');

btns.forEach((e)=>{
    e.addEventListener('click' , ()=>{
        btns.forEach((b)=>{
            b.classList.remove('active');
        })
        e.classList.add('active');
        
        if(document.querySelectorAll('.sidebar ul li')[0].classList.contains('active')){
            control.style.display = 'block'
        }else{
            control.style.display = 'none'
        }
        
        if(document.querySelectorAll('.sidebar ul li')[1].classList.contains('active')){
            bookings.style.display = 'block'
        }else{
            bookings.style.display = 'none'
        }
        
        if(document.querySelectorAll('.sidebar ul li')[2].classList.contains('active')){
            restaurants.style.display = 'block'
        }else{
            restaurants.style.display = 'none'
        }
        
        if(document.querySelectorAll('.sidebar ul li')[3].classList.contains('active')){
            users.style.display = 'block'
        }else{
            users.style.display = 'none'
        }
    })
})

let goBookings = document.querySelector('.section-header button');
goBookings.addEventListener('click' , ()=>{
    document.querySelectorAll('.sidebar ul li')[0].classList.remove('active')
    control.style.display = 'none'
    
    document.querySelectorAll('.sidebar ul li')[1].classList.add('active')
    bookings.style.display = 'block'
    
})


// اظهار واخفاء فورم اضافة اللمطاعم

let showForm = document.getElementById('show-add-restaurants-form')
let formAddRestaurant = document.querySelector('.form-add-restaurant');

showForm.addEventListener('click',()=>{
    formAddRestaurant.style.display = 'block'
    
})
function closeForm(){
    formAddRestaurant.style.display = 'none'
}

logout.addEventListener('click',()=>{
    location.replace('../HTML/page-login-and-creeat-account.html')
})

// تخزين بيانات المطعم

let restaurantName = document.querySelector('.form-add-restaurant .add-restaurant .form #name')
let restaurantLogo = document.querySelector('.form-add-restaurant .add-restaurant .form #logo')
let restaurantPhone = document.querySelector('.form-add-restaurant .add-restaurant .form #phone')
let restaurantType = document.querySelector('.form-add-restaurant .add-restaurant .form #type')
let restaurantLocation = document.querySelector('.form-add-restaurant .add-restaurant .form #location')
let restaurantTime = document.querySelector('.form-add-restaurant .add-restaurant .form #time')
let restaurantFeatures = document.querySelector('.form-add-restaurant .add-restaurant .form #features')
let restaurantPrice = document.querySelector('.form-add-restaurant .add-restaurant .form #price')
let restaurantImages = document.querySelector('.form-add-restaurant .add-restaurant .form #images')
let restaurantRating = document.querySelector('.form-add-restaurant .add-restaurant .form #rating')
let restaurantDic = document.getElementById('dic')
let restaurantEmail = document.querySelector('.form-add-restaurant .add-restaurant .form #email')
let restaurantWebsite = document.querySelector('.form-add-restaurant .add-restaurant .form #website')
let btnAddRestaurants = document.getElementById('btn-add-restaurants')



let restaurantsArr;
if(localStorage.restaurantsArr != null){
    restaurantsArr = JSON.parse(localStorage.restaurantsArr)
}else{
    restaurantsArr = [];
}

// جمع وتخزين البيانات

btnAddRestaurants.addEventListener('click', ()=>{
    let reader = new FileReader();
    reader.readAsDataURL(restaurantLogo.files[0])
    let src = '';
    reader.onload = function(){
        let restaurant = {
            name:restaurantName.value,
            logo:reader.result,
            phone:restaurantPhone.value,
            type:restaurantType.value,
            location:restaurantLocation.value,
            time:restaurantTime.value,
            features:restaurantFeatures.value,
            price:restaurantPrice.value,
            images:restaurantImages.file,
            rating:restaurantRating.value,
            dic:restaurantDic.value,
            email:restaurantEmail.value,
            website:restaurantWebsite.value,
            }
            if (mood === 'create'){
                restaurantsArr.push(restaurant)
            }else{
                restaurantsArr[indexEdit] = restaurant;
                mood = 'create';
                btnAddRestaurants.style.backgroundColor = '#06D6A0'
                btnAddRestaurants.innerHTML = 'اضافة مطعم'
            }
            formAddRestaurant.style.display = 'none';
            
                restaurantName.value = '';
                // restaurantLogo.value = '';
                    restaurantPhone.value = '';
                    restaurantType.value = '';
                    restaurantLocation.value = '';
                    restaurantTime.value = '';
                    restaurantFeatures.value = '';
                    restaurantPrice.value = '';
                    restaurantImages.file = '';
                    restaurantRating.value = '';
                    dic.value = '';
                    restaurantEmail.value = '';
                    restaurantWebsite.value = '';
            localStorage.setItem('restaurantsArr' , JSON.stringify(restaurantsArr))
    }


    

    
})

// اظهار بيانات المطاعم
let countRestaurants = document.getElementById('count-restaurants')
let tableRestaurant = document.querySelector('table .add-restaurant-new')

let dataRestaurants = JSON.parse(localStorage.getItem('restaurantsArr') )

function showRestaurant() {

    
        for(let i = 0 ; i < dataRestaurants.length ; i++ ){
    
            let show = `
            <tr>
                <td><img src="${dataRestaurants[i].logo}" alt=""></td>
                <td>${dataRestaurants[i].name}</td>
                <td>${dataRestaurants[i].type}</td>
                <td>${dataRestaurants[i].location}</td>
                <td>${dataRestaurants[i].price}</td>
                <td>
                    <span>${dataRestaurants[i].rating}</span>
                    <i class="fas fa-star"></i>
                </td>
                <td><strong>نشط</strong></td>
                <td>
                    <i onclick="editRestaurant(${i})" class="fas fa-edit"></i>
                    <i onclick="deleteRestaurant(${i})" class="fas fa-trash"></i>
                    </td>
            </tr>
            `;
            tableRestaurant.innerHTML += show
    }
    countRestaurants.innerHTML = dataRestaurants.length

};
showRestaurant();

// حذف المطعم

function deleteRestaurant(i){
    dataRestaurants.splice(i,1)

    localStorage.setItem('restaurantsArr', JSON.stringify(dataRestaurants))
    
}

// تعديل بيانات المطعم
function editRestaurant(i){
    formAddRestaurant.style.display = 'block'
    
    restaurantName.value = dataRestaurants[i].name;
    restaurantLogo.value = '';
    restaurantPhone.value = dataRestaurants[i].phone;
    restaurantType.value = dataRestaurants[i].type;
    restaurantLocation.value = dataRestaurants[i].location;
    restaurantTime.value = dataRestaurants[i].time;
    restaurantFeatures.value = dataRestaurants[i].features;
    restaurantPrice.value = dataRestaurants[i].price;
    restaurantImages.file = dataRestaurants[i].images;
    restaurantRating.value = dataRestaurants[i].rating;
    dic.value = dataRestaurants[i].dic;
    restaurantEmail.value = dataRestaurants[i].email;
    restaurantWebsite.value = dataRestaurants[i].website;


    btnAddRestaurants.style.backgroundColor = 'black'
    btnAddRestaurants.innerHTML = 'تعديل المطعم'

    mood = 'edit'

    indexEdit = i ;

}


// عرض المستخدمين في الداش بورد
let countUsers = document.getElementById('count-users')
let objUser = JSON.parse(localStorage.getItem('infoUser'))
let tableUsers = document.querySelector('#users tbody')

function showUsers(){

    for(let i = 0 ; i < objUser.length ; i++){
        let show = `
        <tr>
            <td><div class="user-avatar">${objUser[i].name[0]}</div></td>
            <td>${objUser[i].name}</td>
            <td>${objUser[i].email}</td>
            <td>${objUser[i].phone}</td>
            <td>${objUser[i].password}</td>
            <td>2025-05-15</td>
            <td><strong>نشط</strong></td>
            <td>
                <i class="fas fa-eye"></i>
                <i onclick='deleteUsers(${i})' class="fas fa-ban" style="margin-top: 5px;"></i>
            </td>
        </tr>
        `

        tableUsers.innerHTML += show
    }
    countUsers.innerHTML = objUser.length
}
showUsers();

// حذف المستخدمين

function deleteUsers(i){
    objUser.splice(i,1)

    localStorage.setItem('infoUser', JSON.stringify(objUser))
}

// للبحث بالاسم في المستخدمين

// اظهار اينبوت البحث
function showSearchUser(){
    document.querySelector('.section-header .search-user').style.display ='block'
    document.getElementById('search-user').focus()
}

// اخفاء اينبوت البحث
function hideSearchUser(){
    document.querySelector('.section-header .search-user').style.display ='none'
}

// فانكشن البحث 
function searchUser(value){
    let show ;
    for(let i = 0 ; i < objUser.length ; i++){
        if(objUser[i].name.includes(value)){
            show += `
                <tr>
                    <td><div class="user-avatar">${objUser[i].name[0]}</div></td>
                    <td>${objUser[i].name}</td>
                    <td>${objUser[i].email}</td>
                    <td>${objUser[i].phone}</td>
                    <td>${objUser[i].password}</td>
                    <td>2025-05-15</td>
                    <td><strong>نشط</strong></td>
                    <td>
                        <i class="fas fa-eye"></i>
                        <i onclick='deleteUsers(${i})' class="fas fa-ban" style="margin-top: 5px;"></i>
                    </td>
                </tr>
                `

    }
    tableUsers.innerHTML = show
}
}




// عرض الحجوزات

let bookingsUser = JSON.parse(localStorage.getItem('dataBookingArr'))
function showBooking(){
    for(let i = 0 ; i < bookingsUser.length ; i++){
        let showBookings = `
        <tr>
            <td>BH${bookingsUser[i].numBookings}</td>
            <td>${bookingsUser[i].nameRest}</td>
            <td>${bookingsUser[i].name}</td>
            <td>${bookingsUser[i].date}</td>
            <td>${bookingsUser[i].time}</td>
            <td class="status-yellow">قيد الانتظار</td>
            <td>
                <i onclick="showDetailsBookingCom(${i})" class="fas fa-eye"></i>
                <i onclick="completedBooking(${i})" class="fas fa-check"></i>
                <i onclick="cancelledBooking(${i})" class="fas fa-times"></i>
            </td>
        </tr>
        `
        document.getElementById('show-bookings').innerHTML += showBookings
        document.getElementById('show-bookings-control').innerHTML += showBookings
    }
    
}
showBooking()


let cancelled = [];
if(localStorage.cancelled !== null){
    cancelled = JSON.parse(localStorage.cancelled)
}else{
    cancelled = [];
}
// زرار الغاء الحجز
function cancelledBooking(i){
    cancelled.push(bookingsUser[i])
    localStorage.setItem('cancelled' , JSON.stringify(cancelled))
    

    bookingsUser.splice(i,1)
    localStorage.setItem('dataBookingArr' , JSON.stringify(bookingsUser))
}
// عرض البيانات للحجوزات الملغية
let locCancelled = JSON.parse(localStorage.getItem("cancelled"))
function showCancelledBooking(){
    let showBookingsCancelled ;

    for(let i = 0 ; i < locCancelled.length ;i++){
        showBookingsCancelled = `
        <tr>
            <td>BH${locCancelled[i].numBookings}</td>
            <td>${locCancelled[i].nameRest}</td>
            <td>${locCancelled[i].name}</td>
            <td>${locCancelled[i].date}</td>
            <td>${locCancelled[i].time}</td>
            <td class="status-red">ملغى</td>
            <td>
                <i onclick="showDetailsBookingCanc(${i})" class="fas fa-eye"></i>
            </td>
        </tr>
                `
                document.getElementById('show-bookings').innerHTML += showBookingsCancelled
                document.getElementById('show-bookings-control').innerHTML += showBookingsCancelled
    }    
}
showCancelledBooking();



let completed = [];
if(localStorage.completed !== null){
    completed = JSON.parse(localStorage.completed)
}else{
    completed = [];
}
// زرار انتهاء الحجز
function completedBooking(i){
    completed.push(bookingsUser[i])
    localStorage.setItem('completed' , JSON.stringify(completed))

    bookingsUser.splice(i,1)
    localStorage.setItem('dataBookingArr' , JSON.stringify(bookingsUser))
}
// عرض الحجوزات اللي انتهت 
let locCompleted = JSON.parse(localStorage.getItem("completed"))
function showCompletedBooking(){
    let showBookingsCompleted ;

    for(let i = 0 ; i < locCompleted.length ;i++){
        showBookingsCompleted = `
        <tr>
            <td>BH${locCompleted[i].numBookings}</td>
            <td>${locCompleted[i].nameRest}</td>
            <td>${locCompleted[i].name}</td>
            <td>${locCompleted[i].date}</td>
            <td>${locCompleted[i].time}</td>
            <td class="status-green">انتهي</td>
            <td>
                <i onclick="showDetailsBookingComp(${i})" class="fas fa-eye"></i>
            </td>
        </tr>
                `
                document.getElementById('show-bookings').innerHTML += showBookingsCompleted
                document.getElementById('show-bookings-control').innerHTML += showBookingsCompleted
            }
}
showCompletedBooking();


// عرض عدد الحجوزات
function countBooking(){
    let countActive = JSON.parse(localStorage.getItem('dataBookingArr'))
    let countCancelled = JSON.parse(localStorage.getItem('cancelled'))
    let countCompleted = JSON.parse(localStorage.getItem('completed'))
    document.getElementById('count-booking').innerText = countActive.length + countCancelled.length + countCompleted.length
    document.getElementById('count-booking-day').innerText = countActive.length
}
countBooking()


//  عرض تفاصيل الحجوزات القادمة
let showDetails = document.getElementById('show-details-booking')
function showDetailsBookingCom(i){
    showDetails.style.display = 'block'
    showDetails.innerHTML =`
    <div class="show-details">
                <h2>
                    <i class="fas fa-info-circle"></i>
                    <span>تفاصيل الحجز</span>
                </h2>
            <div class="grid-show-details">
                <div >
                    <i class="fas fa-user"></i>
                    <p><strong>الاسم : </strong> <span>${bookingsUser[i].name}</span></p>
                </div>
                <div >
                    <i class="fas fa-hashtag"></i>
                    <p><strong>رقم الحجز : </strong> <span>${bookingsUser[i].numBookings}</span></p>
                </div>
                <div >
                    <i class="fas fa-calendar-day"></i>
                    <p><strong>التاريخ:</strong> <span>${bookingsUser[i].date}</span></p>
                </div>
                <div >
                    <i class="fas fa-clock"></i>
                    <p><strong>الوقت:</strong> <span>${bookingsUser[i].time}</span></p>
                </div>
                <div >
                    <i class="fas fa-users"></i>
                    <p><strong>عدد الأشخاص:</strong> <span>${bookingsUser[i].countPeople} أشخاص</span></p>
                </div>
                <div >
                    <i class="fas fa-phone"></i>
                    <p><strong>الهاتف:</strong> <span>${bookingsUser[i].phone}</span></p>
                </div>
                <div >
                    <i class="fas fa-user"></i>
                    <p><strong>البريد الإلكتروني:</strong> <span>${bookingsUser[i].email}</span></p>
                </div>
                <div>
                    <i class="fas fa-calendar-day"></i>
                    <p><strong> ملاحظات خاصة:</strong> <span>${bookingsUser[i].nots}</span></p>
                </div>
                <div>
                    <i class="fas fa-store"></i>
                    <p><strong>اسم المطعم:</strong> <span>${bookingsUser[i].nameRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p><strong>العنوان:</strong> <span>${bookingsUser[i].locationRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-utensils"></i>
                    <p><strong>نوع المطبخ:</strong> <span>${bookingsUser[i].typeRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-user"></i>
                    <p><strong>الادمن:</strong> <span>بيبو</span></p>
                </div>

                <button onclick="closeDetails()">
                    اغلاق
                </button>
            </div>

        </div>
    ` 
}


//  عرض تفاصيل الحجوزات الملغية
function showDetailsBookingCanc(i){
    showDetails.style.display = 'block'
    showDetails.innerHTML =`
        <div class="show-details">
                <h2>
                    <i class="fas fa-info-circle"></i>
                    <span>تفاصيل الحجز</span>
                </h2>
            <div class="grid-show-details">
                <div >
                    <i class="fas fa-user"></i>
                    <p><strong>الاسم : </strong> <span>${locCancelled[i].name}</span></p>
                </div>
                <div >
                    <i class="fas fa-hashtag"></i>
                    <p><strong>رقم الحجز : </strong> <span>${locCancelled[i].numBookings}</span></p>
                </div>
                <div >
                    <i class="fas fa-calendar-day"></i>
                    <p><strong>التاريخ:</strong> <span>${locCancelled[i].date}</span></p>
                </div>
                <div >
                    <i class="fas fa-clock"></i>
                    <p><strong>الوقت:</strong> <span>${locCancelled[i].time}</span></p>
                </div>
                <div >
                    <i class="fas fa-users"></i>
                    <p><strong>عدد الأشخاص:</strong> <span>${locCancelled[i].countPeople} أشخاص</span></p>
                </div>
                <div >
                    <i class="fas fa-phone"></i>
                    <p><strong>الهاتف:</strong> <span>${locCancelled[i].phone}</span></p>
                </div>
                <div >
                    <i class="fas fa-user"></i>
                    <p><strong>البريد الإلكتروني:</strong> <span>${locCancelled[i].email}</span></p>
                </div>
                <div>
                    <i class="fas fa-calendar-day"></i>
                    <p><strong> ملاحظات خاصة:</strong> <span>${locCancelled[i].nots}</span></p>
                </div>
                <div>
                    <i class="fas fa-store"></i>
                    <p><strong>اسم المطعم:</strong> <span>${locCancelled[i].nameRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p><strong>العنوان:</strong> <span>${locCancelled[i].locationRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-utensils"></i>
                    <p><strong>نوع المطبخ:</strong> <span>${locCancelled[i].typeRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-user"></i>
                    <p><strong>الادمن:</strong> <span>بيبو</span></p>
                </div>

                <button onclick="closeDetails()">
                    اغلاق
                </button>
            </div>

        </div>
    ` 
}

//  عرض تفاصيل الحجوزات اللي انتهت
function showDetailsBookingComp(i){
    showDetails.style.display = 'block'
    showDetails.innerHTML =`
        <div class="show-details">
                <h2>
                    <i class="fas fa-info-circle"></i>
                    <span>تفاصيل الحجز</span>
                </h2>
            <div class="grid-show-details">
                <div >
                    <i class="fas fa-user"></i>
                    <p><strong>الاسم : </strong> <span>${locCompleted[i].name}</span></p>
                </div>
                <div >
                    <i class="fas fa-hashtag"></i>
                    <p><strong>رقم الحجز : </strong> <span>${locCompleted[i].numBookings}</span></p>
                </div>
                <div >
                    <i class="fas fa-calendar-day"></i>
                    <p><strong>التاريخ:</strong> <span>${locCompleted[i].date}</span></p>
                </div>
                <div >
                    <i class="fas fa-clock"></i>
                    <p><strong>الوقت:</strong> <span>${locCompleted[i].time}</span></p>
                </div>
                <div >
                    <i class="fas fa-users"></i>
                    <p><strong>عدد الأشخاص:</strong> <span>${locCompleted[i].countPeople} أشخاص</span></p>
                </div>
                <div >
                    <i class="fas fa-phone"></i>
                    <p><strong>الهاتف:</strong> <span>${locCompleted[i].phone}</span></p>
                </div>
                <div >
                    <i class="fas fa-user"></i>
                    <p><strong>البريد الإلكتروني:</strong> <span>${locCompleted[i].email}</span></p>
                </div>
                <div>
                    <i class="fas fa-calendar-day"></i>
                    <p><strong> ملاحظات خاصة:</strong> <span>${locCompleted[i].nots}</span></p>
                </div>
                <div>
                    <i class="fas fa-store"></i>
                    <p><strong>اسم المطعم:</strong> <span>${locCompleted[i].nameRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p><strong>العنوان:</strong> <span>${locCompleted[i].locationRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-utensils"></i>
                    <p><strong>نوع المطبخ:</strong> <span>${locCompleted[i].typeRest}</span></p>
                </div>
                <div>
                    <i class="fas fa-user"></i>
                    <p><strong>الادمن:</strong> <span>بيبو</span></p>
                </div>

                <button onclick="closeDetails()">
                    اغلاق
                </button>
            </div>

        </div>
    ` 
}
function closeDetails(){
    showDetails.style.display = 'none'
}