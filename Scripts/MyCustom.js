//Palindrome
function isPalindrome() {
    let word = $("#myPalindrome").val();
    let result = "";
    //this loop is reversing the original word puts it in the result variable
    for (let i = word.length - 1; i >= 0; i--) {
        result += word.charAt(i);
    }
    // comparing the reversed word against the original word and if they are the same it's palindrome and if not this it's not a palindrome
    if (result == word) {
        $("#palResult").html(word + " " + "is a palindrome");
    }
    else {
        $("#palResult").html(word + " " + "is not a palindrome");
    }
    

}

//function reverseWord() {
//    let inputWord = document.getElementById("reverseString").value;
//    let reverseWord = "";
//    for (let loop = inputWord.length - 1; loop >= 0; loop--) {
//        reverseWord += lowerInput.charAt(loop);
//    }
//    let otherReverse = lowerInput.split("").reverse().join("");
//    if (lowerInput == reverseWord) {
//        alert("otherReverse");
//    }
//    else {
//        alert("try Again");
//    }
//    document.getElementById()
//}

//document.getElementById("flip").addEventListener("click", function () {
//    let inputWord = document.getElementById("reverseString").value


//    let reverseWord = ""
//    for (let loop = 0, loop <= 10; loop++) {
//        reverseWord += loop;
//    }

//    document.getElementById("reverseOutput").innerHTML = reverseWord;
//})
