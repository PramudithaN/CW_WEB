
// page selecttion
let digitalArt = document.querySelector(".digital-art");
let handdrawn = document.querySelector(".hand-drawn");
let aiArt = document.querySelector(".AI-art");
let aestheticArt = document.querySelector(".Aesthetic-art");
let gallery = document.querySelector('.gallery');
let shop = document.querySelector('.shop');
let quiz = document.querySelector('.quiz');
let sitemap = document.querySelector('.sitemap');
let comment = document.querySelector('.comment');
let aboutUs = document.querySelector('.contact-us');
let buy = document.querySelector('.buy');

let mainText = document.querySelector(".main-text");
let mainLine = document.querySelectorAll(".main-line");
let contentArc = document.querySelector(".content-arc");
let text = document.querySelectorAll(".text");
let arc = document.querySelectorAll(".arc");
let circle = document.querySelectorAll(".circle");
let line = document.querySelectorAll(".line");


// hover effects
digitalArt.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#4E9F3D');
    mainLine[0].style.setProperty('stroke','#4E9F3D');
    contentArc.style.setProperty('stroke','#4E9F3D');
    text[3].style.setProperty('fill','#4E9F3D');
    arc[2].style.setProperty('stroke','#4E9F3D');
    circle[0].style.setProperty('fill','#4E9F3D');
    circle[1].style.setProperty('fill','#4E9F3D');
});
digitalArt.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    contentArc.style.setProperty('stroke','white');
    text[3].style.setProperty('fill','white');
    arc[2].style.setProperty('stroke','white');
    circle[0].style.setProperty('fill','white');
    circle[1].style.setProperty('fill','white');
});


handdrawn.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#00A8CC');
    mainLine[0].style.setProperty('stroke','#00A8CC');
    contentArc.style.setProperty('stroke','#00A8CC');
    text[4].style.setProperty('fill','#00A8CC');
    text[5].style.setProperty('fill','#00A8CC');
    arc[3].style.setProperty('stroke','#00A8CC');
    circle[0].style.setProperty('fill','#00A8CC');
    circle[1].style.setProperty('fill','#00A8CC');
});
handdrawn.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    contentArc.style.setProperty('stroke','white');
    text[4].style.setProperty('fill','white');
    text[5].style.setProperty('fill','white');
    arc[3].style.setProperty('stroke','white');
    circle[0].style.setProperty('fill','white');
    circle[1].style.setProperty('fill','white');
});

aiArt.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#C147E9');
    mainLine[0].style.setProperty('stroke','#C147E9');
    contentArc.style.setProperty('stroke','#C147E9');
    text[2].style.setProperty('fill','#C147E9');
    arc[1].style.setProperty('stroke','#C147E9');
    circle[0].style.setProperty('fill','#C147E9');
    circle[1].style.setProperty('fill','#C147E9');
});
aiArt.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    contentArc.style.setProperty('stroke','white');
    text[2].style.setProperty('fill','white');
    arc[1].style.setProperty('stroke','white');
    circle[0].style.setProperty('fill','white');
    circle[1].style.setProperty('fill','white');
});

aestheticArt.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#E80F88');
    mainLine[0].style.setProperty('stroke','#E80F88');
    contentArc.style.setProperty('stroke','#E80F88');
    text[0].style.setProperty('fill','#E80F88');
    text[1].style.setProperty('fill','#E80F88');
    arc[0].style.setProperty('stroke','#E80F88');
    circle[0].style.setProperty('fill','#E80F88');
    circle[1].style.setProperty('fill','#E80F88');
});
aestheticArt.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    contentArc.style.setProperty('stroke','white');
    text[0].style.setProperty('fill','white');
    text[1].style.setProperty('fill','white');
    arc[0].style.setProperty('stroke','white');
    circle[0].style.setProperty('fill','white');
    circle[1].style.setProperty('fill','white');
});

gallery.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#00A8CC');
    mainLine[0].style.setProperty('stroke','#00A8CC');
    mainLine[1].style.setProperty('stroke','#00A8CC');
    mainLine[2].style.setProperty('stroke','#00A8CC');
    text[6].style.setProperty('fill','#00A8CC');
    arc[4].style.setProperty('stroke','#00A8CC');
    circle[1].style.setProperty('fill','#00A8CC');
    circle[2].style.setProperty('fill','#00A8CC');
    circle[3].style.setProperty('fill','#00A8CC');
});
gallery.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    mainLine[2].style.setProperty('stroke','white');
    text[6].style.setProperty('fill','white');
    arc[4].style.setProperty('stroke','white');
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');
    circle[3].style.setProperty('fill','white');
});


shop.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#E80F88');
    mainLine[0].style.setProperty('stroke','#E80F88');
    mainLine[1].style.setProperty('stroke','#E80F88');
    text[7].style.setProperty('fill','#E80F88');
    arc[5].style.setProperty('stroke','#E80F88');
    circle[1].style.setProperty('fill','#E80F88');
    circle[2].style.setProperty('fill','#E80F88');
});
shop.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    text[7].style.setProperty('fill','white');
    arc[5].style.setProperty('stroke','white');
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');

});

