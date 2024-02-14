const textarea = $('.term');
const startButton = $('.start-button');

function displayText(text, color = "#ffffff", fontSize = "20px", newLine = true) {
    const span = $("<span>").css({
        "color": color,
        "font-size": fontSize
    });
    if (newLine) {
        span.append("<br>");
    }
    textarea.append(span);
    return typeText(span, text);
}

function typeText(element, text) {
    return new Promise(resolve => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                element.append(text[index]);
                index++;
            } else {
                clearInterval(typingInterval);
                resolve();
            }
        }, 20);
    });
}

async function backspaceText(currentText, targetText) {
    const rootPrompt = "root@kali: ";
    const initialText = rootPrompt + currentText;
    const targetLength = targetText.length + rootPrompt.length;

    return new Promise(resolve => {
        const backspaceInterval = setInterval(() => {
            if (initialText.length > targetLength) {
                currentText = currentText.slice(0, -1);
                textarea.html("<span style='color: #ff0000; font-size: 20px;'>" + rootPrompt + "</span><span style='color: #ffffff; font-size: 20px;'>" + currentText + "</span>");
            } else {
                clearInterval(backspaceInterval);
                resolve();
            }
        }, 20);
    });
}

async function runKaliSequence() {
    await displayText("root@kali: ", "#ff0000", "20px");
    await new Promise(resolve => setTimeout(resolve, 1000));
    const commandOutput = "The Last Dance is dogshit";
    await displayText(commandOutput, "#ffffff", "20px", false);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await backspaceText(commandOutput, "root@kali: ");
    playAudio('audio.mp3');
}

function playAudio(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

startButton.on('click', function () {
    startButton.hide();
    playAudio('audio.mp3');
    runKaliSequence();
    startButton.prop('disabled', true);
});
