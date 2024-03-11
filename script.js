const textArray = [
    "aka ecipx",
    "i love counter blox",
    "hellhound.sh"
];
let textIndex = 0;
let charIndex = 0;
const typedTextElement = document.getElementById("typedText");

typedTextElement.style.height = typedTextElement.clientHeight + "px";

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
    const currentText = textArray[textIndex];
    if (charIndex > 0) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        typedTextElement.textContent = '';
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
