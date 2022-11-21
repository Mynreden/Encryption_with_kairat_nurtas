var inputEn = document.getElementById('inputEn');
var shiftEn = document.getElementById('shiftEn');
var submitButtonEn = document.getElementById('submitEn');
var copyButtonEn = document.getElementById('copyTextEn');
var outputEn = document.getElementById('outputEn');

copyButtonEn.addEventListener('click', function () {

    /* Select the text field */
    outputEn.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + outputEn.value);
});

submitButtonEn.addEventListener('click', function () {
    var encryptedText = "";
    var shiftValue = parseInt(shiftEn.value, 10);
    var origin = inputEn.value;
    var textLength = inputEn.value.length;
    for (var i = 0; i < textLength; i ++){
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


