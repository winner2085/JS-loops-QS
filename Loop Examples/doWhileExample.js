let outputDiv = document.getElementById("output");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

const correctPassword = "VictoriaGjelaj546";
outputDiv.innerHTML += "<h2>Using a password prompt</h2>";

submitButton.addEventListener("click", () => {
    let password;
    let attempt = 0;

    do{
        password = passwordInput.value;

        if(password === correctPassword){
            outputDiv.innerHTML += "Access granted!<br>";
            passwordInput.disabled = true;
            submitButton.disabled - true;
            break;
        } else{
        outputDiv.innerHTML += `Incorrect password. Attempt ${++atempt}. Try again. <br>`;
        passwordInput.value = ""; //Clear the input field for another attempt
            }while {
                (password !== correctPassword && !passwordInput.disabled);
                }
});
