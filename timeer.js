const startingminutes = 1;
var time = startingminutes * 60;
console.log(window);
const countdownEl=document.getElementById('countdown');
//  console.log(countdownEl)
let ram = setInterval(() => {
    
    if (time==0) {clearInterval(ram)
        window.location.assign(dead.html)
        
    }

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ?  '0' + seconds : seconds;

    countdownEl.innerHTML =  `${minutes}:${seconds}`;
    time--;
    // console.log(time)
}, 1000);
function colorCheck()
{
    let answer = document.getElementById("login").value.toUpperCase();
    answer=answer.split(" ").join("");
    if(answer=="REBECCAPURPLE")
      document.getElementById("link").setAttribute("href","/end.html")
       else
       document.getElementById("link").setAttribute("href","/dead.html")

}
alert("I knew you wouldn’t resist a mental challenge. But even with your big brain, you couldn’t realise that I had set a trap for you and you fell right in! It was a facade, and the bomb I’ve planted activates as soon as you enter the antidote. There’s no escape, the bomb will explode in 10 minutes and your world will witness destruction never seen before!")