<!DOCTYPE html> 

<html lang="en" style="scroll-behavior: smooth;">
	<head>
		<!-- Titulo da aba-->
		<title> 
			Genshin Impact Farm Helper
		</title>
		<!-- Metadados -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="author" content="Fabiano Médice">
		<meta name="description" content="Controle de Informações de farm de Genshin Impact">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <script src="/JS/login.js"></script>
    <script src="/JS/banco_de_dados.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> <!-- bootstrap 3.0 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	</head>
	<body>
		<header>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li><a href="/backpack.html">Backpack</a></li>
              <li><a href="/chars.html">Characters</a></li>
              <!--<li><a href="weapons.html">Weapons</a></li>-->
              <li><a href="/farm.html">Complete Farm Sheet</a></li>
              <li><a href="/index.html">About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a>Please help us maintain this site</a></li>
              <li><a href="https://streamlabs.com/mrbadgerbr/tip" style="padding:0px"><img src="/Image/PayPal.png" style="height:50px" alt="PayPal"></a></li>
              <li><a><br></a></li>
              <li><a href="https://pag.ae/7WB124EQp" style="padding:0px"><img src="/Image/PagSeguro.png" style="height:50px" alt="PagSeguro"></a></li>
              <li><a><br></a></li>
              <li id="LoginOption"><a onclick=AbreLogin()><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              <li id="LoginUser" style="display: none;"> <form id="FormLogin" method="POST" action="register.php"><input type="text" placeholder="Enter Email" name="email" id="LoginEmail" > <br> <input type="password" placeholder="Enter Password" name="password" id="LoginPassword" ></form></li>
              <li id="LoginButton" style="display: none;"><button onclick=FazLogin() style="width:70px"> Log in </button><br><input type="submit" value="Register" form="FormLogin" style="width:70px"></li>
              <li id="ForgetPasswordButton" style="display: none;"><span style="width: 3px;height: 21px; display: inline-block;"></span> <input type="checkbox" id="RememberMe" onclick=LembrarLogin()> <b style="color: white;">Remember me</b> <br><button onclick='location.href="resetpassword.php"'> Reset Password </button></li>
              <li id="RegisterUser" style="display: none;"></li>
              <li id="LogoutButton" style="display: none;"><a style="color: black;"><button onclick=DesfazLogin() style="width:70px"> Log out </button></a></li>
            </ul>
          </div>
        </div>
        <div style="background-color:#080808;color:#fff"> 
          <div class="container text-center">
            <h1>Register</h1>
          </div>
        </div>
        <br>
      </nav>
		</header>
		
		<section >
      <div class="container-fluid bg-3 text-center">    
        <span style="font-size:30px"><b>This is used just to save all your values</b></span><br>
        <div class="row"><br></div>
        <div class="row text-center">
          <div class="col-sm-6 text-right">
            <label for="RegistraNome" style="font-size:15px">Name </label><br>
            <label for="RegistraEmail" style="font-size:15px">Email </label><br>
            <label for="RegistraPassword" style="font-size:15px">Password </label><br>
          </div>
          <div class="col-sm-6 text-left">
            <form id="Cadastro" method="POST">
              <input type="text" placeholder="Enter Name/Nickname" name="nome" id="RegistraNome" required> <br> 
              <input type="text" placeholder="Enter Email" name="email" id="RegistraEmail" required><br> 
              <input type="password" placeholder="Enter Password" name="password" id="RegistraPassword" required> <input type="checkbox" onchange=MostraSenha()> Show Password <br>
            </form>
          </div>
        </div>
        <div class="row text-center">
            <input  type="button" value="Register" form="Cadastro" onclick=ValidaLogin()> <br> 
          </div>
      </div>
    
      <br><br>
              
		</section>
		<footer class="container-fluid text-center" style="background-color:#333;color:#fff">
			<b>Made by Fabiano Médice<br>2020</b>
    </footer>
    <script>
      
      <?php
        echo "document.getElementById('RegistraEmail').value ='".$_POST["email"]."';";
        echo "document.getElementById('RegistraPassword').value ='".$_POST["password"]."';";
        if(isset($_POST["nome"]))
        {
          //com nome
          echo "document.getElementById('RegistraNome').value ='".$_POST["nome"]."';";
        }
      ?>
      
      function MostraSenha()
      {
        if(document.getElementById('RegistraPassword').type=='password')
        {
          //troca o tipo pra text pra poder ver a senha
          document.getElementById('RegistraPassword').type='text';
        }
        else
        {
          document.getElementById('RegistraPassword').type='password';
        }
      }

      function ValidaLogin()
      { 
        //confere se não tem um input vazio
        if (document.getElementById('RegistraNome').value=="")
        {
          alert("Name/Nickname isn't filled.")
        }
        if (document.getElementById('RegistraEmail').value=="")
        {
          alert("Email isn't filled.")
        }
        if (document.getElementById('RegistraPassword').value=="")
        {
          alert("Password isn't filled.")
        }
        if(document.getElementById('RegistraNome').value!="" && document.getElementById('RegistraNome').value!="" && document.getElementById('RegistraPassword').value!="")
        {
          // Chama a leitura para o servidor
          var xhttp;
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() 
          {
              if (this.readyState == 4 && this.status == 200) 
              {
                  //Quando atualizou, não faz nada
                  if(this.responseText=="Email already registered")
                  {
                    alert("Email already registered");
                  }
                  else
                  {
                    //realiza cadastro
                    var xhttp;
                    xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() 
                    {
                        if (this.readyState == 4 && this.status == 200) 
                        {
                            //Quando atualizou, não faz nada
                            //alert("User Successfully registered");
                            sessionStorage.setItem("user", document.getElementById('RegistraEmail').value); //Cria a informação do usuário
                            sessionStorage.setItem("name", document.getElementById('RegistraNome').value); //Cria a informação do usuário
                            //vai para a pagina backpack
                            window.location.href ="/index.html";
                        }
                    }
                    xhttp.open("POST", "CriaNovoUsuario.php", false); //o false não deixa ser assincrono
                    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhttp.send("email="+document.getElementById('RegistraEmail').value+"&senha="+document.getElementById('RegistraPassword').value+"&nome="+document.getElementById('RegistraNome').value+"&backpack="+JSON.stringify($BancoDeDados_Quantidades)+"&chars="+JSON.stringify($BancoDeDados_Personagens)+"&farm="+JSON.stringify($BancoDeDados_Farm));
                  }
              }
          }
          xhttp.open("POST", "LerEmail.php", false); //o false não deixa ser assincrono
          xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhttp.send("email="+document.getElementById('RegistraEmail').value);
          }
      }

    </script>

	</body>
</html>