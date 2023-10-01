/*
remember me
    - localStorage //guarda a informação por dias, meses ou anos.
        -localStorage.setItem("name", "John Doe"); //Cria a informação
        -localStorage.getItem("name"); //Acessa a informação
        -localStorage.removeItem("name"); //Deleta a informação - Para logout

sem remember me
    - sessionStorage //guarda a informação por uma seção (até fechar o browser)
        -sessionStorage.setItem("name", "John Doe"); //Cria a informação
        -sessionStorage.getItem("name"); //Acessa a informação
        -sessionStorage.removeItem("name"); //Deleta a informação
        -sessionStorage.clear(); //Apaga toda a informação
*/

// -------------------------------------------------------
//Função para habilitar login ou chamar usuario
// -------------------------------------------------------
function ConfereUsuario()
{
    if(sessionStorage.getItem("user") == null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            document.getElementById("LoginOption").style.display = "inline"; //coloca icone de login
            document.getElementById("LoginUser").style.display = "none"; //retira os campos de login
            document.getElementById("LoginButton").style.display = "none"; //retira os botões de login e register
            document.getElementById("ForgetPasswordButton").style.display = "none"; //retira os botões de remember me e reset password
            document.getElementById("RegisterUser").style.display = "none"; //retira os nome do usuario
            document.getElementById("LogoutButton").style.display = "none"; //retira o botão de logout
        }
        else
        {
            //Tem usuário no localStorage
            document.getElementById("LoginOption").style.display = "none"; //retira icone de login
            document.getElementById("LoginUser").style.display = "none"; //retira os campos de login
            document.getElementById("LoginButton").style.display = "none"; //retira os botões de login e register
            document.getElementById("ForgetPasswordButton").style.display = "none"; //retira os botões de remember me e reset password
            document.getElementById("RegisterUser").style.display = "inline"; //mostra o botão de logout
            document.getElementById("RegisterUser").innerHTML = "<a style='font-size:18px'>Hello "+localStorage.getItem("name")+"</a>"; //Adiciona o nome do usuario
            document.getElementById("LogoutButton").style.display = "inline"; //mostra o botão de logout
        }
        
    }
    else
    {
        //Tem usuário no sessionStorage
        document.getElementById("LoginOption").style.display = "none"; //retira icone de login
        document.getElementById("LoginUser").style.display = "none"; //retira os campos de login
        document.getElementById("LoginButton").style.display = "none"; //retira os botões de login e register
        document.getElementById("ForgetPasswordButton").style.display = "none"; //retira os botões de remember me e reset password
        document.getElementById("RegisterUser").style.display = "inline"; //mostra o botão de logout
        document.getElementById("RegisterUser").innerHTML = "<a style='font-size:18px'>Hello "+sessionStorage.getItem("name")+"</a>"; //Adiciona o nome do usuario
        document.getElementById("LogoutButton").style.display = "inline"; //mostra o botão de logout
    }
}

// -------------------------------------------------------
//Função para chamar o login
// -------------------------------------------------------
function AbreLogin()
{
    if(document.getElementById("LoginUser").style.display == "none")
    {
        //Abre a aba de login
        document.getElementById("LoginUser").style.display = "inline";
        document.getElementById("LoginButton").style.display = "inline";
        document.getElementById("ForgetPasswordButton").style.display = "inline";
    }
    else
    {
        //Fecha a aba de login
        document.getElementById("LoginUser").style.display = "none";
        document.getElementById("LoginButton").style.display = "none";
        document.getElementById("ForgetPasswordButton").style.display = "none";
    }
}

// -------------------------------------------------------
//Função para procurar no banco de dados e realizar o login
// -------------------------------------------------------
function FazLogin()
{
    var user = document.getElementById('LoginEmail').value;
    var pass = document.getElementById('LoginPassword').value;

    // Chama atualização para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, avisa se foi ou não efetuado login
            if(this.responseText == "User not found")
            {
                alert("User not found, please try again")
            }
            if(this.responseText == "Wrong Password")
            {
                alert("User and Password doesn't match, please try again")
            }
            if(this.responseText.slice(0,10) == "User found")
            {
                //cria o usuário
                var Nome_Recebido = this.responseText.slice(10);
                //confere o Remember Me
                if(RememberMe)
                {
                    //Está ativo
                    localStorage.setItem("user", user); //Cria a informação do usuário
                    localStorage.setItem("name", Nome_Recebido); //Cria a informação do usuário
                }
                else
                {
                    //Não está ativo
                    sessionStorage.setItem("user", user); //Cria a informação do usuário
                    sessionStorage.setItem("name", Nome_Recebido); //Cria a informação do usuário
                }
                
                //modifica o login
                ConfereUsuario()
                location.reload();
            }
        }
    }
    xhttp.open("POST", "PHP/Login.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("user="+user+"&pass="+pass);
}


// -------------------------------------------------------
//Função para deslogar do site
// -------------------------------------------------------
function DesfazLogin()
{
    //deleta o usuario
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("name");
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    //chama a função de configuração
    ConfereUsuario();
}

// -------------------------------------------------------
//Função habilitar o Remember Me
// -------------------------------------------------------
var RememberMe = false; //desativado ao carregar
function LembrarLogin()
{
    RememberMe = !RememberMe;
}