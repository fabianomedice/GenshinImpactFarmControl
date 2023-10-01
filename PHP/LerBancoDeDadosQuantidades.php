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
//echo $user;

//---------------------------------------
//Atualização do Banco de dados do HTML
//---------------------------------------
//Procura de termo
$sql = "SELECT backpack FROM banco_de_dados WHERE user='".$user."'";
//echo $sql;
$result = $BancoDeDados->query($sql);
if ($result->num_rows > 0) 
{
    // output data of each row
    //while($row = $result->fetch_assoc()) //Outra maneira de escrever o while
    while($row = mysqli_fetch_array($result)) 
    {
        $Dados_Recebidos[] = $row["backpack"];
    }
    echo $Dados_Recebidos[0];
} 
else 
{
    echo "0 results";
}
//---------------------------------------
//Termino de Conexão
//---------------------------------------
$BancoDeDados->close();

?>
