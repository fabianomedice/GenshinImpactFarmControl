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
        $nome = htmlspecialchars($_POST["nome"]);
        $sql = "INSERT INTO banco_de_dados(user, senha, nome, backpack, chars, farm) VALUES ('".$user."','".$senha."','".$nome."','".$_POST["backpack"]."','".$_POST["chars"]."','".$_POST["farm"]."');";
        //echo $sql;
        $result = $BancoDeDados->query($sql);

        //---------------------------------------
        //Termino de Conexão
        //---------------------------------------
        $BancoDeDados->close();

        ?>