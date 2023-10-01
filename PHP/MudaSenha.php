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
        //Acesso ao Banco de dados
        //---------------------------------------
        //Procura de termo
        $user = htmlspecialchars($_POST["email"]);
        $senha = htmlspecialchars($_POST["senha"]);

        $sql = "UPDATE banco_de_dados SET senha ='".$senha."' WHERE user = '".$user."';";
        //echo $sql;
        $result = $BancoDeDados->query($sql);

        //---------------------------------------
        //Termino de Conexão
        //---------------------------------------
        $BancoDeDados->close();

        ?>