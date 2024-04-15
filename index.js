function ej01(){
    let n1 = prompt("Escribe el primer numero");
    let n2 = prompt("Escribe el segundo numero");
    return alert("La suma es: "+ (parseInt(n1)+parseInt(n2)));
}

function ej02(){
    let num = prompt("Escribe el numero a potenciar");
    let pot = prompt("Escribe la potencia");
    return alert("El numero potenciado es: "+Math.pow(parseInt(num),parseInt(pot)));
}

function ej03(){
    let n1 = prompt("Escribe el primer numero");
    let n2 = prompt("Escribe el segundo numero");
    let n3 = prompt("Escribe el tercer numero");
    return alert("La suma de los numeros al cubo es: "+(Math.pow(parseInt(n1),3)+Math.pow(parseInt(n2),3)+Math.pow(parseInt(n3),3)));
}

function ej04(){
    let base = prompt("Ingrese el valor de la base del triangulo");
    let alt = prompt("Ingrese la altura del triangulo");
    return alert("El area del triangulo sera: "+(parseInt(base)*parseInt(alt))/2);
}

let n1 = "";
let n2 = "";
let om = "";
function calculador(n1,n2,om){
    n1 = prompt("Ingrese el primer numero");
    n2 = prompt("Ingrese el segundo numero");
    om = prompt("Ingrese una de las siguientes operaciones: +,-,/,x,%")
    if(om=="+"){
        let resultado= parseInt(n1)+parseInt(n2);
        return alert("El resultado es "+resultado);
    }else if(om=="-"){
        let resultado= parseInt(n1)-parseInt(n2);
        return alert("El resultado es "+resultado);
    }else if(om=="/"){
        let resultado= parseInt(n1)/parseInt(n2);
        return alert("El resultado es "+resultado);
    }else if(om=="x"){
        let resultado= parseInt(n1)*parseInt(n2);
        return alert("El resultado es "+resultado);
    }else if(om=="%"){
        let resultado= parseInt(n1)*parseInt(n2)/100;
        return alert("El resultado es "+resultado);
    }else{
        let resultado= "El parámetro no es reconocido";
        return alert(resultado);
    }
}

//¿Cómo defines una función?
//Para definir una función en JavaScript, puedes utilizar la palabra clave function.
//¿Hasta cuantos argumentos puedes declarar en una función?
// Los argumentos pueden ser ilimitados pero es recomendable usar hasta un maximo de 6.

//reto 2
//1
let nomb = "";
let apell = "";
let edad = "";
let persona=(nomb,apell,edad)=> {
    nomb=prompt("Ingrese su nombre");
    apell=prompt("Ingrese su apellido");
    edad=prompt("Ingrese su edad");
    return alert("Hola mi nombre es "+nomb+" "+apell+" y mi edad es "+edad);
}