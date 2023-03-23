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
        
        const descriptions = [`This artwork features a highly detailed digital rendering of an eye. The eye is depicted 
                                in stunning realism, with every detail from the iris to the eyelashes rendered in breathtaking 
                                accuracy. The image is highly stylized, with a neon glow emanating from within the eye, creating 
                                a sense of otherworldly energy. The colors are bright and vivid, with shades of blue and green 
                                dominating the scene. As the viewer looks closer, they can see intricate patterns and designs 
                                within the iris, adding an additional layer of detail to the piece. The overall effect is mesmerizing, 
                                drawing the viewer in and holding their attention with its striking beauty and stunning realism. 
                                Whether viewed up close or from a distance, this digital eye is a true masterpiece of digital art.`,

                               `This digital artwork features a futuristic, highly detailed rendering of a robot. The robot is depicted 
                               in stunning detail, with each bolt and rivet rendered in breathtaking accuracy. The colors are bright and 
                               vivid, with shades of silver, blue, and red dominating the scene. The robot is highly stylized, with sleek, 
                               angular lines and a sense of movement and energy within the image. As the viewer looks closer, they can see 
                               additional details within the robot, including intricate circuitry and wiring visible through the joints and 
                               limbs. The overall effect is stunning, drawing the viewer in and holding their attention with its intricate 
                               details and striking visual style. Whether viewed up close or from a distance, this robot digital art is a 
                               true masterpiece of digital art, showcasing the incredible creativity and technical skill of the artist`,
                            
                               `This digital artwork features a stylized, highly detailed rendering of a skull engulfed in smoke. The 
                               skull is depicted in sharp detail, with each crack and crevice rendered in striking accuracy. The smoke 
                               is portrayed in wispy, swirling patterns, creating a sense of movement and energy within the scene. 
                               The colors are muted, with shades of gray and black dominating the piece, giving the image a sense of 
                               mystery and danger. As the viewer examines the piece more closely, they can see additional details within 
                               the skull, including intricate patterns etched into the bone. The overall effect is dark, haunting, and 
                               highly impactful, drawing the viewer in with its striking visual style and bold imagery. Whether viewed 
                               as a standalone piece or as part of a larger collection, this smoking skull digital art is a true masterpiece 
                               of digital art.`,
                            
                               `This digital artwork features a stylized, heroic depiction of an eagle in a captain's uniform. The eagle is portrayed 
                               in mid-flight, with wings spread wide and a determined look on its face. The colors are bright and bold, with shades 
                               of red, white, and blue dominating the scene, emphasizing the patriotic and heroic theme of the artwork. The eagle's 
                               uniform is highly detailed, with intricate embroidery and medals visible on the chest and sleeves. As the viewer 
                               looks closer, they can see additional details within the feathers, adding an additional layer of depth and realism 
                               to the piece. `,
                            
                               `This digital artwork features a highly stylized, abstract depiction of flowing liquid metal. The image is highly detailed, 
                               with every droplet and rivulet rendered in striking accuracy. The colors are muted, with shades of silver, gray, and black 
                               dominating the scene, giving the image a sense of depth and texture. The metal is depicted as if it is in motion, with 
                               swirling patterns and eddies visible throughout the piece, creating a sense of energy and fluidity. As the viewer looks 
                               closer, they can see additional details within the metal, including tiny bubbles and ripples visible on the surface. 
                               The overall effect is mesmerizing, drawing the viewer in and holding their attention with its intricate details and 
                               stunning visual style. Whether viewed up close or from a distance, this liquid metal digital art is a true masterpiece 
                               of digital art, showcasing the incredible creativity and technical skill of the artist.`,
                            
                               `This digital artwork features a stunning and highly detailed rendering of a robotic head, generated entirely through 
                               the use of artificial intelligence. The robotic head is designed to resemble a woman, with soft features and feminine 
                               lines, yet its metallic surface gives it a futuristic, almost otherworldly appearance. The colors are muted, with shades 
                               of silver and gray dominating the scene, emphasizing the machine-like quality of the piece. As the viewer examines the 
                               image more closely, they can see intricate details within the robot's features, including subtle etchings on the forehead 
                               and cheeks. The overall effect is both captivating and eerie, drawing the viewer in with its stunning realism and futuristic 
                               aesthetic. This AI-generated robot women head digital art is a true masterpiece of digital art, showcasing the incredible 
                               potential of artificial intelligence and the talent of the artist who brought it to life.`,
                            
                               `This digital artwork features a surreal and dreamlike depiction of a young girl lost in thought. The girl is depicted with 
                               her eyes closed, her head tilted to one side, and her hair falling loosely around her face. The colors are soft and muted, 
                               with shades of pink and purple dominating the scene, creating a sense of calm and serenity. The girl's surroundings are 
                               indistinct, with vague outlines of trees and flowers visible in the background, adding to the dreamlike quality of the 
                               piece. As the viewer looks closer, they can see intricate details within the girl's hair and clothing, as well as subtle 
                               variations in color and texture throughout the image. The overall effect is enchanting, drawing the viewer in and evoking 
                               a sense of peaceful introspection.`,
                            
                                `This digital painting art features a serene and peaceful depiction of a young girl lost in contemplation. The girl is 
                                depicted in soft, gentle strokes, with her hair falling loosely around her shoulders, and her eyes closed in peaceful 
                                meditation. The colors are muted, with shades of blue and green dominating the scene, creating a sense of tranquility 
                                and calm. The girl's surroundings are indistinct, with vague outlines of trees and flowers visible in the background, 
                                adding to the peaceful quality of the piece. As the viewer looks closer, they can see intricate details within the girl's 
                                hair and clothing, as well as subtle variations in color and texture throughout the image. The overall effect is enchanting, 
                                drawing the viewer in and evoking a sense of peaceful introspection. Whether viewed as a standalone piece or as part of a 
                                larger collection, this Calm Girl digital painting art is a true masterpiece of digital art, showcasing the incredible 
                                creativity and technical skill of the artist`,
                            
                                `This digital art piece features a regal and majestic depiction of a queen in all her glory. Queen Esprenza is portrayed with 
                                her head held high, exuding strength and confidence. She is adorned in a luxurious gown, with intricate details and sparkling 
                                jewels that catch the eye. The colors are rich and bold, with shades of deep purple and gold dominating the scene, creating a 
                                sense of elegance and royalty. The queen is surrounded by a lush and detailed environment, with a castle visible in the background, 
                                and intricate patterns and textures throughout the image. As the viewer examines the piece more closely, they can see subtle 
                                details in the queen's facial features and clothing, as well as the intricate design of her crown. The overall effect is 
                                breathtaking, drawing the viewer in with its stunning realism and awe-inspiring visual style.`,
                            
                                `This digital painting art is a close-up portrait of the stylish and chic woman named Clemenza. The portrait focuses on Clemenza's 
                                head and upper body, capturing her effortless grace and sophistication. She is portrayed with a gentle smile on her face and her 
                                head tilted slightly, exuding confidence and poise. The colors are rich and bold, with shades of deep red and gold dominating the 
                                scene, creating a sense of glamour and opulence. Clemenza's facial features are meticulously detailed, with intricate lines and 
                                contours highlighting her eyes, lips, and cheekbones. Her hair is styled in an elegant updo, with intricate details and a beautiful 
                                hairpin visible. The overall effect is breathtaking, drawing the viewer in with its stunning realism and high-end visual style.`,
                            
                                `This digital painting art is a portrait of a woman named Lovina, depicted with a pensive and introspective expression. Her face 
                                is turned slightly to the side, with her chin resting on her hand, conveying a sense of deep thought and reflection. The colors 
                                are muted and subdued, with shades of blue and green dominating the scene, creating a calm and contemplative mood. Lovina's facial 
                                features are meticulously detailed, with intricate lines and contours highlighting her eyes, nose, and lips. Her hair is styled in 
                                loose waves, with subtle details and shading adding depth and texture to the image. The overall effect is serene and introspective, 
                                drawing the viewer in with its subtle realism and emotional depth. Whether viewed up close or from a distance, this Thoughtful 
                                Lovina Portrait digital painting art is a true masterpiece of digital art.`,
                            
                                `This digital artwork features a stunning white kingfisher bird depicted against a black background. The contrast 
                               between the bright white feathers of the bird and the deep black background creates a dramatic and striking effect. 
                               The kingfisher bird is portrayed in a majestic pose, with its head turned to the side and its beady eyes focused 
                               intently on something out of frame. The intricate details of the bird's feathers, beak, and eyes are meticulously 
                               rendered, creating a sense of depth and texture in the image. The black background serves to emphasize the bird's 
                               form and beauty, making it stand out even more against the stark contrast. The overall effect is powerful and 
                               mesmerizing, drawing the viewer in with its intense focus and stunning realism. Whether viewed up close or from 
                               a distance, this White Kingfisher Digital Artwork with Black Background is a true masterpiece of digital art, 
                               showcasing the incredible talent and technical skill of the artist.`]

        totalImage.textContent = gallery.length;
        let newIndex = i;
        let clickImageIndex;
        gallery[i].onclick = ()=>{

            
            clickImageIndex = newIndex;
            console.log(i);
            function preview(){
                currentImage.textContent = newIndex + 1;
                let selectedImageUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImageUrl;
                description.textContent = descriptions[newIndex];
                descriptionTitle.textContent = tittles[newIndex];
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
            document.querySelector(':root').style.setProperty('--main-color',dataColor);
            document.querySelector(':root').style.setProperty('--background-image',backgroundImage);
            document.querySelector(':root').style.setProperty('--font-color',fontColor);
            document.querySelector(".sample-header").classList.add("transition");
            colorSwitcher.classList.remove('active');
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