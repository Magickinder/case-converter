let content = document.querySelector("textarea");

let toUpperCase = document.getElementById("upper-case");
toUpperCase.addEventListener("click", convertToUpperCase);

let toLowerCase = document.getElementById("lower-case");
toLowerCase.addEventListener("click", convertToLowerCase);

let toProperCase = document.getElementById("proper-case");
toProperCase.addEventListener("click", convertToProperCase);

let toSentenceCase = document.getElementById("sentence-case");
toSentenceCase.addEventListener("click", convertToSentenceCase);

//let saveToFile = document.getElementById("save-text-file");
//saveToFile.addEventListener("click", download("text.txt", content.value));

function convertToUpperCase(){
    let converted = content.value.toUpperCase();
    content.value = converted;
}

function convertToLowerCase(){
    let converted = content.value.toLowerCase();
    content.value = converted;
}

function convertToProperCase(){
    const splittedText = content.value.split(" ");
    content.value = content.value.toLowerCase();

    for(let i = 0; i < splittedText.length; i++){
        splittedText[i] = splittedText[i].charAt(0).toUpperCase() + splittedText[i].slice(1);
    }

    content.value = splittedText.join(" ");
}

function convertToSentenceCase(){
    content.value = content.value.toLowerCase();
    const splittedText = content.value.split(".");

    // For the first sentence
    splittedText[0] = splittedText[0].charAt(0).toUpperCase() + splittedText[0].slice(1);

    // For the rest because first sign is " "
    for(let i = 1; i < splittedText.length - 1; i++){
        splittedText[i] = " " + splittedText[i].charAt(1).toUpperCase() + splittedText[i].slice(2);
    }

    content.value = splittedText.join(".");
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
