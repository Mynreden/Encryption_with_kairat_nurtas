var inputDe = document.getElementById('inputDe');
var shiftDe = document.getElementById('shiftDe');
var submitButtonDe = document.getElementById('submitDe');
var copyButtonDe = document.getElementById('copyTextDe');
var outputDe = document.getElementById('outputDe');

copyButtonDe.addEventListener('click', function () {

    /* Select the text field */
    outputDe.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + outputDe.value);
});

submitButtonDe.addEventListener('click', function () {
    var encryptedText = "";
    var shiftValue = parseInt(shiftDe.value, 10);
    var origin = inputDe.value;
    var textLength = inputDe.value.length;
    for (var i = 0; i < textLength; i ++){
        if (origin.charAt(i) >= 'a' && origin.charAt(i) <= 'z'){
            var encryptedLetter = String.fromCharCode((origin.charCodeAt(i) - 97 - shiftValue % 26 + 26) % 26 + 97);
        }
        else if (origin.charAt(i) >= 'A' && origin.charAt(i) <= 'Z'){
            var encryptedLetter = String.fromCharCode((origin.charCodeAt(i) - 65 - shiftValue % 26 + 26) % 26 + 65);
        }
        else {
            var encryptedLetter = origin.charAt(i);
        }
        encryptedText += encryptedLetter;
    }
    outputDe.innerHTML = encryptedText;
});