buy.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#E80F88');
    mainLine[0].style.setProperty('stroke','#E80F88');
    mainLine[1].style.setProperty('stroke','#E80F88');
    line[0].style.setProperty('stroke','#E80F88');
    text[7].style.setProperty('fill','#E80F88');
    text[12].style.setProperty('fill','#E80F88');
    arc[5].style.setProperty('stroke','#E80F88');
    circle[1].style.setProperty('fill','#E80F88');
    circle[2].style.setProperty('fill','#E80F88');
});
buy.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    line[0].style.setProperty('stroke','white');
    text[7].style.setProperty('fill','white');
    text[12].style.setProperty('fill','white');
    arc[5].style.setProperty('stroke','white');
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');

});

quiz.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#4E9F3D');
    mainLine[0].style.setProperty('stroke','#4E9F3D');
    mainLine[1].style.setProperty('stroke','#4E9F3D');
    mainLine[2].style.setProperty('stroke','#4E9F3D');
    mainLine[3].style.setProperty('stroke','#4E9F3D');
    text[8].style.setProperty('fill','#4E9F3D');
    arc[6].style.setProperty('stroke','#4E9F3D');
    circle[1].style.setProperty('fill','#4E9F3D');
    circle[2].style.setProperty('fill','#4E9F3D');
    circle[3].style.setProperty('fill','#4E9F3D');
    circle[4].style.setProperty('fill','#4E9F3D');
});
quiz.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    mainLine[2].style.setProperty('stroke','white');
    mainLine[3].style.setProperty('stroke','white');
    text[8].style.setProperty('fill','white');
    arc[6].style.setProperty('stroke','white');
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');
    circle[3].style.setProperty('fill','white');
    circle[4].style.setProperty('fill','white');

});

sitemap.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#00A8CC');
    mainLine[0].style.setProperty('stroke','#00A8CC');
    mainLine[1].style.setProperty('stroke','#00A8CC');
    mainLine[2].style.setProperty('stroke','#00A8CC');
    mainLine[3].style.setProperty('stroke','#00A8CC');
    text[10].style.setProperty('fill','#00A8CC');
    arc[8].style.setProperty('stroke','#00A8CC');
    circle[1].style.setProperty('fill','#00A8CC');
    circle[2].style.setProperty('fill','#00A8CC');
    circle[3].style.setProperty('fill','#00A8CC');
    circle[4].style.setProperty('fill','#00A8CC');
});
sitemap.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    mainLine[2].style.setProperty('stroke','white');
    mainLine[3].style.setProperty('stroke','white');
    text[10].style.setProperty('fill','white');
    arc[8].style.setProperty('stroke','white'); 
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');
    circle[3].style.setProperty('fill','white');
    circle[4].style.setProperty('fill','white');
});

comment.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#C147E9');
    mainLine[0].style.setProperty('stroke','#C147E9');
    mainLine[1].style.setProperty('stroke','#C147E9');
    mainLine[2].style.setProperty('stroke','#C147E9');
    mainLine[3].style.setProperty('stroke','#C147E9');
    mainLine[4].style.setProperty('stroke','#C147E9');
    text[9].style.setProperty('fill','#C147E9');
    arc[7].style.setProperty('stroke','#C147E9');
    circle[1].style.setProperty('fill','#C147E9');
    circle[2].style.setProperty('fill','#C147E9');
    circle[3].style.setProperty('fill','#C147E9');
    circle[4].style.setProperty('fill','#C147E9');
    circle[5].style.setProperty('fill','#C147E9');
});
comment.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    mainLine[2].style.setProperty('stroke','white');
    mainLine[3].style.setProperty('stroke','white');
    mainLine[4].style.setProperty('stroke','white');
    text[9].style.setProperty('fill','white');
    arc[7].style.setProperty('stroke','white');
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');
    circle[3].style.setProperty('fill','white');
    circle[4].style.setProperty('fill','white');
    circle[5].style.setProperty('fill','white');
});

aboutUs.addEventListener('mouseenter',()=> {
    mainText.style.setProperty('fill','#4E9F3D');
    mainLine[0].style.setProperty('stroke','#4E9F3D');
    mainLine[1].style.setProperty('stroke','#4E9F3D');
    mainLine[2].style.setProperty('stroke','#4E9F3D');
    mainLine[3].style.setProperty('stroke','#4E9F3D');
    mainLine[4].style.setProperty('stroke','#4E9F3D');
    mainLine[5].style.setProperty('stroke','#4E9F3D');
    text[11].style.setProperty('fill','#4E9F3D');
    arc[9].style.setProperty('stroke','#4E9F3D');
    circle[1].style.setProperty('fill','#4E9F3D');
    circle[2].style.setProperty('fill','#4E9F3D');
    circle[3].style.setProperty('fill','#4E9F3D');
    circle[4].style.setProperty('fill','#4E9F3D');
    circle[5].style.setProperty('fill','#4E9F3D');
    circle[6].style.setProperty('fill','#4E9F3D');
});
aboutUs.addEventListener('mouseleave',()=> {
    mainText.style.setProperty('fill','white');
    mainLine[0].style.setProperty('stroke','white');
    mainLine[1].style.setProperty('stroke','white');
    mainLine[2].style.setProperty('stroke','white');
    mainLine[3].style.setProperty('stroke','white');
    mainLine[4].style.setProperty('stroke','white');
    mainLine[5].style.setProperty('stroke','white');
    text[11].style.setProperty('fill','white');
    arc[9].style.setProperty('stroke','white');
    circle[1].style.setProperty('fill','white');
    circle[2].style.setProperty('fill','white');
    circle[3].style.setProperty('fill','white');
    circle[4].style.setProperty('fill','white');
    circle[5].style.setProperty('fill','white');
    circle[6].style.setProperty('fill','white');
});


