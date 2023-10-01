<?php

//---------------------------------------
//Conexão
//---------------------------------------

//$servername = '127.0.0.1'; //ou "localhost"
$servername = "localhost"; //ou "localhost"
$username = 'root';
$password = ''; //To be completed if you have set a password to root
$database = 'genshinimpact'; //To be completed to connect to a database. The database must exist.
$port = 3306; //Default must be NULL to use default port
$BancoDeDados = new mysqli($servername, $username, $password, $database, $port);

//---------------------------------------
//Recebimento do input
//---------------------------------------
$user =htmlspecialchars($_POST["user"]);
//$user = "teste";
$senha =htmlspecialchars($_POST["pass"]);
//$senha = " ";

//---------------------------------------
//Atualização do Banco de dados no HTML
//---------------------------------------
//Procura de termo
$sql = "SELECT user, senha, nome FROM banco_de_dados";
//echo $sql;
$result = $BancoDeDados->query($sql);
if ($result->num_rows > 0) 
{
    // output data of each row
    //while($row = $result->fetch_assoc()) //Outra maneira de escrever o while
    $StatusLogin = "User not found";
    $NomeLogin = "";
    while($row = mysqli_fetch_array($result)) 
    {
        $User_Cadastrado = $row["user"];
        $Senha_Cadastrada = $row["senha"];
        $Nome_Cadastrado = $row["nome"];
        if($user == $User_Cadastrado)
        {
            //Achou o usuário e confere a senha
            if($senha == $Senha_Cadastrada)
            {
                $StatusLogin = "User found";
                $NomeLogin = $Nome_Cadastrado;
            }
            else
            {
                $StatusLogin = "Wrong Password";
            }
        }
    }
} 
else 
{
    echo "0 results";
}

echo $StatusLogin.$NomeLogin;
//---------------------------------------
//Termino de Conexão
//---------------------------------------
$BancoDeDados->close();

?>
