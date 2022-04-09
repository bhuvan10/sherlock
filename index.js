function func1(){
    let password = document.getElementById("login").value;
    console.log(password);
    if(password.toUpperCase()=="HIKE")
     document.getElementById("link").setAttribute('href','/anti.html')
     else
    document.getElementById("link").setAttribute('href','/dead.html')
}