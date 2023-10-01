// -------------------------------------------------------
//Função para atualizar os valores dos chars
// -------------------------------------------------------
function Atualiza_Valores_Char(char,Iniciador)
{
    //Ter ou não ter o char
    if($BancoDeDados_Personagens[char].Own==true)
    {
        document.getElementById(char+"Own").checked = true;
    }
    //Lv de ascensão do personagem
    switch ($BancoDeDados_Personagens[char].Ascension_Level)
    {
        case 0:
            document.getElementById(char+"Ascension0").checked = true;
        break
        case 1:
            document.getElementById(char+"Ascension1").checked = true;
        break
        case 2:
            document.getElementById(char+"Ascension2").checked = true;
        break
        case 3:
            document.getElementById(char+"Ascension3").checked = true;
        break
        case 4:
            document.getElementById(char+"Ascension4").checked = true;
        break
        case 5:
            document.getElementById(char+"Ascension5").checked = true;
        break
        case 6:
            document.getElementById(char+"Ascension6").checked = true;
        break
        default:
            alert("Erro de código - Atualiza_Valores_Char");
    }

    //Lv do talento de Attack
    document.getElementById(char+"TalentAtk").value = $BancoDeDados_Personagens[char].TalentAtk;

    //Lv do talento de Elemental Skill (E)
    document.getElementById(char+"TalentElementalSkill").value = $BancoDeDados_Personagens[char].TalentElementalSkill;

    //Lv do talento de Elemental Burst (Q)
    document.getElementById(char+"TalentElementalBurst").value = $BancoDeDados_Personagens[char].TalentElementalBurst;

    //Arma
    document.getElementById(char+"Weapon").value = $BancoDeDados_Personagens[char].Weapon;

    //Lv de ascensão da arma
    switch ($BancoDeDados_Personagens[char].Weapon_Ascension_Level)
    {
        case 0:
            document.getElementById(char+"WeaponAscension0").checked = true;
        break
        case 1:
            document.getElementById(char+"WeaponAscension1").checked = true;
        break
        case 2:
            document.getElementById(char+"WeaponAscension2").checked = true;
        break
        case 3:
            document.getElementById(char+"WeaponAscension3").checked = true;
        break
        case 4:
            document.getElementById(char+"WeaponAscension4").checked = true;
        break
        case 5:
            document.getElementById(char+"WeaponAscension5").checked = true;
        break
        case 6:
            document.getElementById(char+"WeaponAscension6").checked = true;
        break
        default:
            alert("Erro de código- Lv de ascensão da arma");
    }

    //Own/Need
    //Configuração do desaparecer
    if(char=="Traveler")
    {
        //Traveler não tem Element no banco de dados
        switch ($BancoDeDados_Personagens[char].Ascension_Level)
        {
            case 0:
                //Precisa de todos
                document.getElementById(char+"Ascension1Div").style.opacity = "1";
                document.getElementById(char+"Ascension2Div").style.opacity = "1";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 168";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 18";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 30";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 36";
            break
            case 1:
                //Retira a ascenção 1
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "1";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 165";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 15";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 30";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 36";
            break
            case 2:
                //Retira a ascenção 1 e 2
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 155";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 0";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 30";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 36";
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 135";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 0";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 18";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 36";
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 105";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 0";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 0";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 36";
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 60";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 0";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 0";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 24";
            break
            case 6:
                //Retira todas ascensões
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension6Div").style.opacity = "0.3";
                document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / 0";
                document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / 0";
                document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / 0";
                document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / 0";
            break
            default:
                alert("Erro de código - Configuração do Ascension desaparecer do Traveler");
        }
    }
    else
    {
        //Configuração do desaparecer do Ascension
        switch ($BancoDeDados_Personagens[char].Ascension_Level)
        {
            case 0:
                //Precisa de todos
                document.getElementById(char+"Ascension1Div").style.opacity = "1";
                document.getElementById(char+"Ascension2Div").style.opacity = "1";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 1:
                //Retira a ascenção 1
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "1";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 2:
                //Retira a ascenção 1 e 2
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 6:
                //Retira todas ascensões
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension6Div").style.opacity = "0.3";
            break
            default:
                alert("Erro de código - Configuração do Ascension desaparecer");
        }

        //Configuração do desaparecer do Ascension
        switch ($BancoDeDados_Personagens[char].Ascension_Level)
        {
            case 0:
                //Precisa de todos
                document.getElementById(char+"Ascension1Div").style.opacity = "1";
                document.getElementById(char+"Ascension2Div").style.opacity = "1";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 1:
                //Retira a ascenção 1
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "1";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 2:
                //Retira a ascenção 1 e 2
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "1";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "1";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "1";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension6Div").style.opacity = "1";
            break
            case 6:
                //Retira todas ascensões
                document.getElementById(char+"Ascension1Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension2Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension3Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension4Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension5Div").style.opacity = "0.3";
                document.getElementById(char+"Ascension6Div").style.opacity = "0.3";
            break
            default:
                alert("Erro de código - Configuração do Ascension desaparecer");
        }

        //Configuração do desaparecer dos Talents 
        //Mostra todos
        document.getElementById(char+"Talent2Div").style.opacity = "1";
        document.getElementById(char+"Talent3Div").style.opacity = "1";
        document.getElementById(char+"Talent4Div").style.opacity = "1";
        document.getElementById(char+"Talent5Div").style.opacity = "1";
        document.getElementById(char+"Talent6Div").style.opacity = "1";
        document.getElementById(char+"Talent7Div").style.opacity = "1";
        document.getElementById(char+"Talent8Div").style.opacity = "1";
        document.getElementById(char+"Talent9Div").style.opacity = "1";
        document.getElementById(char+"Talent10Div").style.opacity = "1";
        
        //Se todos são lv2, pode tirar o 2
        if($BancoDeDados_Personagens[char].TalentAtk>=2 && $BancoDeDados_Personagens[char].TalentElementalSkill>=2 && $BancoDeDados_Personagens[char].TalentElementalBurst>=2)
        {
            document.getElementById(char+"Talent2Div").style.opacity = "0.3";
        }
        //Se todos são lv3, pode tirar o 3
        if($BancoDeDados_Personagens[char].TalentAtk>=3 && $BancoDeDados_Personagens[char].TalentElementalSkill>=3 && $BancoDeDados_Personagens[char].TalentElementalBurst>=3)
        {
            document.getElementById(char+"Talent3Div").style.opacity = "0.3";
        }
        //Se todos são lv4, pode tirar o 4
        if($BancoDeDados_Personagens[char].TalentAtk>=4 && $BancoDeDados_Personagens[char].TalentElementalSkill>=4 && $BancoDeDados_Personagens[char].TalentElementalBurst>=4)
        {
            document.getElementById(char+"Talent4Div").style.opacity = "0.3";
        }
        //Se todos são lv5, pode tirar o 5
        if($BancoDeDados_Personagens[char].TalentAtk>=5 && $BancoDeDados_Personagens[char].TalentElementalSkill>=5 && $BancoDeDados_Personagens[char].TalentElementalBurst>=5)
        {
            document.getElementById(char+"Talent5Div").style.opacity = "0.3";
        }
        //Se todos são lv6, pode tirar o 6
        if($BancoDeDados_Personagens[char].TalentAtk>=6 && $BancoDeDados_Personagens[char].TalentElementalSkill>=6 && $BancoDeDados_Personagens[char].TalentElementalBurst>=6)
        {
            document.getElementById(char+"Talent6Div").style.opacity = "0.3";
        }
        //Se todos são lv7, pode tirar o 7
        if($BancoDeDados_Personagens[char].TalentAtk>=7 && $BancoDeDados_Personagens[char].TalentElementalSkill>=7 && $BancoDeDados_Personagens[char].TalentElementalBurst>=7)
        {
            document.getElementById(char+"Talent7Div").style.opacity = "0.3";
        }
        //Se todos são lv8, pode tirar o 8
        if($BancoDeDados_Personagens[char].TalentAtk>=8 && $BancoDeDados_Personagens[char].TalentElementalSkill>=8 && $BancoDeDados_Personagens[char].TalentElementalBurst>=8)
        {
            document.getElementById(char+"Talent8Div").style.opacity = "0.3";
        }
        //Se todos são lv9, pode tirar o 9
        if($BancoDeDados_Personagens[char].TalentAtk>=9 && $BancoDeDados_Personagens[char].TalentElementalSkill>=9 && $BancoDeDados_Personagens[char].TalentElementalBurst>=9)
        {
            document.getElementById(char+"Talent9Div").style.opacity = "0.3";
        }
        //Se todos são lv10, pode tirar o 10
        if($BancoDeDados_Personagens[char].TalentAtk>=10 && $BancoDeDados_Personagens[char].TalentElementalSkill>=10 && $BancoDeDados_Personagens[char].TalentElementalBurst>=10)
        {
            document.getElementById(char+"Talent10Div").style.opacity = "0.3";
        }

        //----------------------------------
        //Fazendo o calculo das quantidades
        //----------------------------------
        //Ascension
        //Criando Variaveis Locais
        var Ascension_Element2=0;
        var Ascension_Element3=0;
        var Ascension_Element4=0;
        var Ascension_Element5=0;
        var Ascension_Local_Specialty=0;
        var Ascension_Comum_Item1=0;
        var Ascension_Comum_Item2=0;
        var Ascension_Comum_Item3=0;
        var Ascension_Boss=0;

        switch ($BancoDeDados_Personagens[char].Ascension_Level)
        {
            case 0:
                //Precisa de todos
                Ascension_Element2=1;
                Ascension_Element3=9;
                Ascension_Element4=9;
                Ascension_Element5=6;
                Ascension_Local_Specialty=168;
                Ascension_Comum_Item1=18;
                Ascension_Comum_Item2=30;
                Ascension_Comum_Item3=36;
                Ascension_Boss=46;
            break
            case 1:
                //Retira a ascenção 1
                Ascension_Element2=0;
                Ascension_Element3=9;
                Ascension_Element4=9;
                Ascension_Element5=6;
                Ascension_Local_Specialty=165;
                Ascension_Comum_Item1=15;
                Ascension_Comum_Item2=30;
                Ascension_Comum_Item3=36;
                Ascension_Boss=46;
            break
            case 2:
                //Retira a ascenção 1 e 2
                Ascension_Element2=0;
                Ascension_Element3=6;
                Ascension_Element4=9;
                Ascension_Element5=6;
                Ascension_Local_Specialty=155;
                Ascension_Comum_Item1=0;
                Ascension_Comum_Item2=30;
                Ascension_Comum_Item3=36;
                Ascension_Boss=42;
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                Ascension_Element2=0;
                Ascension_Element3=0;
                Ascension_Element4=9;
                Ascension_Element5=6;
                Ascension_Local_Specialty=135;
                Ascension_Comum_Item1=0;
                Ascension_Comum_Item2=18;
                Ascension_Comum_Item3=36;
                Ascension_Boss=40;
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                Ascension_Element2=0;
                Ascension_Element3=0;
                Ascension_Element4=6;
                Ascension_Element5=6;
                Ascension_Local_Specialty=105;
                Ascension_Comum_Item1=0;
                Ascension_Comum_Item2=0;
                Ascension_Comum_Item3=36;
                Ascension_Boss=32;
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                Ascension_Element2=0;
                Ascension_Element3=0;
                Ascension_Element4=0;
                Ascension_Element5=6;
                Ascension_Local_Specialty=60;
                Ascension_Comum_Item1=0;
                Ascension_Comum_Item2=0;
                Ascension_Comum_Item3=24;
                Ascension_Boss=20;
            break
            case 6:
                //Retira todas ascensões
                Ascension_Element2=0;
                Ascension_Element3=0;
                Ascension_Element4=0;
                Ascension_Element5=0;
                Ascension_Local_Specialty=0;
                Ascension_Comum_Item1=0;
                Ascension_Comum_Item2=0;
                Ascension_Comum_Item3=0;
                Ascension_Boss=0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Ascension");
        }

        //Talent Attack
        //Criando Variaveis Locais
        var TalentAtk_Comum_Item1=0;
        var TalentAtk_Comum_Item2=0;
        var TalentAtk_Comum_Item3=0;
        var TalentAtk_Talent2=0;
        var TalentAtk_Talent3=0;
        var TalentAtk_Talent4=0;
        var TalentAtk_BossTalent=0;
        var TalentAtk_CrownofInsight=0;
        switch ($BancoDeDados_Personagens[char].TalentAtk)
        {
            case "1":
                TalentAtk_Comum_Item1=6;
                TalentAtk_Comum_Item2=22;
                TalentAtk_Comum_Item3=31;
                TalentAtk_Talent2=3;
                TalentAtk_Talent3=21;
                TalentAtk_Talent4=38;
                TalentAtk_BossTalent=6;
                TalentAtk_CrownofInsight=1;
            break
            case "2":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=22;
                TalentAtk_Comum_Item3=31;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=21;
                TalentAtk_Talent4=38;
                TalentAtk_BossTalent=6;
                TalentAtk_CrownofInsight=1;
            break
            case "3":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=19;
                TalentAtk_Comum_Item3=31;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=19;
                TalentAtk_Talent4=38;
                TalentAtk_BossTalent=6;
                TalentAtk_CrownofInsight=1;
            break
            case "4":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=15;
                TalentAtk_Comum_Item3=31;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=15;
                TalentAtk_Talent4=38;
                TalentAtk_BossTalent=6;
                TalentAtk_CrownofInsight=1;
            break
            case "5":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=9;
                TalentAtk_Comum_Item3=31;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=9;
                TalentAtk_Talent4=38;
                TalentAtk_BossTalent=6;
                TalentAtk_CrownofInsight=1;
            break
            case "6":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=0;
                TalentAtk_Comum_Item3=31;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=0;
                TalentAtk_Talent4=38;
                TalentAtk_BossTalent=6;
                TalentAtk_CrownofInsight=1;
            break
            case "7":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=0;
                TalentAtk_Comum_Item3=27;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=0;
                TalentAtk_Talent4=34;
                TalentAtk_BossTalent=5;
                TalentAtk_CrownofInsight=1;
            break
            case "8":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=0;
                TalentAtk_Comum_Item3=21;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=0;
                TalentAtk_Talent4=28;
                TalentAtk_BossTalent=4;
                TalentAtk_CrownofInsight=1;
            break
            case "9":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=0;
                TalentAtk_Comum_Item3=12;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=0;
                TalentAtk_Talent4=16;
                TalentAtk_BossTalent=2;
                TalentAtk_CrownofInsight=1;
            break
            case "10":
                TalentAtk_Comum_Item1=0;
                TalentAtk_Comum_Item2=0;
                TalentAtk_Comum_Item3=0;
                TalentAtk_Talent2=0;
                TalentAtk_Talent3=0;
                TalentAtk_Talent4=0;
                TalentAtk_BossTalent=0;
                TalentAtk_CrownofInsight=0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Talent Atk"+" - "+char);
        }

        //Talent Elemental Skill
        //Criando Variaveis Locais
        var TalentElementalSkill_Comum_Item1=0;
        var TalentElementalSkill_Comum_Item2=0;
        var TalentElementalSkill_Comum_Item3=0;
        var TalentElementalSkill_Talent2=0;
        var TalentElementalSkill_Talent3=0;
        var TalentElementalSkill_Talent4=0;
        var TalentElementalSkill_BossTalent=0;
        var TalentElementalSkill_CrownofInsight=0;
        switch ($BancoDeDados_Personagens[char].TalentElementalSkill)
        {
            case "1":
                TalentElementalSkill_Comum_Item1=6;
                TalentElementalSkill_Comum_Item2=22;
                TalentElementalSkill_Comum_Item3=31;
                TalentElementalSkill_Talent2=3;
                TalentElementalSkill_Talent3=21;
                TalentElementalSkill_Talent4=38;
                TalentElementalSkill_BossTalent=6;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "2":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=22;
                TalentElementalSkill_Comum_Item3=31;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=21;
                TalentElementalSkill_Talent4=38;
                TalentElementalSkill_BossTalent=6;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "3":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=19;
                TalentElementalSkill_Comum_Item3=31;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=19;
                TalentElementalSkill_Talent4=38;
                TalentElementalSkill_BossTalent=6;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "4":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=15;
                TalentElementalSkill_Comum_Item3=31;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=15;
                TalentElementalSkill_Talent4=38;
                TalentElementalSkill_BossTalent=6;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "5":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=9;
                TalentElementalSkill_Comum_Item3=31;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=9;
                TalentElementalSkill_Talent4=38;
                TalentElementalSkill_BossTalent=6;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "6":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=0;
                TalentElementalSkill_Comum_Item3=31;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=0;
                TalentElementalSkill_Talent4=38;
                TalentElementalSkill_BossTalent=6;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "7":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=0;
                TalentElementalSkill_Comum_Item3=27;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=0;
                TalentElementalSkill_Talent4=34;
                TalentElementalSkill_BossTalent=5;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "8":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=0;
                TalentElementalSkill_Comum_Item3=21;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=0;
                TalentElementalSkill_Talent4=28;
                TalentElementalSkill_BossTalent=4;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "9":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=0;
                TalentElementalSkill_Comum_Item3=12;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=0;
                TalentElementalSkill_Talent4=16;
                TalentElementalSkill_BossTalent=2;
                TalentElementalSkill_CrownofInsight=1;
            break
            case "10":
                TalentElementalSkill_Comum_Item1=0;
                TalentElementalSkill_Comum_Item2=0;
                TalentElementalSkill_Comum_Item3=0;
                TalentElementalSkill_Talent2=0;
                TalentElementalSkill_Talent3=0;
                TalentElementalSkill_Talent4=0;
                TalentElementalSkill_BossTalent=0;
                TalentElementalSkill_CrownofInsight=0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Talent Elemental Skill"+" - "+char);
        }

        //Talent Elemental Burst
        //Criando Variaveis Locais
        var TalentElementalBurst_Comum_Item1=0;
        var TalentElementalBurst_Comum_Item2=0;
        var TalentElementalBurst_Comum_Item3=0;
        var TalentElementalBurst_Talent2=0;
        var TalentElementalBurst_Talent3=0;
        var TalentElementalBurst_Talent4=0;
        var TalentElementalBurst_BossTalent=0; 
        var TalentElementalBurst_CrownofInsight=0;
        switch ($BancoDeDados_Personagens[char].TalentElementalBurst)
        {
            case "1":
                TalentElementalBurst_Comum_Item1=6;
                TalentElementalBurst_Comum_Item2=22;
                TalentElementalBurst_Comum_Item3=31;
                TalentElementalBurst_Talent2=3;
                TalentElementalBurst_Talent3=21;
                TalentElementalBurst_Talent4=38;
                TalentElementalBurst_BossTalent=6;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "2":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=22;
                TalentElementalBurst_Comum_Item3=31;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=21;
                TalentElementalBurst_Talent4=38;
                TalentElementalBurst_BossTalent=6;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "3":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=19;
                TalentElementalBurst_Comum_Item3=31;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=19;
                TalentElementalBurst_Talent4=38;
                TalentElementalBurst_BossTalent=6;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "4":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=15;
                TalentElementalBurst_Comum_Item3=31;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=15;
                TalentElementalBurst_Talent4=38;
                TalentElementalBurst_BossTalent=6;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "5":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=9;
                TalentElementalBurst_Comum_Item3=31;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=9;
                TalentElementalBurst_Talent4=38;
                TalentElementalBurst_BossTalent=6;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "6":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=0;
                TalentElementalBurst_Comum_Item3=31;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=0;
                TalentElementalBurst_Talent4=38;
                TalentElementalBurst_BossTalent=6;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "7":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=0;
                TalentElementalBurst_Comum_Item3=27;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=0;
                TalentElementalBurst_Talent4=34;
                TalentElementalBurst_BossTalent=5;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "8":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=0;
                TalentElementalBurst_Comum_Item3=21;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=0;
                TalentElementalBurst_Talent4=28;
                TalentElementalBurst_BossTalent=4;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "9":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=0;
                TalentElementalBurst_Comum_Item3=12;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=0;
                TalentElementalBurst_Talent4=16;
                TalentElementalBurst_BossTalent=2;
                TalentElementalBurst_CrownofInsight=1;
            break
            case "10":
                TalentElementalBurst_Comum_Item1=0;
                TalentElementalBurst_Comum_Item2=0;
                TalentElementalBurst_Comum_Item3=0;
                TalentElementalBurst_Talent2=0;
                TalentElementalBurst_Talent3=0;
                TalentElementalBurst_Talent4=0;
                TalentElementalBurst_BossTalent=0;
                TalentElementalBurst_CrownofInsight=0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Talent Elemental Burst"+" - "+char);
        }

        //Faz as contas
        //Criando variaveis locais
        var _Element2 = Ascension_Element2;
        var _Element3 = Ascension_Element3;
        var _Element4 = Ascension_Element4;
        var _Element5 = Ascension_Element5;
        var _Local_Specialty = Ascension_Local_Specialty;
        var _Comum_Item1 = Ascension_Comum_Item1+TalentAtk_Comum_Item1+TalentElementalSkill_Comum_Item1+TalentElementalBurst_Comum_Item1;
        var _Comum_Item2 = Ascension_Comum_Item2+TalentAtk_Comum_Item2+TalentElementalSkill_Comum_Item2+TalentElementalBurst_Comum_Item2;
        var _Comum_Item3 = Ascension_Comum_Item3+TalentAtk_Comum_Item3+TalentElementalSkill_Comum_Item3+TalentElementalBurst_Comum_Item3;
        var _Boss = Ascension_Boss;
        var _Talent2 = TalentAtk_Talent2+TalentElementalSkill_Talent2+TalentElementalBurst_Talent2;
        var _Talent3 = TalentAtk_Talent3+TalentElementalSkill_Talent3+TalentElementalBurst_Talent3;
        var _Talent4 = TalentAtk_Talent4+TalentElementalSkill_Talent4+TalentElementalBurst_Talent4;
        var _BossTalent = TalentAtk_BossTalent+TalentElementalSkill_BossTalent+TalentElementalBurst_BossTalent;
        var _CrownofInsight= TalentAtk_CrownofInsight+TalentElementalSkill_CrownofInsight+TalentElementalBurst_CrownofInsight;
        
        //Colocando os valores no HTML
        document.getElementById(char+"Element2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Element+2].Own +" / "+_Element2;
        document.getElementById(char+"Element3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Element+3].Own +" / "+_Element3;
        document.getElementById(char+"Element4").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Element+4].Own +" / "+_Element4;
        document.getElementById(char+"Element5").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Element+5].Own +" / "+_Element5;
        document.getElementById(char+"Local_Specialty").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Local_Specialty].Own +" / "+_Local_Specialty;
        document.getElementById(char+"Comum_Item1").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+1].Own +" / "+_Comum_Item1;
        document.getElementById(char+"Comum_Item2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+2].Own +" / "+_Comum_Item2;
        document.getElementById(char+"Comum_Item3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Comum_Item+3].Own +" / "+_Comum_Item3;
        document.getElementById(char+"Boss").innerHTML = $BancoDeDados_Quantidades["Boss"+$BancoDeDados_Personagens[char].Element].Own +" / "+_Boss;
        document.getElementById(char+"Talent2").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Talent+2].Own +" / "+_Talent2;
        document.getElementById(char+"Talent3").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Talent+3].Own +" / "+_Talent3;
        document.getElementById(char+"Talent4").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].Talent+4].Own +" / "+_Talent4;
        document.getElementById(char+"BossTalent").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Personagens[char].BossTalent].Own +" / "+_BossTalent;
        document.getElementById(char+"CrownofInsight").innerHTML = $BancoDeDados_Quantidades.CrownofInsight.Own +" / "+_CrownofInsight;

        //Colocando os valores de chars no $BancoDeDados_Farm
        if($BancoDeDados_Personagens[char].Own)
        {
            //Se possui o personagem, adiciona o valor
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+2][char].char = _Element2;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+3][char].char = _Element3;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+4][char].char = _Element4;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+5][char].char = _Element5;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Local_Specialty][char].char = _Local_Specialty;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Comum_Item+1][char].char = _Comum_Item1;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Comum_Item+2][char].char = _Comum_Item2;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Comum_Item+3][char].char = _Comum_Item3;
            $BancoDeDados_Farm["Boss"+$BancoDeDados_Personagens[char].Element][char].char = _Boss;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Talent+2][char].char = _Talent2;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Talent+3][char].char = _Talent3;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Talent+4][char].char = _Talent4;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].BossTalent][char].char = _BossTalent;
            $BancoDeDados_Farm.CrownofInsight[char].char = _CrownofInsight;
        }
        else
        {
            //Valores zerados
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+2][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+3][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+4][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Element+5][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Local_Specialty][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Comum_Item+1][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Comum_Item+2][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Comum_Item+3][char].char = 0;
            $BancoDeDados_Farm["Boss"+$BancoDeDados_Personagens[char].Element][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Talent+2][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Talent+3][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].Talent+4][char].char = 0;
            $BancoDeDados_Farm[$BancoDeDados_Personagens[char].BossTalent][char].char = 0;
            $BancoDeDados_Farm.CrownofInsight[char].char = 0;
        }
    }
    //Weapons
    //Criando Variaveis Locais
    
    //Faz as contas
    //Criando variaveis locais
    var _Dominio_2 = 0;
    var _Dominio_3 = 0;
    var _Dominio_4 = 0;
    var _Dominio_5 = 0;
    var _Comum_Item_1a3_1 = 0;
    var _Comum_Item_1a3_2 = 0;
    var _Comum_Item_1a3_3 = 0;
    var _Comum_Item_2a4_2 = 0;
    var _Comum_Item_2a4_3 = 0;
    var _Comum_Item_2a4_4 = 0;
    
    //Calculando os valores
    if($BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Raridade==3)
    {
        //Armas 3 estrelas
        switch ($BancoDeDados_Personagens[char].Weapon_Ascension_Level)
        {
            case 0:
                //Precisa de todos
                _Dominio_2 = 2;
                _Dominio_3 = 6;
                _Dominio_4 = 6;
                _Dominio_5 = 3;
                _Comum_Item_1a3_1 = 6;
                _Comum_Item_1a3_2 = 10;
                _Comum_Item_1a3_3 = 12;
                _Comum_Item_2a4_2 = 10;
                _Comum_Item_2a4_3 = 12;
                _Comum_Item_2a4_4 = 18;
            break
            case 1:
                //Retira a ascenção 1
                _Dominio_2 = 0;
                _Dominio_3 = 6;
                _Dominio_4 = 6;
                _Dominio_5 = 3;
                _Comum_Item_1a3_1 = 5;
                _Comum_Item_1a3_2 = 10;
                _Comum_Item_1a3_3 = 12;
                _Comum_Item_2a4_2 = 8;
                _Comum_Item_2a4_3 = 12;
                _Comum_Item_2a4_4 = 18;
            break
            case 2:
                //Retira a ascenção 1 e 2
                _Dominio_2 = 0;
                _Dominio_3 = 4;
                _Dominio_4 = 6;
                _Dominio_5 = 3;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 10;
                _Comum_Item_1a3_3 = 12;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 12;
                _Comum_Item_2a4_4 = 18;
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 6;
                _Dominio_5 = 3;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 6;
                _Comum_Item_1a3_3 = 12;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 8;
                _Comum_Item_2a4_4 = 18;
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 4;
                _Dominio_5 = 3;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 12;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 18;
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 0;
                _Dominio_5 = 3;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 8;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 12;
            break
            case 6:
                //Retira todas ascensões
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 0;
                _Dominio_5 = 0;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 0;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Weapon Ascension");
        }
    }
    else if($BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Raridade==4)
    {
        //Armas 4 estrelas
        switch ($BancoDeDados_Personagens[char].Weapon_Ascension_Level)
        {
            case 0:
                //Precisa de todos
                _Dominio_2 = 3;
                _Dominio_3 = 9;
                _Dominio_4 = 9;
                _Dominio_5 = 4;
                _Comum_Item_1a3_1 = 10;
                _Comum_Item_1a3_2 = 15;
                _Comum_Item_1a3_3 = 18;
                _Comum_Item_2a4_2 = 15;
                _Comum_Item_2a4_3 = 18;
                _Comum_Item_2a4_4 = 27;
            break
            case 1:
                //Retira a ascenção 1
                _Dominio_2 = 0;
                _Dominio_3 = 9;
                _Dominio_4 = 9;
                _Dominio_5 = 4;
                _Comum_Item_1a3_1 = 8;
                _Comum_Item_1a3_2 = 15;
                _Comum_Item_1a3_3 = 18;
                _Comum_Item_2a4_2 = 12;
                _Comum_Item_2a4_3 = 18;
                _Comum_Item_2a4_4 = 27;
            break
            case 2:
                //Retira a ascenção 1 e 2
                _Dominio_2 = 0;
                _Dominio_3 = 6;
                _Dominio_4 = 9;
                _Dominio_5 = 4;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 15;
                _Comum_Item_1a3_3 = 18;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 18;
                _Comum_Item_2a4_4 = 27;
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 9;
                _Dominio_5 = 4;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 9;
                _Comum_Item_1a3_3 = 18;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 12;
                _Comum_Item_2a4_4 = 27;
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 6;
                _Dominio_5 = 4;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 18;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 27;
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 0;
                _Dominio_5 = 4;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 12;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 18;
            break
            case 6:
                //Retira todas ascensões
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 0;
                _Dominio_5 = 0;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 0;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Weapon Ascension");
        }
    }
    else if($BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Raridade==5)
    {
        //Armas 5 estrelas
        switch ($BancoDeDados_Personagens[char].Weapon_Ascension_Level)
        {
            case 0:
                //Precisa de todos
                _Dominio_2 = 5;
                _Dominio_3 = 14;
                _Dominio_4 = 14;
                _Dominio_5 = 6;
                _Comum_Item_1a3_1 = 15;
                _Comum_Item_1a3_2 = 23;
                _Comum_Item_1a3_3 = 27;
                _Comum_Item_2a4_2 = 23;
                _Comum_Item_2a4_3 = 27;
                _Comum_Item_2a4_4 = 41;
            break
            case 1:
                //Retira a ascenção 1
                _Dominio_2 = 0;
                _Dominio_3 = 14;
                _Dominio_4 = 14;
                _Dominio_5 = 6;
                _Comum_Item_1a3_1 = 12;
                _Comum_Item_1a3_2 = 23;
                _Comum_Item_1a3_3 = 27;
                _Comum_Item_2a4_2 = 18;
                _Comum_Item_2a4_3 = 27;
                _Comum_Item_2a4_4 = 41;
            break
            case 2:
                //Retira a ascenção 1 e 2
                _Dominio_2 = 0;
                _Dominio_3 = 9;
                _Dominio_4 = 14;
                _Dominio_5 = 6;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 23;
                _Comum_Item_1a3_3 = 27;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 27;
                _Comum_Item_2a4_4 = 41;
            break
            case 3:
                //Retira a ascenção 1, 2 e 3
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 14;
                _Dominio_5 = 6;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 14;
                _Comum_Item_1a3_3 = 27;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 18;
                _Comum_Item_2a4_4 = 41;
            break
            case 4:
                //Retira a ascenção 1, 2, 3 e 4
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 9;
                _Dominio_5 = 6;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 27;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 41;
            break
            case 5:
                //Retira a ascenção 1, 2, 3, 4 e 5
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 0;
                _Dominio_5 = 6;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 18;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 27;
            break
            case 6:
                //Retira todas ascensões
                _Dominio_2 = 0;
                _Dominio_3 = 0;
                _Dominio_4 = 0;
                _Dominio_5 = 0;
                _Comum_Item_1a3_1 = 0;
                _Comum_Item_1a3_2 = 0;
                _Comum_Item_1a3_3 = 0;
                _Comum_Item_2a4_2 = 0;
                _Comum_Item_2a4_3 = 0;
                _Comum_Item_2a4_4 = 0;
            break
            default:
                alert("Erro de código - calculo das quantidades de Weapon Ascension");
        }
    }
    else
    {
        //É qualquer outra raridade então mantém a quantidade 0
        _Dominio_2 = 0;
        _Dominio_3 = 0;
        _Dominio_4 = 0;
        _Dominio_5 = 0;
        _Comum_Item_1a3_1 = 0;
        _Comum_Item_1a3_2 = 0;
        _Comum_Item_1a3_3 = 0;
        _Comum_Item_2a4_2 = 0;
        _Comum_Item_2a4_3 = 0;
        _Comum_Item_2a4_4 = 0;
    }

    //Colocando as imagens no HTML
    if($BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Nome=="None")
    {
        document.getElementById(char+"WeaponImage").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponDominio_2").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponDominio_3").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponDominio_4").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponDominio_5").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponComum_Item_1a3_1").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponComum_Item_1a3_2").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponComum_Item_1a3_3").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponComum_Item_2a4_2").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponComum_Item_2a4_3").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponComum_Item_2a4_4").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        
        //Colocando os valores no HTML
        document.getElementById(char+"WeaponDominio_2_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponDominio_3_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponDominio_4_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponDominio_5_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponComum_Item_1a3_1_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponComum_Item_1a3_2_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponComum_Item_1a3_3_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponComum_Item_2a4_2_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponComum_Item_2a4_3_Quant").innerHTML = "0 / 0";
        document.getElementById(char+"WeaponComum_Item_2a4_4_Quant").innerHTML = "0 / 0";

        //Zerando os valores de weapons no $BancoDeDados_Farm
        for (item in $BancoDeDados_Farm)
        {
            //Entra item a item zerando as quantidades de armas
            $BancoDeDados_Farm[item][char].weapon = 0;
        }
    }
    else
    {
        document.getElementById(char+"WeaponImage").src = $BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Imagem;
        document.getElementById(char+"WeaponDominio_2").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+"2.png";
        document.getElementById(char+"WeaponDominio_3").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+"3.png";
        document.getElementById(char+"WeaponDominio_4").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+"4.png";
        document.getElementById(char+"WeaponDominio_5").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+"5.png";
        document.getElementById(char+"WeaponComum_Item_1a3_1").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+"1.png";
        document.getElementById(char+"WeaponComum_Item_1a3_2").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+"2.png";
        document.getElementById(char+"WeaponComum_Item_1a3_3").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+"3.png";
        document.getElementById(char+"WeaponComum_Item_2a4_2").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+"2.png";
        document.getElementById(char+"WeaponComum_Item_2a4_3").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+"3.png";
        document.getElementById(char+"WeaponComum_Item_2a4_4").src ="Image/"+$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+"4.png";
        
        //Colocando os valores no HTML
        if(_Dominio_2<10)
        {
            document.getElementById(char+"WeaponDominio_2_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+2].Own +" / 0"+_Dominio_2;
        }
        else
        {
            document.getElementById(char+"WeaponDominio_2_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+2].Own +" / "+_Dominio_2;
        }
        if(_Dominio_3<10)
        {
            document.getElementById(char+"WeaponDominio_3_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+3].Own +" / 0"+_Dominio_3;
        }
        else
        {
            document.getElementById(char+"WeaponDominio_3_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+3].Own +" / "+_Dominio_3;
        }
        if(_Dominio_4<10)
        {
            document.getElementById(char+"WeaponDominio_4_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+4].Own +" / 0"+_Dominio_4;
        }
        else
        {
            document.getElementById(char+"WeaponDominio_4_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+4].Own +" / "+_Dominio_4;
        }
        if(_Dominio_5<10)
        {
            document.getElementById(char+"WeaponDominio_5_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+5].Own +" / 0"+_Dominio_5;
        }
        else
        {
            document.getElementById(char+"WeaponDominio_5_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+5].Own +" / "+_Dominio_5;
        }
        if(_Comum_Item_1a3_1<10)
        {
            document.getElementById(char+"WeaponComum_Item_1a3_1_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+1].Own +" / 0"+_Comum_Item_1a3_1;
        }
        else
        {
            document.getElementById(char+"WeaponComum_Item_1a3_1_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+1].Own +" / "+_Comum_Item_1a3_1;
        }
        if(_Comum_Item_1a3_2<10)
        {
            document.getElementById(char+"WeaponComum_Item_1a3_2_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+2].Own +" / 0"+_Comum_Item_1a3_2;
        }
        else
        {
            document.getElementById(char+"WeaponComum_Item_1a3_2_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+2].Own +" / "+_Comum_Item_1a3_2;
        }
        if(_Comum_Item_1a3_3<10)
        {
            document.getElementById(char+"WeaponComum_Item_1a3_3_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+3].Own +" / 0"+_Comum_Item_1a3_3;
        }
        else
        {
            document.getElementById(char+"WeaponComum_Item_1a3_3_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+3].Own +" / "+_Comum_Item_1a3_3;
        }
        if(_Comum_Item_2a4_2<10)
        {
            document.getElementById(char+"WeaponComum_Item_2a4_2_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+2].Own +" / 0"+_Comum_Item_2a4_2;
        }
        else
        {
            document.getElementById(char+"WeaponComum_Item_2a4_2_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+2].Own +" / "+_Comum_Item_2a4_2;
        }
        if(_Comum_Item_2a4_3<10)
        {
            document.getElementById(char+"WeaponComum_Item_2a4_3_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+3].Own +" / 0"+_Comum_Item_2a4_3;
        }
        else
        {
            document.getElementById(char+"WeaponComum_Item_2a4_3_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+3].Own +" / "+_Comum_Item_2a4_3;
        }
        if(_Comum_Item_2a4_4<10)
        {
            document.getElementById(char+"WeaponComum_Item_2a4_4_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+4].Own +" / 0"+_Comum_Item_2a4_4;
        }
        else
        {
            document.getElementById(char+"WeaponComum_Item_2a4_4_Quant").innerHTML = $BancoDeDados_Quantidades[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+4].Own +" / "+_Comum_Item_2a4_4;
        }
        
        //Colocando os valores de weapons no $BancoDeDados_Farm
        if($BancoDeDados_Personagens[char].Own)
        {
            //Se possui o personagem, adiciona o valor
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+2][char].weapon = _Dominio_2;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+3][char].weapon = _Dominio_3;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+4][char].weapon = _Dominio_4;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+5][char].weapon = _Dominio_5;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+1][char].weapon = _Comum_Item_1a3_1;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+2][char].weapon = _Comum_Item_1a3_2;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+3][char].weapon = _Comum_Item_1a3_3;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+2][char].weapon = _Comum_Item_2a4_2;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+3][char].weapon = _Comum_Item_2a4_3;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+4][char].weapon = _Comum_Item_2a4_4;
        }
        else
        {
            //Valores zerados
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+2][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+3][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+4][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Dominio+5][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+1][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+2][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_1a3+3][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+2][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+3][char].weapon = 0;
            $BancoDeDados_Farm[$BancoDeDados_Armas[$BancoDeDados_Personagens[char].Weapon].Comum_Item_2a4+4][char].weapon = 0;
        }
    }
    
    if(Iniciador==1)
    {
        //Nada acontece
    }
    else
    {
        //Atualiza o Need do $BancoDeDados_Quantidades
        Atualiza_quantidades_totais()
    }    
}

// -------------------------------------------------------
//Função para atualizar se possui ou não o char
// -------------------------------------------------------
function Confirma_Personagem(char)
{ 
    $BancoDeDados_Personagens[char].Own=!$BancoDeDados_Personagens[char].Own;
    Atualiza_Valores_Char(char,0);
    Atualiza_BancoDeDadosChar();
}

// -------------------------------------------------------
//Função para atualizar as ascensões dos valores dos chars
// -------------------------------------------------------
function Atualiza_char_Ascension_Level(char,valor)
{
    $BancoDeDados_Personagens[char].Ascension_Level=valor;
    Atualiza_Valores_Char(char,0);
    Atualiza_BancoDeDadosChar();
}

// -------------------------------------------------------
//Função para atualizar as armas dos chars
// -------------------------------------------------------
function Atualiza_weapon(char)
{
    $BancoDeDados_Personagens[char].Weapon=document.getElementById(char+"Weapon").value;
    Atualiza_Valores_Char(char,0);
    Atualiza_BancoDeDadosChar();
}

// -------------------------------------------------------
//Função para atualizar as ascensões das armas dos chars
// -------------------------------------------------------
function Atualiza_weapon_Ascension_Level(char,valor)
{
    $BancoDeDados_Personagens[char].Weapon_Ascension_Level=valor;
    Atualiza_Valores_Char(char,0);
    Atualiza_BancoDeDadosChar();
}

// -------------------------------------------------------
//Função para atualizar os leveis de talento dos chars
// -------------------------------------------------------
function Atualiza_talento(char,tipo_talento)
{
    $BancoDeDados_Personagens[char]["Talent"+tipo_talento]=document.getElementById(char+"Talent"+tipo_talento).value;
    Atualiza_Valores_Char(char,0);
    Atualiza_BancoDeDadosChar();
}

// -------------------------------------------------------
//Função para calcular as quantidades totais necessárias
// -------------------------------------------------------
function Atualiza_quantidades_totais()
{
    //Cria a soma
    var Soma=0;
    for (item in $BancoDeDados_Quantidades)
    {
        Soma=0;
        for (char in $BancoDeDados_Personagens)
        {
            Soma=Soma+$BancoDeDados_Farm[item][char].char+$BancoDeDados_Farm[item][char].weapon;
        }
        //atualiza o need
        $BancoDeDados_Quantidades[item].Need=Soma;
    }
    Atualiza_BancoDeDadosQuantidades();
    Atualiza_BancoDeDadosFarm();
}


// -------------------------------------------------------
//Função para atualizar banco de dados quantidades
// -------------------------------------------------------
function Atualiza_BancoDeDadosQuantidades()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    //converte para JSON
    var Envio = JSON.stringify($BancoDeDados_Quantidades); 

    // Chama atualização para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, não faz nada
        }
    }
    xhttp.open("POST", "PHP/AtualizaBancoDeDadosQuantidades.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("Dados="+Envio+"&user="+user);
}

// -------------------------------------------------------
//Função para atualizar banco de dados farm
// -------------------------------------------------------
function Atualiza_BancoDeDadosFarm()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    //converte para JSON
    var Envio = JSON.stringify($BancoDeDados_Farm); 

    // Chama atualização para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, não faz nada
        }
    }
    xhttp.open("POST", "PHP/AtualizaBancoDeDadosFarm.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("Dados="+Envio+"&user="+user);
}

// -------------------------------------------------------
//Função para ler o banco de dados quantidades
// -------------------------------------------------------
function Ler_BancoDeDadosQuantidades()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    // Chama a leitura para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, não faz nada
            Resposta = this.responseText;
            $BancoDeDados_Quantidades=JSON.parse(Resposta);
        }
    }
    xhttp.open("POST", "PHP/LerBancoDeDadosQuantidades.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("user="+user);
}

// -------------------------------------------------------
//Função para atualizar banco de dados chars
// -------------------------------------------------------
function Atualiza_BancoDeDadosChar()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }
    //converte para JSON
    var Envio = JSON.stringify($BancoDeDados_Personagens); 

    // Chama atualização para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            //Quando atualizou, não faz nada
        }
    }
    xhttp.open("POST", "PHP/AtualizaBancoDeDadosChars.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("Dados="+Envio+"&user="+user);
}

