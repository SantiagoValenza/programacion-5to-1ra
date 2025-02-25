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



     //tp2

     /*1- Algoritmo que pida números hasta que se introduzca un cero. 
     Debe mostrar la suma y el promedio de todos los números introducidos.*/

     function Ejercicio1tp2(){
      let numero
      let acumulador= 0
      let contador = 0
      

      while(numero!==0){ 
        numero=parseInt(prompt("ingrese un numero"))
       if(numero!==0){
        acumulador+=numero //acumulador = acumulador+numero
        contador++
        console.log(numero)
       }
      }
      console.log("El promedio es "+acumulador/contador)
      console.log("La suma de los numeros es :"+ acumulador++)

     }
     //Ejercicio1tp2()

     /*2- Realizar un algoritmo que pida números (se pedirá por teclado la cantidad de números a introducir). 
     El programa debe informar de cuantos números introducidos son mayores que 0, menores que 0 e iguales a 0.*/

     function Ejercicio2tp2(){
        let cantidadDeNumeros = parseInt(prompt("¿Cuantos numeros desea ingresar?"))
        console.log("Va a ingresar "+ cantidadDeNumeros)
        let contador = 0
        let mayores=0
        let menores=0
        let ceros=0
        //siempre se define un valor asi con los ++ le permite ir sumando y pisando el valor inicial
        while(contador<cantidadDeNumeros){ 
            numero=parseInt(prompt("ingrese un numero"))
            console.log(numero)
            contador++
            console.log("el contador vale "+contador)
            if(numero>0){
                mayores++
            }else{
                if(numero<0){
                    menores++
                }else{
                    ceros++
                }
            } 
        }
        
        console.log("De los numeros que introducio hay : " + mayores+ " mayores a 0, "+ menores+ " menores, y " +ceros+ " ceros.")
     }
     //Ejercicio2tp2()

     /*3- Algoritmo que pida caracteres e imprima ‘VOCAL’ si son vocales y ‘NO VOCAL’ en caso contrario, 
     el programa termina cuando se introduce un espacio.*/
    
     function Ejercicio3tp2(){ 
     let letra 
     
    while(letra!==" "){
         letra=prompt("Ingresa una letra")
        if(letra==="A" || letra==="a" || letra==="E" || letra==="e"|| letra==="I" || letra==="i" || letra==="O" || letra==="o" || letra==="U" || letra==="u"){
            console.log("Es vocal")
        }else{
            console.log("No es vocal")
        }
    }
    
     }
     //Ejercicio3tp2()

     /*4- Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. 
     ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años?*/ 

     function Ejercicio4tp2(){ 
     let sueldo=1500
     
     for(let años=1; años <= 6; años++){
        sueldo=sueldo+(sueldo*0.10)
        console.log("En el año "+años+ " su sueldo fue de"+ sueldo)
     }

    }
     //Ejercicio4tp2()


     /*5- Una casa de hamburguesas sencillas (S), dobles (D) y triples (T), las cuales tienen un costo de $20, $25 y $28
      respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra. Suponiendo que los 
      clientes adquieren N hamburguesas, las cuales pueden ser de diferente tipo, realice un algoritmo para determinar 
      cuánto deben pagar. */ 

      function Ejercicio5tp2(){



      }
      Ejercicio5tp2()