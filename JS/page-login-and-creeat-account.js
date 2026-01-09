
// هظبط الاليرت هنا

let alertM = document.getElementById('transparent')
let closeAlert = document.getElementById('close-alert')
let alertMsg = document.getElementById('alert-msg')

closeAlert.addEventListener('click', ()=>{
    alertM.style.display = 'none'
})


let loginBtn = document.querySelector('.login-btn');
let loginForm = document.querySelector('.login-form');
let createAccountBtn = document.querySelector('.create-account-btn');
let createAccountForm = document.querySelector('.create-account-form');


function goLogin(){
    if(createAccountBtn.classList.contains('active')){
        createAccountBtn.classList.remove('active')
        createAccountForm.style.display = 'none'
        loginBtn.classList.add('active');
        loginForm.style.display = 'block'
    }
}
function goCreateAccount(){
    if(loginBtn.classList.contains('active')){
        loginBtn.classList.remove('active')
        loginForm.style.display = 'none'
        createAccountBtn.classList.add('active');
        createAccountForm.style.display = 'block'
    }
}

let loginPassword = document.getElementById('login-password');
let btnShowPassLogin = document.querySelector('.btn-show-pass-login');

btnShowPassLogin.addEventListener('click' , ()=>{
    if(loginPassword.type === "password"){
        loginPassword.type = "text"
        btnShowPassLogin.style.color = '#FF6B6B'
    }else{
        loginPassword.type = "password"
        btnShowPassLogin.style.color = 'black'
    }
})


let createPassword = document.getElementById('create-password');
let btnShowPassCreate = document.querySelector('.btn-show-pass-create');
btnShowPassCreate.addEventListener('click' , ()=>{
    if(createPassword.type === "password"){
        createPassword.type = "text"
        btnShowPassCreate.style.color = '#FF6B6B'
    }else{
        createPassword.type = "password"
        btnShowPassCreate.style.color = 'black'
    }
})

let createPassword2 = document.getElementById('create-password-2');
let btnShowPassCreate2 = document.querySelector('.btn-show-pass-create2');
btnShowPassCreate2.addEventListener('click' , ()=>{
    if(createPassword2.type === "password"){
        createPassword2.type = "text"
        btnShowPassCreate2.style.color = '#FF6B6B'
    }else{
        createPassword2.type = "password"
        btnShowPassCreate2.style.color = 'black'
    }
})

// جمع بيانات المستخدم انشاء حساب جديد

let name = document.getElementById('create-name');
let email = document.getElementById('create-email');
let phone = document.getElementById('create-phone');
let password = document.getElementById('create-password');
let password_re = document.getElementById('create-password-2');
let createAccount = document.getElementById('create-account');


let infoUser;

if(localStorage.infoUser != null){
    infoUser = JSON.parse(localStorage.infoUser)
}else{
    infoUser = [];
}

// انشاء الحساب
createAccount.addEventListener('click' , ()=>{
    let checkEmail = JSON.parse(localStorage.getItem('infoUser'))
    

    if(localStorage.infoUser == null){
        if(name.value === ''){
        alertMsg.innerHTML = 'من فضلك لا تترك الاسم فارغ'
        alertM.style.display = 'block'
        return;
    }else if(email.value === '' ){
        alertMsg.innerHTML = 'من فضلك لا تترك البريد الالكتروني فارغ'
        alertM.style.display = 'block'
        return;
    }else if(phone.value === ''){
        alertMsg.innerHTML = 'من فضلك لا تترك الهاتف فارغ'
        alertM.style.display = 'block'
        return;
    }else if( password.value === '' || password_re.value === ''){
        alertMsg.innerHTML = 'من فضلك لا تترك كلمة المرور فارغة'
        alertM.style.display = 'block'
        return;
    }else if(password.value !== password_re.value ){
        alertMsg.innerHTML = 'من فضلك اعد كتابة كلمة المرور الصحيحة'
        alertM.style.display = 'block'
        return;
    }
    let dateUser = new Date().toLocaleDateString();

    let info = {
        name: name.value,
        email:email.value, 
        phone:phone.value,
        password:password.value,
        password_re:password_re.value,
        date:dateUser
    }
    infoUser.push(info)
    localStorage.setItem('infoUser', JSON.stringify(infoUser))
                
    name.value = ''
    email.value = '' 
    phone.value = ''
    password.value = ''
    password_re.value = ''
                
    alertMsg.innerHTML = 'تم انشاء الحساب بنجاح'
    alertM.style.display = 'block'
    
    goLogin()
    }else{
        let checkE = checkEmail.some(e=>e.email === email.value)
        if(name.value === ''){
            alertMsg.innerHTML = 'من فضلك لا تترك الاسم فارغ'
            alertM.style.display = 'block'
            return;
        }else if(email.value === '' ){
            alertMsg.innerHTML = 'من فضلك لا تترك البريد الالكتروني فارغ'
            alertM.style.display = 'block'
            return;
        }else if(phone.value === ''){
            alertMsg.innerHTML = 'من فضلك لا تترك الهاتف فارغ'
            alertM.style.display = 'block'
            return;
        }else if( password.value === '' || password_re.value === ''){
            alertMsg.innerHTML = 'من فضلك لا تترك كلمة المرور فارغة'
            alertM.style.display = 'block'
            return;
        }else if(password.value !== password_re.value ){
            alertMsg.innerHTML = 'من فضلك اعد كتابة كلمة المرور الصحيحة'
            alertM.style.display = 'block'
            return;
        }
        else if(checkE){
            alertMsg.innerHTML = 'هذا البريد مستخدم بالفعل'
            alertM.style.display = 'block'
            return;
        }
        let dateUser = new Date().toLocaleDateString();
    
        let info = {
            name: name.value,
            email:email.value, 
            phone:phone.value,
            password:password.value,
            password_re:password_re.value,
            date:dateUser
        }
        infoUser.push(info)
        localStorage.setItem('infoUser', JSON.stringify(infoUser))
                    
        name.value = ''
        email.value = '' 
        phone.value = ''
        password.value = ''
        password_re.value = ''
                    
        alertMsg.innerHTML = 'تم انشاء الحساب بنجاح'
        alertM.style.display = 'block'
        
        goLogin()
        
    }
    
    
})


// تسجيل الدخول

let user = [];
// if(localStorage.user !== null){
//     user = JSON.parse(localStorage.user)
// }else{
//     user = []
// }

function loginUser(){
    let email = document.querySelector('.two-forms .login-form .login-email input')
    let password = document.querySelector('.two-forms .login-form .login-password input')
    
    let localObject = JSON.parse(localStorage.getItem('infoUser'))
    let checkE = localObject.some(e=>e.email === email.value && e.password === password.value)

    if(email.value === ''){
        alertMsg.innerHTML = 'من فضلك لا تترك البريد الالكتروني فارغ'
        alertM.style.display = 'block'
        return;
    }else if(password.value === ''){
        alertMsg.innerHTML = 'من فضلك لا تترك كلمة المرور فارغة'
        alertM.style.display = 'block'
        return;
    }else if (email.value === 'bahaa.hassan.m@gmail.com' && password.value === 'bahaa'){
        location.assign('../HTML/dashbord.html')
        let user ={
            email:email.value,
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
        return;
    }else if(!checkE){
        alertMsg.innerHTML = 'البريد او كلمة المرور خطأ'
        alertM.style.display = 'block'
        return;
    }else if(checkE){
        alertM.style.display = 'block'
        let user ={
            email:email.value,
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
        alertMsg.innerHTML = 'تم تسجيل الدخول بنجاح'
        location.assign('/index.html')
        return;
    }
    
}


