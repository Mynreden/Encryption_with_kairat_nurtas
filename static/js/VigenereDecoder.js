
var inputDe = document.getElementById('inputDe');
var shiftDe = document.getElementById('shiftDe');
var submitButtonDe = document.getElementById('submitDe');
var copyButtonDe = document.getElementById('copyTextDe');
var outputDe = document.getElementById('outputDe');

copyButtonDe.addEventListener('click', function () {
    outputDe.select();
    document.execCommand("copy");
    alert("Copied the text: " + outputDe.value);
});

submitButtonDe.addEventListener('click', function () {
    var encryptedText = "";
    var shiftWord = shiftDe.value;
    var shiftWordLen = shiftWord.length;
    var origin = inputDe.value;
    var textLength = origin.length;
    for (var i = 0; i < textLength; i ++){
        var j = i % shiftWordLen;
        if (shiftWord.charAt(j) >= 'a' && shiftWord.charAt(j) <= 'z'){
            var shiftValue = shiftWord.charCodeAt(j) - 97;
        }
        else if (shiftWord.charAt(j) >= '0' && shiftWord.charAt(j) <= '9'){
            var shiftValue = parseInt(shiftWord.charAt(j), 10);
        }
        else if (shiftWord.charAt(j) >= 'A' && shiftWord.charAt(j) <= 'Z'){
            var shiftValue = shiftWord.charCodeAt(j) - 65;
        }
        else {
            var shiftValue = 0;
        }
        if (origin.charAt(i) >= 'a' && origin.charAt(i) <= 'z'){
            var encryptedLetter = String.fromCharCode((origin.charCodeAt(i) - 97 - shiftValue + 26) % 26 + 97);
        }
        else if (origin.charAt(i) >= 'A' && origin.charAt(i) <= 'Z'){
            var encryptedLetter = String.fromCharCode((origin.charCodeAt(i) - 65 - shiftValue + 26) % 26 + 65);
        }
        else {
            var encryptedLetter = origin.charAt(i);
        }
        encryptedText += encryptedLetter;
    }
    outputDe.innerHTML = encryptedText;
});



