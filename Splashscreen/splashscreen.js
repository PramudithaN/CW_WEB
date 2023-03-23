// let intro = document.querySelector('intro');
// let logo = document.querySelector('.logo-header');
// let logoSpan = document.querySelector('.logo');

// window.addEventListener('DOMContentLoaded',()=>{
//     setTimeout(()=>{
//         logoSpan.forEach((span, idx)=>{
//             setTimeout(()=>{
//                 span.classList.add('active');
//             }, (idx +1)*400)
//         });

//         setTimeout(()=>{
//             logoSpan.forEach((span, idx)=>{
//                 setTimeout(()=>{
//                     span.classList.remove('active');
//                     span.classList.add('fade');
//                 }, (idx +1)*50)
//             })
//         },200);

//         setTimeout(()=>{
//             intro.style.top = '-100vh';
//         },2300)
//     })
// })

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

