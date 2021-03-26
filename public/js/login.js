console.log("inloggen")


window.onload = function removeRequired(){
    document.forms["login"]["user_name"].required = false;
    document.forms["login"]["user_surname"].required = false;
    document.forms["login"]["user_studentnr"].required = false;

}



function inloggen() {
    var name = document.forms["login"]["user_name"];
    var surname = document.forms["login"]["user_surname"];
    var nummer = document.forms["login"]["user_studentnr"];

    const nameError = document.querySelector('span.error');
    const surnameError = document.querySelector('span.error2');
    const nummerError = document.querySelector('span.error3')

    if (name.value == "") {
        nameError.textContent = 'Voer je naam in';
        name.focus();
        return false;
    }

    if (surname.value == "") {
        surnameError.textContent = "Voer je achternaam in";
        surname.focus();
        return false;
    }

    if (nummer.value == "") {
        nummerError.textContent = "Voer je studentnummer in"
        nummer.focus();
        return false;
    }

 

    return true;
}