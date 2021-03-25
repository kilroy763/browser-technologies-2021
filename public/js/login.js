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


    if (name.value == "") {
        window.alert("Voer AUB je naam in");
        name.focus();
        return false;
    }

    if (surname.value == "") {
        window.alert("Voor AUB je achternaam in");
        surname.focus();
        return false;
    }

    if (nummer.value == "") {
        window.alert(
          "Voer AUB je studentennummer in");
        nummer.focus();
        return false;
    }

 

    return true;
}