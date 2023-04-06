const gallery = document.querySelectorAll(".gallery .gallery__thumb"),
previewBox = document.querySelector(".preview-box");
previewImg = previewBox.querySelector("img");
closeIcon = previewBox.querySelector(".icon");
currentImage = previewBox.querySelector(".current-img");
totalImage = previewBox.querySelector(".total-img");
shadow = document.querySelector(".shadow");
description = previewBox.querySelector(".description");
descriptionTitle = previewBox.querySelector(".dsc_tittle");


window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {

        const tittles = ["Digital Eye","Robot","Smoking Skull","Captain Eagle","Liquid Metal","AI-Generated Robot Women",
                        "Dreaming Girl","Calm Girl","Queen Esprenza","Stylish Clemenza","Thoughtful Lovina Portrait","White Kingfisher"];
        
        const descriptions = [`This piece of art includes a digital depiction of an eye that is extremely detailed. Every aspect of the eye, from the iris to the eyelashes, is reproduced with incredible accuracy, giving the image an astonishing level of realism. The artwork is extremely stylised, and the neon glow coming from the eye gives it an unearthly intensity. The setting is dominated by shades of blue and green, and the colors are rich and vibrant. A further level of depth is added to the piece when the observer gets closer and can make out fascinating patterns and shapes within the iris. The total result is fascinating, capturing the attention of the observer with its remarkable realism and breathtaking beauty.
        This digital eye is a stunning masterpiece whether seen up close or far away.`,

                               `This digital piece of art depicts a robot in a futuristic, extremely detailed representation. The robot is shown

                               with each bolt and rivet depicted in astounding accuracy and detail. Shades of red, blue, and silver predominate in the picture, which is painted in strong, vibrant colors. The robot has a really stylish design with smooth,
                               
                               sharp shapes, as well as a feeling of motion and energy. When the spectator gets closer, they can see more internal elements of the robot, such as complex wiring and circuitry that is visible through the joints and limbs. The entire effect is breathtaking, capturing the viewer's interest with its minute details and startling visual approach. This robot digital art is an absolute masterwork of digital art, whether seen up close or from a distance.`,
                            
                               `This digital piece of art depicts a skull smoke in a stylised, highly detailed portrayal. The

                               Each crack and crevice of the skull are recreated in startling realism and are represented in fine detail. The smoke is depicted in wispy, swirling patterns, giving the setting a sense of motion and vitality.
                               
                               The piece's muted colors and predominant use of gray and black give it a sense of mystery and menace. The spectator can notice additional details, such as elaborate patterns etched into the bone, when they look at the object more closely. With its remarkable visual aesthetic and provocative imagery, the entire impression is menacing, eerie, and incredibly effective`,
                            
                               `An eagle wearing a captain's uniform is stylised and heroically portrayed in this graphic artwork. A depiction of an eagle in flight with wide spread wings and a resolute expression on its face. The scene is predominantly colored in colours of red, white, and blue, highlighting the patriotic and heroic theme of the artwork. The colors are vivid and powerful. a bald eagle's

                               Intricate embroidery and decorations are clearly evident on the chest and sleeves of the uniform, which is quite elaborate. An additional layer of depth and realism is added to the piece when the observer gets closer and notices more features contained within the feathers. `,
                            
                               `An abstract, highly stylized representation of flowing liquid metal appears in this digital artwork. Every droplet and rivulet have been drawn with astounding accuracy, giving the image a great level of detail. The scene is dominated by muted colours of silver, gray, and black, which give the picture a sense of depth and texture. With swirling patterns and eddies visible throughout the sculpture, the metal is shown as though it is in motion, giving it a sense of vitality and fluidity. The spectator may see more features in the metal as they get closer, including minute bubbles and ripples that are visible on the surface.
                               The whole result is captivating, capturing the viewer's interest with its minute intricacies and breathtaking visual appeal.`,
                            
                               `The amazing and meticulous representation of a robotic head in this piece of digital art was produced solely by artificial intelligence. The robotic head's soft features and feminine lines are meant to resemble those of a woman, but its metallic surface gives it a futuristic, even alien aspect. The scenario is depicted in muted colors that emphasize the machine-like nature of the artwork. Silver and gray dominate the picture. When the spectator looks at the image more carefully, they can discern minute details in the robot's appearance, such as delicate etchings on the forehead and cheeks. The whole effect, with its astounding realism and future design, is both intriguing and unsettling. This digital artwork of a robot woman's head created by AI is a genuine work of art.`,
                            
                               `This digital piece of art portrays a young girl lost in meditation in a weird and dreamlike manner. The girl's hair is loosely wrapped about her face, her eyes are closed, and she has her head cocked to one side in the illustration. There is a sense of calm and tranquillity in the landscape because of the soft, muted colors, which are mostly pink and purple. The surreal nature of the painting is heightened by the girl's hazy surroundings, which include hazy silhouettes of trees and flowers in the backdrop. When the viewer focuses more closely, they can discern minute details in the girl's hair and outfit in addition to the image's subtle color and texture changes. The whole result is wonderful.`,
                            
                                `A young girl lost in thought is shown in this quiet and beautiful work of digital painting art. The girl is drawn with delicate, smooth strokes, with her hair hanging loosely around her shoulders and her eyes closed in quiet contemplation. Shades of blue and green predominate in the understated color scheme, which gives the setting a sense of peace and tranquility. The piece's serene atmosphere is enhanced by the girl's hazy surroundings, which include hazy silhouettes of trees and flowers in the backdrop. When the viewer focuses more closely, they can discern minute details in the girl's hair and outfit in addition to the image's subtle color and texture changes. The overall result is beautiful.`,
                            
                                `This work of digital art portrays a queen in all her splendor in a regal and majestic way. The image of Queen Esprenza shows her with her head raised high, radiating power and assurance. She is dressed in a pricey gown with exquisite craftsmanship and eye-catching sparkling gems. Rich, striking hues of deep purple and gold dominate the landscape, lending it a feeling of opulence and power. A castle can be seen in the backdrop, and the queen is surrounded by a rich, well drawn setting that features complex patterns and textures. The queen's clothes and facial features, as well as the complex design of her crown, are all visible as the visitor looks at the sculpture more attentively.`,
                            
                                `This digital painting depicts a close-up of the fashionable and elegant Clemenza. In order to capture Clemenza's easy grace and sophistication, the portrait concentrates on her head and upper torso. She is represented with a soft grin on her face and a small cocked head, radiating poise and self-assurance. Rich, intense hues of deep crimson and gold dominate the landscape, giving it a feeling of wealth and beauty. Clemenza has incredibly precise face features, with fine lines and contours accentuating her eyes, lips, and cheekbones. Her hair is done in a sophisticated updo with ornate accents and a stunning hairpin on display. With its amazing realism and high-end visual flair, the whole impact is breath-taking.`,
                            
                                `This piece of digital art is a portrait of Lovina, a woman with a thoughtful and introspective look. She appears to be in deep meditation and reflection as her chin rests on her palm and her face is inclined slightly to one side. An atmosphere of tranquility and introspection is produced by the scene's muted and subdued color scheme, which is dominated by blue and green tones. Lovina has incredibly precise facial features, with fine lines and curves accentuating her eyes, nose, and lips. Her hair is arranged in loose waves, and the image is given depth and character by the minor details and shading. The whole effect is contemplative and tranquil, capturing the attention of the observer with its deft realism and emotional depth. either when seen closely or distantly.`,
                            
                                `A beautiful white kingfisher bird is shown in this digital artwork on a dark background. The stark and arresting impression is brought about by the stark contrast between the bird's brilliant white feathers and the dark background.
                                With its head inclined to the side and its beady eyes fixed intently on something out of frame, the kingfisher bird is shown in a regal position. The image has a sense of depth and texture thanks to the detailed rendering of the bird's feathers, beak, and eyes. The bird stands out even more against the dramatic contrast thanks to the black background, which draws attention to its shape and attractiveness. The whole impact is strong and hypnotic, captivating the observer with its laser-like concentration and breathtaking realism.`];

        totalImage.textContent = gallery.length;
        let newIndex = i;
        let clickImageIndex;
        gallery[i].onclick = ()=>{
            
            font1Btn = document.querySelector('.font-1');
            font2Btn = document.querySelector('.font-2');
            font3Btn = document.querySelector('.font-3');
            
            clickImageIndex = newIndex;
            console.log(i);
            function preview(){
                currentImage.textContent = newIndex + 1;
                let selectedImageUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImageUrl;
                description.textContent = descriptions[newIndex];
                descriptionTitle.textContent = tittles[newIndex];
                font1Btn.textContent = "A";
                font2Btn.textContent = "A";
                font3Btn.textContent = "A";
            }
            

            

            const nextButton = document.querySelector(".next");
            const prevButton = document.querySelector(".prev");

            if(newIndex == 0){
                prevButton.style.display = "none";
            }

            if(newIndex >= gallery.length-1){
                nextButton.style.display = "none";
            }

            prevButton.onclick = ()=> {
                newIndex--;
                console.log(newIndex);
                if(newIndex == 0){
                    preview();
                    prevButton.style.display = "none";
                }
                else{
                    preview();
                    nextButton.style.display = "block";
                }
            }

            nextButton.onclick = ()=> {
                newIndex++;
                console.log(newIndex);
                if(newIndex >= gallery.length-1){
                    preview();
                    nextButton.style.display = "none";
                }
                else{
                    preview();
                    prevButton.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";

            closeIcon.onclick = ()=>{
                
                newIndex = clickImageIndex;
                nextButton.style.display = "block";
                prevButton.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                font1Btn.textContent = "";
                font2Btn.textContent = "";
                font3Btn.textContent = "";
            }
        }
        
    }
    settingBtn = document.querySelector(".switcher-btn");
    colorSwitcher = document.querySelector(".theme-selector");
    settingBtn.onclick = ()=>{
    colorSwitcher.classList.toggle('active');
    colorButton = document.querySelectorAll(".theme-buttons");
    colorButton.forEach(color => {
        color.addEventListener('click',() => {
            let dataColor = color.getAttribute('data-color');
            let backgroundImage = color.getAttribute('data-background-image');
            let fontColor = color.getAttribute('data-font-color');
            let isRandom = color.getAttribute('data-random');
            if(isRandom == "yes"){
                let bgImages = ["url('images/bg-4.jpg')","url('images/bg-5.jpg')","url('images/bg-6.jpg')"];
                let bgcolors = ["76, 0, 39","27, 38, 44","0,0,0"];
                let fntColor = ["152, 15, 90","187, 225, 250","255, 172, 65"];
                let i = Math.floor(Math.random() * (3 - 0));
                backgroundImage = bgImages[i];
                dataColor = bgcolors[i];
                fontColor = fntColor[i];
            
                
            }
            document.querySelector(':root').style.setProperty('--main-color',dataColor);
            document.querySelector(':root').style.setProperty('--background-image',backgroundImage);
            document.querySelector(':root').style.setProperty('--font-color',fontColor);
            document.querySelector(".sample-header").classList.add("transition");
            colorSwitcher.classList.remove('active');
            colorButton.forEach(color => {
                color.classList.remove('active');
            });
            color.classList.add('active');
        });
    });

    let fontSize = "";
    let h2FontSize = "";
    fontSizeBtn1 = document.querySelector(".font-1");
    fontSizeBtn1.onclick = ()=>{
        fontSize = fontSizeBtn1.getAttribute("data-font-size");
        h2FontSize = fontSizeBtn1.getAttribute("data-h2-font-size");
        document.querySelector(':root').style.setProperty('--font-size',fontSize);
        document.querySelector(':root').style.setProperty('--h2-font-size',h2FontSize);
    }
    fontSizeBtn2 = document.querySelector(".font-2");
    fontSizeBtn2.onclick = ()=>{
        fontSize = fontSizeBtn2.getAttribute("data-font-size");
        h2FontSize = fontSizeBtn2.getAttribute("data-h2-font-size");
        document.querySelector(':root').style.setProperty('--font-size',fontSize);
        document.querySelector(':root').style.setProperty('--h2-font-size',h2FontSize);
    }

    fontSizeBtn3 = document.querySelector(".font-3");
    fontSizeBtn3.onclick = ()=>{
        fontSize = fontSizeBtn3.getAttribute("data-font-size");
        h2FontSize = fontSizeBtn3.getAttribute("data-h2-font-size");
        document.querySelector(':root').style.setProperty('--font-size',fontSize);
        document.querySelector(':root').style.setProperty('--h2-font-size',h2FontSize);
    }

    document.addEventListener("scroll", (event) => {
        document.querySelector(".sample-header").classList.remove("transition");
    });
    

}
}
// colorBtn = document.querySelector(".switcher-btn");
// colorSwitcher = document.querySelector(".theme-selector");
// colorBtn.onclick = ()=>{
//     colorSwitcher.classList.toggle('active');

// }