// -------------------------------------------------------
//Função para ler o banco de dados char
// -------------------------------------------------------
function Ler_BancoDeDadosChar()
{
    // Conferindo LOGIN
    if (sessionStorage.getItem("user")==null)
    {
        //confere se o usuário não está no localStorage
        if(localStorage.getItem("user") == null)
        {
            //Não tem usuário
            var user = 'teste';
        }
        else
        {
            //Tem usuário no localStorage
            var user = localStorage.getItem("user");
        }
    }
    else
    {
        //Tem usuário no sessionStorage
        var user = sessionStorage.getItem("user");
    }

    // Chama a leitura para o servidor
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            Resposta = JSON.parse(this.responseText);
            if(Object.keys($BancoDeDados_Personagens).length!=Object.keys(Resposta).length)
            {
                //Não possui o mesmo número de chars, então tem que receber os valores e atualizar o banco de dados
                for (char in $BancoDeDados_Personagens)
                {
                    if(Resposta[char]!=undefined)
                    {
                        //Insere o valor do banco de dados neste aqui
                        $BancoDeDados_Personagens[char]=Resposta[char]
                    }
                    else
                    {
                        //Insere esses novos conteúdos para o banco de dados
                        console.log("Novo conteúdo no banco de dados de personagem = "+char);
                    }
                }
                // -------------------------------------------------------
                //Como atualizou o banco de dados, envia ele para o servidor
                // -------------------------------------------------------
                //converte para JSON
                var Envio = JSON.stringify($BancoDeDados_Personagens); 

                // Chama atualização para o servidor
                var xhttp;
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() 
                {
                    if (this.readyState == 4 && this.status == 200) 
                    {
                        //Quando atualizou não faz nada
                    }
                }
                xhttp.open("POST", "PHP/AtualizaBancoDeDadosChars.php", false); //o false não deixa ser assincrono
                xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhttp.send("Dados="+Envio+"&user="+user);
            }
            else
            {
                //Possui o mesmo número de chars, então apenas recebe
                $BancoDeDados_Personagens=Resposta;
            }
            for (char in $BancoDeDados_Personagens)
            {
                Atualiza_Valores_Char(char,1);
            }
        }
    }
    xhttp.open("POST", "PHP/LerBancoDeDadosChars.php", false); //o false não deixa ser assincrono
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("user="+user);
}