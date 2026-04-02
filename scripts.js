function calcular(){
        //1. Obter os valores digitados pelo usuário
        //number é uma função que converte texto em número
        // parseInt() converte o texto em número inteiro
        // || 0 significa "ou zero" (caso o usuário não digite nada, considera 0)
        // document.getElementById("qtdeArroz") -> busca a caixa de entrada com o id "qtdeArroz"
        // .value -> pega o valor que está dentro da caixa
        // JS é uma linguagem não tipada (sem tipo de dados)
        let arroz = parseInt(document.getElementById("qtdeArroz").value) || 0;
        let feijao = parseInt(document.getElementById("qtdeFeijao").value) || 0;
        let Macarrao = parseInt(document.getElementById("qtdeMacarrao").value) || 0;
        let Soja = parseInt(document.getElementById("qtdeSoja").value) || 0;
        let Kits = parseInt(document.getElementById("qtdeKits").value) || 0;
        let Suplementos = parseInt(document.getElementById("qtdeSuplementos").value) || 0;
        let Leite = parseInt(document.getElementById("qtdeLeite").value) || 0;

        //2. Calcular os pontos
        // Multiplica a quantidade de arroz por 10 e a quantidade de feijão por 8

        
        let total = (feijao *8) + (Macarrao*2) + (Soja*4) + (arroz * 10);
        if (Kits == 60){
            pontos = pontos + 5000
        }
        else{
            
        }


        //3. Exibir o resultado
        document.getElementById("resultado").innerText = "Pontuação Total: " + total + " pontos";
    }