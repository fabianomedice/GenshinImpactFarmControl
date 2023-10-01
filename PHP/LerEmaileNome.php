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
        $sql = "SELECT user,nome FROM banco_de_dados WHERE user='".htmlspecialchars($_POST["email"])."'";
        //echo $sql;
        $result = $BancoDeDados->query($sql);
        if ($result->num_rows > 0) 
        {
             // output data of each row
            //while($row = $result->fetch_assoc()) //Outra maneira de escrever o while
            while($row = mysqli_fetch_array($result)) 
            {
                if($_POST["email"] == $row["user"])
                {
                    if($_POST["nome"] == $row["nome"])
                    {
                        echo "Same email and name";
                    }
                    else
                    {
                        echo "Name doesn't match";
                    }
                }
            }
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