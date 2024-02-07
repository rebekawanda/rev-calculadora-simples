function calc(){
   const op = document.querySelector('#op').value; // operação 
   const num = document.querySelector('#num').value; // primeiro num; 
   const n = document.querySelector('#n').value; // segundo num; 
   var resul = 0;

   if(op == "soma" ||op == "+" || op == "somar" || op == "Soma" || op == "Somar"){
      resul = parseInt(num) + parseInt(n); // converte o num em inteiro
      alert(`O resultado da soma dos numeros é ${resul}`); //declarar variavel no alert

   } else if(op == "subtração" || op == "-" || op == "subtrair" || op == "Subtração" || op == "Subtrair" || op == "subtracao" || op == "Subtracao"){
      resul =  parseInt(num) - parseInt(n);
      alert(`O resultado da subtração dos numeros é  ${resul}`);

   } else if(op == "multiplicação" || op == "*" || op == "x" || op == "Multiplicação" || op == "multiplicar" || op == "Multiplicar" || op == "multiplicacao" || op == "Multiplicacao"){
      resul = parseInt(num) * parseInt(n);
      alert(`O resultado da multiplicação dos numeros é  ${resul}`);

   } else if (op == "divisão" || op == "/" || op == "Divisão" || op == "Dividir" || op == "dividir" || op == "divisao" || op == "Divisao"){
     resul = parseInt(num) / parseInt(n);
      alert(`O resultado da divisão dos numeros é ${resul}`);

   }else {
      alert(`Erro`);
   }
   
}