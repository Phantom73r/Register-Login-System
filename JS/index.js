var nameInput=document.querySelector('#name')
var emailInput=document.querySelector('#signUpEmail')
var passwordInput=document.querySelector('#signUpPassword')
var signInEmail=document.querySelector('#signInEmail')
var signInPassword=document.querySelector('#signInPassword')
var submitBtn=document.querySelector('#submitBtn')
var registerAlert=document.querySelector('.alert')
var formAlert=document.querySelector('#formAlert')
var loginBtn=document.getElementById('loginBtn')
var signInPage=document.getElementById('signIn')
var signUpPage=document.querySelector('#signUpPage')
var signUpBtn=document.getElementById('signUpBtn')
var signInBtn=document.querySelector('#signInBtn')
var failed=document.querySelector('#failed')
var userExists=document.getElementById('userExist')
var navbar=document.querySelector('#navBar')
var homePage=document.querySelector('#homePage')



if(localStorage.getItem('users')){
      var users=JSON.parse(localStorage.getItem('users'))

       
 
       
}else{
       users=[]
}
function setData(){

if(nameInput.classList.contains('is-valid')&&emailInput.classList.contains('is-valid')&&passwordInput.classList.contains('is-valid')){
     
       var userInfo={
              username:nameInput.value,
              email:emailInput.value,
              password:passwordInput.value
       }

       for(let i=0;i<users.length;i++){
if(userInfo.email.toLowerCase()==users[i].email.toLowerCase()){
       userExists.classList.remove('d-none')
       return false
}

       }
       users.push(userInfo)
              localStorage.setItem('users', JSON.stringify(users))
        
  registerAlert.classList.remove('d-none')
  nameInput.value=''
  emailInput.value=''
  passwordInput.value=''
  nameInput.classList.remove('is-valid')
  emailInput.classList.remove('is-valid')
  passwordInput.classList.remove('is-valid')
  signInPage.classList.remove('d-none')
  signUpPage.classList.add('d-none')
  failed.classList.add('d-none')

}


else{
       formAlert.classList.remove('d-none')    
       console.log('not valid');
       
}
}


submitBtn.addEventListener('click', setData)



function validateForm(element){
var regex={
       name: /^[A-Za-z]{3,20}\s[A-Za-z]{3,20}/,
       signUpEmail: /^\w{2,40}(@)(gmail|yahoo|email)(.com)$/,
       signUpPassword:/^\w{5,20}(@|#|%|&)\w{0,10}?$/
}
if(regex[element.id].test(element.value)){

element.classList.add('is-valid')
element.classList.remove('is-invalid')


} else{
       element.classList.remove('is-valid')
       element.classList.add('is-invalid')
}

}

signUpBtn.addEventListener('click',()=>{
       signInPage.classList.add('d-none')
       signUpPage.classList.remove('d-none')
}

)


loginBtn.addEventListener('click',()=>{
signInPage.classList.remove('d-none')
signUpPage.classList.add('d-none')

})

signInBtn.addEventListener('click',()=>{
       var user={
              email:signInEmail.value.trim(),
              password:signInPassword.value.trim()
       }
       for(let i=0;i<users.length;i++){
  if(user.email.toLowerCase()==users[i].email.toLowerCase() && user.password==users[i].password){
       localStorage.setItem('logged',users[i].username)
       window.location='./home.html'
       console.log('working');

  }else{
   
       failed.classList.remove('d-none')
  }
      
 }
       }
       
        ) 




