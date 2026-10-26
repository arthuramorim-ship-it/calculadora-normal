/*
Operadores arisméticos:
+ soma
- subtração 
* multiplicação
/ divisão
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)

operadores de atribuição:
= igual 
+= mais ou igual
-= menos ou igual
/=dividido ou igual
*= multiplicação ou igual

operadores de sequencia:
+(serve para concatenar valores)
    (string ou variáveis))
- (serve para subtrair valores
    (string ou variaveis))

Operadores de comparação:
RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)

==(comparar 2 valores)
=== (comparar valores e tipo de dado)
!=(diferente) de valores apenas
!== (comparar a diferença de valores e tipo de dado)

<menor      > maior
<= menor ou igual   >= maior ou igual
*/

function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 + n2;
    document.getElementById("resultado")
    .innerHTML= operacao;

if(operacao < 0){
    corResultado.style.backgroundColor = "red";
}

else{
    corResultado.style.backgroundColor = "lightgreen";
}

}

//Alterar a cor do resultado caso o número for negativo
const corResultado = document.getElementById("resultado")



function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 - n2;
    document.getElementById("resultado")
    .innerHTML= operacao;

    if(operacao < 0){
    corResultado.style.backgroundColor = "red";
}

else{
    corResultado.style.backgroundColor = "lightgreen";
}
}

function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0){
        document.getElementById("resultado")
        .innerHTML = "erro: divisão por 0"
        
        document.getElementById("resultado")
    .style.backgroundColor = "yellow";
    }
    else{
        
        let operacao = n1 / n2;
    document.getElementById("resultado")
    .innerHTML= operacao;

    const corResultado = document.getElementById("resultado");

    if(operacao < 0){
    corResultado.style.backgroundColor = 
    "red";
}

else{
    corResultado.style.backgroundColor = 
    "lightgreen";
}


    }

}

function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let operacao = n1 * n2;
    document.getElementById("resultado")
    .innerHTML= operacao;

    if(operacao < 0){
    corResultado.style.backgroundColor = "red";
}

else{
    corResultado.style.backgroundColor = "lightgreen";
}
}

function limpar(){
    let n1 = Number(document.getElementById("num1").value="");
    let n2 = Number(document.getElementById("num2").value="");
    let operacao = n1 = n2;
    document.getElementById("resultado").innerHTML ="---";

    if(operacao < 0){
    corResultado.style.backgroundColor = "red";
}

else{
    corResultado.style.backgroundColor = "lightgreen";
}
    
}

function limpar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "---";
    document.getElementById("resultado")
    .style.backgroundColor = "ligthgreen";
    


}
