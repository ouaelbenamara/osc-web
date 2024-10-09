        // First slide:

const prevSpeakerBtn = document.getElementById('prev-SPB');
const nextSpeakerBtn = document.getElementById('next-SPB');
const speakerContainer = document.querySelector('.speaker-container');
const speakerContainerSlider = document.querySelector('.speaker-container #slider');
const speakersCards = document.querySelectorAll('.speaker-container #slider .speaker-card');

let cardsnbr2 = speakersCards.length;



// Variables to track the current position of slides
let speakerPosition = 0;
let previewPosition = 0;


// Get the root element (or any element that the CSS variable is applied to)
const root = document.documentElement;


// Use getComputedStyle to get the value of the variable
const rootStyles = getComputedStyle(root);


// Access the value of the CSS variable
const gapSlider = rootStyles.getPropertyValue('--gap-slider').trim();
const cardWidth = rootStyles.getPropertyValue('--card-w').trim();


let SliderShift = parseInt(gapSlider.replace("px", ""))+parseInt(cardWidth.replace("px", ""));

let track = 0;

let i2 = cardsnbr2 - 4;



nextSpeakerBtn.addEventListener("click", () => {

    /* if(track == SliderShift* cardsnbr2 /2 + SliderShift*2 ){
        return;
    } */


        if(i2 == -1){

            return;
        }

    speakerContainerSlider.style.transform = `translateX(-${(track + SliderShift) + "px"})`;
    track += SliderShift;

   /*  console.log("+" + track) */

   console.log(i2);

    i2 = i2 - 1;
})



prevSpeakerBtn.addEventListener("click", () => {

if(track > 0 ){


    speakerContainerSlider.style.transform = `translateX(-${(track - SliderShift) + "px"})`;
    track -= SliderShift;
     
 

    console.log(i2);
    i2 = i2 + 1; 


}



})









// Second Slide:

const prevPreviewBtn = document.getElementById('prev-pr');
const nextPreviewBtn = document.getElementById('next_pr');

const previewContainer = document.querySelector('.preview-container');
const PreviewContainerSlider = document.querySelector('#Slider22');
const PreviewCards = document.querySelectorAll('.preview-slide');

let screenwidth = window.screenwidth;

let cardsnbr = PreviewCards.length;


// Access the value of the CSS variable
const gapSlider2 = rootStyles.getPropertyValue('--gap-slider2').trim();
const cardWidth2 = rootStyles.getPropertyValue('--card-w2').trim();


let SliderShift2 = parseInt(gapSlider2.replace("px", ""))+parseInt(cardWidth2.replace("px", ""));
let track2 = 0;
let i = cardsnbr - 4;



prevPreviewBtn.addEventListener("click", () => {

/*     if(track2 >= SliderShift2*cardsnbr /2 + SliderShift2 ){
        
        return;
    }
 */

    if(i == -3){

        return;
            

    }

    PreviewContainerSlider.style.transform = `translateX(-${(track2 + SliderShift2) + "px"})`;
    track2 += SliderShift2;
    
    i = i - 1;


  /*   console.log("+" + track2);
    console.log(SliderShift2*PreviewCards.length/2);
 */

    console.log(i);
});

nextPreviewBtn.addEventListener("click", () => {

   
    
    if(i < cardsnbr - 4){

    PreviewContainerSlider.style.transform = `translateX(-${(track2 - SliderShift2) + "px"})`;
    track2 -= SliderShift2;
     
    console.log("-" + track2);
    console.log(SliderShift2);

    
    i = i + 1;

    console.log(i);

 } 

});








