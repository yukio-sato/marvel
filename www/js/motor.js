if (localStorage.getItem("nome") == "null" && localStorage.getItem("senha") == "null")
{
localStorage.setItem("nome","");
localStorage.setItem("senha","");
}
function cadastrar()
{
    var nm = document.getElementById("UsernameCadas").value;
    var nr = document.getElementById("SenhaCadas").value;
    if (nm != "" && nr != "")
    {
    localStorage.setItem("nome",nm);
    localStorage.setItem("senha",nr);
    alert("Cadastro realizado com sucesso!");
    document.location.href = "inicio.html";
    }
    else if (nm == ""){
        alert("Insira o usuário.");
    }
    else if (nr == ""){
        alert("Insira a senha.");
    }
}
function entrar()
{
    var nm = document.getElementById("UsernameCadas").value;
    var nr = document.getElementById("SenhaCadas").value;
    if (nm == localStorage.getItem("nome") && nr == localStorage.getItem("senha"))
    {
    alert("Login realizado com sucesso!");
    document.location.href = "inicio.html";
    }
    else if (nm != localStorage.getItem("nome")){
        alert("Usuário inválido.");
    }
    else if (nr != localStorage.getItem("senha")){
        alert("Senha inválida.");
    }
}

function api(){
    // script da api aqui.
}