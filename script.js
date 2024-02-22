const textArray = [
    "#1 PC Checker",
    "hellhound.sh on top",
    "arch linux user"
];
let textIndex = 0;
let charIndex = 0;
const typedTextElement = document.getElementById("typedText");

function type() {
    const currentText = textArray[textIndex];
    if (charIndex < currentText.length) {
        typedTextElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); 
    } else {
        setTimeout(erase, 1000); 
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); 
    } else {
        textIndex = (textIndex + 1) % textArray.length; 
        setTimeout(type, 1000);
    }
}


type();

const overlay = document.getElementById("overlay");
const backgroundVideo = document.getElementById("background-video");

overlay.addEventListener("click", () => {
    overlay.style.display = "none"; 
    backgroundVideo.play(); 
});


