//exercicio1

/*let n1, n2, n3

n1 = prompt("Digite o primeiro número: ")
n2 = prompt("Digite o segundo: ")  
n3 = prompt(" digite o terceiro: ")

 
function maior(n1,n2,n3){
if (n1 > n2 && n1 > n3){
alert("O número maior é:" + n1)

}else if (n2 > n3 && n2 > n1 ){
alert ("O número maior é:" + n2)

}else{
   if(n3>n1 && n3>n2){
      alert ("O número maior é:" + n3)}
   }
}
  maior (parseInt(n1), parseInt(n2), parseInt(n3))


  function menor(n1,n2,n3){
   if(n1<n2 && n1<n3){
      alert("O número menor é:" + n1)
   }else if (n2<n3 && n2<n1){
      alert("O menor número é:" + n2)
   }else{
      if(n3<n1 && n3<n2){
         alert("O menor número é:" + n3)
      }
   }
  }
  menor(parseInt(n1), parseInt(n2), parseInt(n3))*/



  //exercicio2

 /* let taxaImposto, custo, vendaFinal

custo = prompt ("Digite o custo do produto: ")
taxaImposto = prompt ("Digite o imposto sobre a venda em porcentagem: ")

function somalImposto (custo, taxaImposto) {
    vendaFinal = parseFloat(custo) + parseFloat((taxaImposto/100) * custo)
    return alert (vendaFinal)
}
somalImposto (custo, taxaImposto)*/


//exercicio3

/*let H, M

H = prompt("Digite a hora")
M = prompt("Digite o minuto")

function conversao (DD1, DD2){
   if(DD1 > 12 && DD1 < 24 && DD2 >= 0 && DD2 <= 59){
      return(DD1 - 12 + ":" + DD2 + "P.M.")
   }else if(DD1 <= 12 && DD2 >= 0 && DD2 <= 59){
      return(DD1 + ":" + DD2 + "A.M.")
   }else if(DD1 <= 0 || DD1 > 24 || DD2 <= 0 || DD2 > 59){
      return("Há algum valor inválido")
   }
}
    alert(Conversao(H, M))*/

//exercicio4

/*let num1 , porc, resul
num1 = prompt("Digite seu numero");
porc = prompt("Digite sua porcentagem");
function calculo(num1, porc){
    resul = (num1*porc)/100 ;
    return alert("O resultado é " + resul);
}
calculo(num1,porc);*/


//exercicio5

/*let num1, num2, soma, sub, mult, divi;
num1 = prompt("Digite o 1° numero");
num2 = prompt("Digite o 2° numero");
 function x (num1, num2){
    soma = parseInt(num1) + parseInt(num2);
    sub = parseInt(num1) - parseInt(num2);
    mult = parseInt(num1) * parseInt(num2);
    divi = parseInt(num1) / parseInt(num2);

    return alert("A soma é: "+ soma + "\nSubtração é: " + sub + "\nA multiplicação é: " + mult + "\nA Divisão é: " + divi);
}x (num1,num2);*/


//exercicio6

/*let mes
mes = prompt("Digite um numero de 1 a 12 : ");
switch(mes){
    case "1": alert("Janeiro");
    break;
    case "2": alert("o mês é: Fevereiro de 2022");
    break;
    case "3": alert("o mês é: Março de 2022");
    break;
    case "4": alert("o mês é: abril de 2022");
    break;
    case "5": alert("o mês é: Maio de 2022");
    break;
    case "6": alert("o mês é: junho de 2022");
    break;
    case "7": alert("o mês é: Julho de 2022");
    break;
    case "8": alert("o mês é: Agosto de 2022");
    break;
    case "9": alert("o mês é: Setembro de 2022");
    break;
    case "10": alert("o mês é: Outubro de 2022");
    break;
    case "11": alert("o mês é: Novembro de 2022");
    break;
    case "12": alert("o mês é: Dezembro de 2022");
    break;

}*/
