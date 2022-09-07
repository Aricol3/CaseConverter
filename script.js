let textArea = document.querySelector("textarea");

function upperCase() {
    textArea.value=textArea.value.toUpperCase();
}

function lowCase() {
    textArea.value=textArea.value.toLowerCase();
}

function properCase() {
    let words = textArea.value.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    textArea.value = words.join(" ");
}

function sentenceCase() {
    let text = textArea.value;
    let sentenceStart = true;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let ch = text.charAt(i);

        if (sentenceStart && ch !== " ") {
            ch = ch.toUpperCase();
            sentenceStart = false;
        } else {
            ch = ch.toLowerCase();
        }
        if (ch === ".") {
            sentenceStart = true;
        }

        result += ch;
    }
    textArea.value = result;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function saveText(){
    let textArea = document.querySelector("textarea");
    download("text.txt",textArea.value);
}