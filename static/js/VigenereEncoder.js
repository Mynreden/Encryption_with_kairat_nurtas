var inputEn = document.getElementById('inputEn');
var shiftEn = document.getElementById('shiftEn');
var submitButtonEn = document.getElementById('submitEn');
var copyButtonEn = document.getElementById('copyTextEn');
var outputEn = document.getElementById('outputEn');



copyButtonEn.addEventListener('click', function () {
    outputEn.select();
    document.execCommand("copy");
    alert("Copied the text: " + outputEn.value);
});

submitButtonEn.addEventListener('click', function () {
    var encryptedText = "";
    var shiftWord = shiftEn.value;
    var shiftWordLen = shiftWord.length;
    var origin = inputEn.value;
    var textLength = origin.length;
    for (var i = 0; i < textLength; i ++){
        var j = i % shiftWordLen;
        if (shiftWord.charAt(j) >= 'a' && shiftWord.charAt(j) <= 'z'){
            var shiftValue = shiftWord.charCodeAt(j) - 97;
        }
        else if (shiftWord.charAt(j) >= 'A' && shiftWord.charAt(j) <= 'Z'){
            var shiftValue = shiftWord.charCodeAt(j) - 65;
        }
        else if (shiftWord.charAt(j) >= '0' && shiftWord.charAt(j) <= '9'){
            var shiftValue = parseInt(shiftWord.charAt(j), 10);
        }
        else {
            var shiftValue = 0;
        }
        if (origin.charAt(i) >= 'a' && origin.charAt(i) <= 'z'){
            var encryptedLetter = String.fromCharCode((origin.charCodeAt(i) - 97 + shiftValue) % 26 + 97);
        }
        else if (origin.charAt(i) >= 'A' && origin.charAt(i) <= 'Z'){
            var encryptedLetter = String.fromCharCode((origin.charCodeAt(i) - 65 + shiftValue) % 26 + 65);
        }
        else {
            var encryptedLetter = origin.charAt(i);
        }
        encryptedText += encryptedLetter;
    }
    outputEn.innerHTML = encryptedText;
});
