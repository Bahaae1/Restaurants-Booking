let alertM = document.getElementById('transparent')
let closeAlert = document.getElementById('close-alert')
let alertMsg = document.getElementById('alert-msg')

closeAlert.addEventListener('click', ()=>{
    alertM.style.display = 'none'
})


// الذهاب الي صفحة تسجيل الدخول

function goLogin(){
    location.assign('/HTML/page-login-and-creeat-account.html')
}
// لما المستخدم يسجل الدخول الحاجات دي تظهرله
window.onload = function showDataUser(){
    if(localStorage.getItem('currentUser')){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let profileData = JSON.parse(localStorage.getItem('infoUser'));
    let search = profileData.find(user=> user.email === currentUser.email)

    let afterLogin = document.querySelector('.icon-bell')

        let user = `
        <div class="user">
        <div class="name">
        <a style="border: none;" href="./profil.html"><i class="fa-solid fa-circle-user"></i></a>
        <h4>${search.name}</h4> 
        </div>
        <i class="fa-solid fa-bell"></i>
        <i onclick="logout()" class="fa-solid fa-right-from-bracket"></i>

        </div>
        `
        afterLogin.innerHTML = user

        }else{
        console.log('غير موجود')

}

};
// لما المستخدم يسجل خروج
function logout(){
    localStorage.removeItem('currentUser')
    location.assign('../index.html')
}





// عرض المطاعم في  في صفحة المطاعم

let ratingRestaurant = localStorage.getItem('restaurantsArr')
let ratingObj = JSON.parse(ratingRestaurant)
let restaurantSection = document.querySelector('#restaurant-section .restaurant-all')
let restaurantCount = document.querySelector('#restaurant-section .restaurant-count')



function searchType(){
    let type = document.getElementById('type').value
    let box = '';
    for(let i = 0 ; i < ratingObj.length ; i++){
    if(type === "جميع الانواع" ){
        box += `
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
                            <span>${ratingObj[i].rating}</span>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div class="btns">
                            <a onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </a>

                            <a onclick="btnBooking(${i})" class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </a>
                        </div>
                    </div>
                </div>
        `
    }

    if(ratingObj[i].type.includes(type)){

        box += `
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
                            <span>${ratingObj[i].rating}</span>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div class="btns">
                            <a onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </a>

                            <a onclick="btnBooking(${i})" class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </a>
                        </div>
                    </div>
                </div>
        `
    }
    
}
restaurantSection.innerHTML = box
let count = ` عرض <span>${restaurantSection.children.length}</span> من <span>${ratingObj.length}</span> مطاعم`;
restaurantCount.innerHTML = count
};
searchType();

function searchLocation(){
    let map = document.getElementById('map').value
    let box = '';
    for(let i = 0 ; i < ratingObj.length ; i++){
    if(map === "جميع المناطق" ){
        box += `
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
                            <span>${ratingObj[i].rating}</span>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div class="btns">
                            <a onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </a>

                            <a onclick="btnBooking(${i})"  class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </a>
                        </div>
                    </div>
                </div>
        `
    }

    if(ratingObj[i].location.includes(map)){

        box += `
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
                            <span>${ratingObj[i].rating}</span>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div class="btns">
                            <a onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </a>

                            <a onclick="btnBooking(${i})"  class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </a>
                        </div>
                    </div>
                </div>
        `
    }
    
}
restaurantSection.innerHTML = box
let count = ` عرض <span>${restaurantSection.children.length}</span> من <span>${ratingObj.length}</span> مطاعم`;
restaurantCount.innerHTML = count

};
searchLocation();


function searchPrice(){
    let price = document.getElementById('price').value
    let box = '';
    for(let i = 0 ; i < ratingObj.length ; i++){
    if(price === "جميع الاسعار" ){
        box += `
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
                            <span>${ratingObj[i].rating}</span>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div class="btns">
                            <a onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </a>

                            <a onclick="btnBooking(${i})" class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </a>
                        </div>
                    </div>
                </div>
        `
    }

    if(ratingObj[i].price.includes(price)){

        box += `
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
                            <span>${ratingObj[i].rating}</span>
                        </div>

                        <p>${ratingObj[i].dic}</p>

                        <div class="btns">
                            <a onclick="btnDetails(${i})" class="btn-details">
                                <i class="fas fa-info-circle"></i>
                                <span>التفاصيل</span>
                            </a>

                            <a onclick="btnBooking(${i})"  class="btn-booking">
                                <i class="fas fa-calendar-plus"></i>
                                <span>احجز الان</span>
                            </a>
                        </div>
                    </div>
                </div>
        `
    }
    
}
restaurantSection.innerHTML = box
let count = ` عرض <span>${restaurantSection.children.length}</span> من <span>${ratingObj.length}</span> مطاعم`;
restaurantCount.innerHTML = count

// let count = ` عرض <span>${i+1}</span> من <span>${ratingObj.length}</span> مطاعم`;
// restaurantCount.innerHTML = count
};
searchPrice();

// لو كان مسجل دخول هيروح على صفحة الحجز لو مكنش مسجل هيقولوا سجل
function btnBooking(i){
    localStorage.setItem('clickRest' , JSON.stringify(ratingObj[i]))
    if(localStorage.getItem('currentUser')){
        location.assign('../HTML/input-data-user.html')
        
    }else{
        alertMsg.innerHTML = 'يجب عليك تسجيل الدخول اولا'
        alertM.style.display = 'block'
    }
}

// المفروض دي اللي هتاخده على صفحة المطعم
function btnDetails(i){
    let dateRest = JSON.parse(localStorage.getItem('restaurantsArr'))
    let clickRest = dateRest[i]
    console.log(clickRest)
    localStorage.setItem('clickRest' , JSON.stringify(clickRest))
    location.assign('../HTML/Restaurant.html')
    
}

