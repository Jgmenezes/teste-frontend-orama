function validarCamposNomeEEmail(nome, email) {
    var alertaNome = document.querySelector("#alertaNome");
    var alertaEmail = document.querySelector("#alertaEmail");

    if(nome.value == "") {
        nome.style.border = "1px solid red";
        alertaNome.style.display = "block";
    }
    else {
        nome.style.border = "1px solid #e3e3e3";
        alertaNome.style.display = "none";
    }

    if(email.value == "") {
        email.style.border = "1px solid red";
        alertaEmail.style.display = "block";        
    }
    else {
        email.style.border = "1px solid #e3e3e3";
        alertaEmail.style.display = "none";
    }
       
    
}
