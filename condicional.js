/*1-Se trata de escribir un script que diga si un número es par o es impar. Recordemos que un número es par si al
 dividirlo por 2 da como resto 0.
*/
function Ejercicio1(){
    let numero = parseInt(prompt("Elija un numero"))
    if (numero % 2 === 0 ){ 
        alert ("Es par")
        }else{
        alert ("Es impar")
    }
}
//aca abajo llamo a la función
//Ejercicio1()


/*2-Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo*/
function Ejercico2(){
    let numero = parseInt(prompt("Elija un numero"))
    if(numero >=0){
        alert("Es positivo")
    }else{
        alert("Es negativo")
    }
}
//Ejercico2()


/*3- En este ejercicio se debe pedir dos números enteros y devolver el cociente de dividir
 el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error  */

 function Ejercicio3(){
    let numero1 = parseInt(prompt("Elija el primer numero"))
    let numero2 = parseInt(prompt("Elija el segundo numero"))
    
    if(numero2!==0){ 
        let resultado = (numero1/numero2)
        alert(resultado)
    }else{
        alert("Error")
    }
    
 }
 //Ejercicio3()


 /*4- Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A 
 en mayúscula o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...  */

 function Ejercicio4(){
    let letra = prompt("Elija una letra. A, B, C, D")
    if(letra === "a" || letra === "A" ){
        alert ("Acertaste!")
    }else{
        alert ("Te equivocaste...")
    }
 }
 //Ejercicio4()


 /*5- En este ejemplo el usuario entrará dos números. Debe devolver la diferencia entre el mayor y el menor */
 
 function Ejercicio5(){
    let numero1 = parseInt(prompt("Ingrese el primer numero"))
    let numero2 = parseInt(prompt("Ingrese el segundo numero"))
    let diferencia = 0
    if(numero1>=numero2){
        diferencia= numero1 - numero2 
    }else{
        diferencia= numero2 - numero1
    }
    alert ("La diferencia entre los dos numeros es: "+diferencia)
 }
 //Ejercicio5()


 /*6- Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente 
 puede pedir vino, cerveza, refresco, agua. Si pide una cerveza o vino se le dirige a la barra y si no
  pues se le dirige a la tienda.*/

  function Ejercicio6(){
    let pedido=prompt("Que desea pedir? Vino, Cerveza, Refresco o agua?")
   
    if(pedido === "cerveza" || pedido === "Cerveza" || pedido === "vino" || pedido==="Vino" ){
         alert("Se le redirigira a la barra")
    } else{
        if(pedido === "Refresco" || pedido === "refresco" || pedido === "Agua" || pedido==="agua" ){
            alert("Se le redigira a la tienda")
       } else{
           alert("Usted pidio algo que no esta registrado.")
       }
    }

  }
  //Ejercicio6()


  /*7-Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús.
   Si va en tren o en colectivo le recordará que lleve dinero para el pasaje. */

   function Ejercicio7(){
   let viaje=prompt("En que desea viajar? Auto, Tren, Bicicleta o Colectivo? ")

   if(viaje === "Auto" || viaje === "auto" || viaje === "Bicicleta" || viaje ==="bicicleta" ){
       alert("Que tenga un buen viaje!")
    } else{
        if(viaje === "Tren" || viaje === "tren" || viaje === "Colectivo" || viaje ==="colectivo" ){
       alert("Que tenga buen viaje! Recuerde llevar dinero para su pasaje.")
      } else{
         alert("Usted quiere viajar en algo que no esta disponible en estosmomentos, vuelva a intentar.")
      }
    }
   }
   //Ejercicio7()


   /*8- En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
   Este ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad 
   está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado. */

   function Ejercicio8(){
     let velocidad=parseFloat(prompt("Ingrese a que velocidad en km va."))
     if(velocidad>40 && velocidad <60){
       alert("Pasaste la prueba!!")
     }else{
        alert("Estas descalificado por no ir entre 40km/h y 60km/h")
     }
   }
   //Ejercicio8()


   /*10- Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio.
    El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y Notable por encima de 7.*/
    function Ejercicio10(){
        alert("A continuacion el programa le pedira 3 de tus notas para evaluar si usted desaprobo, aprobo o si es notable (nota final encima de 7)")
     let nota1= parseInt(prompt("Primera nota"))
     let nota2= parseInt(prompt("Segunda nota"))
     let nota3= parseInt(prompt("Tercera nota"))
    
     if((nota1<=10 && nota1>=1) && (nota2<=10 && nota2>=1) && (nota3<=10 && nota3>=1)){

        let final= 0
        final=(nota1+nota2+nota3)/3
        if(final<5){
           alert("Usted esta desaprobado.")
        }else{
           if(final>=5 && final<=7){
               alert("Usted esta aprobado, felicitaciones!")
           }else{
               alert("Usted es notable! Felicidades!")
           }
        }

     }else{
        alert("Las notas deben ser entre 1 y 10")
     }

    }
     //Ejercicio10()
    