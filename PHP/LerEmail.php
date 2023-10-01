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
        $sql = "SELECT user FROM banco_de_dados WHERE user='".htmlspecialchars($_POST["email"])."'";
        //echo $sql;
        $result = $BancoDeDados->query($sql);
        if ($result->num_rows > 0) 
        {
            //há um usuário igual
            echo "Email already registered";
        } 
        else 
        {
            //não há um usuário igual
            echo $_POST["email"];
        }

        //---------------------------------------
        //Termino de Conexão
        //---------------------------------------
        $BancoDeDados->close();

        ?>