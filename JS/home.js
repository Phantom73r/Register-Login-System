var newUser=localStorage.getItem('logged');
var WelcomeMessage=document.getElementById('welcomeMessage')
var logOutBtn=document.getElementById('logOut')



if(newUser){
           WelcomeMessage.innerHTML=`Welcome, ${newUser}`
}else{
    window.location='./index.html'
}


logOutBtn.addEventListener('click',()=> {
    localStorage.removeItem('logged')
window.location='./index.html'
})
