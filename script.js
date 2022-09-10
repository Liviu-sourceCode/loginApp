


function showAlert() {
    
let userInput = document.getElementById("i1").value;
let emailInput = document.getElementById("i2").value;
let firstPassword = document.getElementById("i3").value;
let secondPassword = document.getElementById("i4").value;

if(userInput == "" || emailInput == "" || firstPassword == "" || secondPassword == "") {

    alert("Toate spatiile sunt necesare!")
} 
else {

 if (firstPassword === secondPassword) {

    alert('Inregistrarea a fost efectuata cu succes!')

} else if (firstPassword != secondPassword) {

    alert('Parolele nu se potrivesc!')

}

}

};
