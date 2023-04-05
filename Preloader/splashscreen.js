

let countdown = document.getElementById("countdown");
let seconds = 4;
let timer = setInterval(()=>{
    seconds--;
    countdown.innerHTML = seconds;
    if(seconds== 0){

        clearInterval(timer);
        window.location.href = "../MainPage/Home.html";
        // href="../MainPage/Home.html";
    }
    },1000);

