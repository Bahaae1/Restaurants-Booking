let iconBar = document.querySelector('.icon-bar');
let nav = document.querySelector('.nav');

iconBar.addEventListener('click' , ()=>{
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')

    }
})



let homeLoginBtn = document.querySelector('.nav-left .login');
let homeCreateAccount = document.querySelector('.nav-left .create-account');


homeLoginBtn.addEventListener('click' , ()=>{
    location.assign('./HTML/page-login-and-creeat-account.html')
})
homeCreateAccount.addEventListener('click' , ()=>{
    location.assign('./HTML/page-login-and-creeat-account.html');
    
})


// عشان الصفحة تعمل اسكرول لفوق
let up = document.querySelector('.floating-buttons .up');

up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


// عرض المطاعم في الاعلى تقييما

let ratingRestaurant = localStorage.getItem('restaurantsArr')
let ratingObj = JSON.parse(ratingRestaurant)
let restaurantSection = document.querySelector('#restaurant-section .restaurant-all')

function showRatingRestaurant(){
    for(let i = 0 ; i < ratingObj.length ; i++ ){
        let show = `
        <div class="restaurant-box">
                    <img src="${ratingObj[i].logo}" alt="">

                    <div class="restaurant-desc">
                        <h3>${ratingObj[i].name}</h3>

                        <div class="data">
                            <div class="map">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${ratingObj[i].location}</span>
                            </div>

                            <div class="type">
                                <i class="fas fa-utensils"></i>
                                <span>${ratingObj[i].type}</span>
                            </div>

                            <div class="price">
                                <i class="fas fa-money-bill-wave"></i>
                                <span>${ratingObj[i].price}</span>
                            </div>
                        </div>

                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div  class="btns">
                            <button onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </button>

                            <button onclick="btnBooking(${i})" class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </button>
                        </div>
                    </div>
                </div>
        `
        restaurantSection.innerHTML += show
    }
    // ظهور عدد المطاعم في الصفحة الرئيسية
    document.getElementById('count-restaurants').innerHTML = ratingObj.length
}
showRatingRestaurant();



// هظبط الاليرت هنا
let alertM = document.getElementById('transparent')
let closeAlert = document.getElementById('close-alert')
let alertMsg = document.getElementById('alert-msg')

closeAlert.addEventListener('click', ()=>{
    alertM.style.display = 'none'
})

// لو كان مسجل دخول هيروح على صفحة الحجز لو مكنش مسجل هيقولوا سجل
function btnBooking(i){
    localStorage.setItem('clickRest' , JSON.stringify(ratingObj[i]))
    if(localStorage.getItem('currentUser')){
        location.assign('./HTML/input-data-user.html')
    }else{
        alertMsg.innerHTML = 'يجب عليك تسجيل الدخول اولا'
        alertM.style.display = 'block'
    }
}

// المفروض دي اللي هتاخده على صفحة المطعم
function btnDetails(i){
    localStorage.setItem('clickRest' , JSON.stringify(ratingObj[i]))
    location.assign('./HTML/Restaurant.html')
}


// لما المستخدم يسجل الدخول الحاجات دي تظهرله
window.onload = function showDataUser(){
    if(localStorage.getItem('currentUser')){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let profileData = JSON.parse(localStorage.getItem('infoUser'));
    let search = profileData.find(user=> user.email === currentUser.email)

    let linkLogin = document.querySelector('.link-login')
    let afterLogin = document.querySelector('.after-login')
    linkLogin.style.display = 'none'

        let user = `
        <div class="user">
            <div class="name">
                <a style="border: none;" href="./HTML/profil.html"><i class="fa-solid fa-circle-user"></i></a>
                <h4>${search.name}</h4> 
            </div>
            <i class="fa-solid fa-bell"></i>
            <i onclick="logout()" class="fa-solid fa-right-from-bracket"></i>

        </div>
        `
        afterLogin.innerHTML = user

        }
        
};


// لما المستخدم يسجل خروج
function logout(){
    localStorage.removeItem('currentUser')
    location.assign('../index.html')
}

// السيرش الل في الهيدر

let data = JSON.parse(localStorage.getItem('restaurantsArr'))
let search = document.querySelector('.search-restaurant ul');
let searchInp = document.getElementById('search');

function SearchHeader(){
    document.querySelector('.search-restaurant').style.display = 'block';
    let createData = '';
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].name.includes(searchInp.value)){
            createData += `
            <li>
                <a href="">
                    <img src="../images/freekeh.webp" alt="">
                    <h3>${data[i].name}</h3>
                </a>
            </li>
        `
    }
}
search.innerHTML = createData
}


// المفروذ انها  بتاعة الدارك موود
// let mood = document.getElementById('mood')

// mood.addEventListener('click', ()=>{
//     if(mood.classList.contains('mood')){
//         mood.classList.remove('mood')
//         localStorage.setItem('mood' , 'light')
//     }else{
//         mood.classList.add('mood')
//         localStorage.setItem('mood' , 'dark')
//     }
    
// })


// if(localStorage.getItem('mood') === 'dark'){
//     document.body.style.backgroundColor = 'black'
//     document.querySelector('header').style.backgroundColor = 'black'
// }
// else if(localStorage.getItem('mood') === 'light'){
//     document.body.style.backgroundColor = '#f8f9fa'
//     document.querySelector('header').style.backgroundColor = '#2D3047'
// }

// انشاء زرار للادمن يوديني صفحة الادمن
function goAdmin(){
    let email = JSON.parse(localStorage.getItem('currentUser'))
    let Bahaa = email.email
    if(Bahaa === "bahaa.hassan.m@gmail.com"){
        let btn = document.querySelector('.floating-buttons')
    
        let createBtn = document.createElement('button')
        createBtn.className = 'admin'
        createBtn.id = 'admin'
        let icon = document.createElement('i')
        icon.className = "fa-solid fa-gear"
    
        createBtn.appendChild(icon)
    
    
        btn.appendChild(createBtn)

        createBtn.onclick = function(){
            location.assign('./HTML/dashbord.html')
        }
    }
    else{
        console.log(',,,')
    }
}
goAdmin()

// عرض عدد الحجوزات النشطة

function showBookingActive(){
    let count = JSON.parse(localStorage.getItem('dataBookingArr')).length
    
    document.getElementById('count-booking-Restaurants').innerHTML = count
}
showBookingActive()