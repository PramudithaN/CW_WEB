const gallery = document.querySelectorAll(".gallery .gallery__thumb"),
previewBox = document.querySelector(".preview-box");
previewImg = previewBox.querySelector("img");
closeIcon = previewBox.querySelector(".icon");
currentImage = previewBox.querySelector(".current-img");
totalImage = previewBox.querySelector(".total-img");
shadow = document.querySelector(".shadow");
description = previewBox.querySelector(".description");
descriptionTitle = previewBox.querySelector(".dsc_tittle");


// colorBtn = document.querySelector(".switcher-btn");
// colorSwitcher = document.querySelector(".theme-selector");
// colorBtn.onclick = ()=>{
//     colorSwitcher.classList.toggle('active');

// }