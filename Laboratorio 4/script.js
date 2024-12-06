let operacion = '';

function menu(){
    operacion = prompt(`\nCalculadoraBasica
    1 - suma
    2 - resta
    3 - mult
    4 - division
    0 - salir

    Elija una opcion:`);


if (operacion== '1'|| operacion == '2' || operacion == '3' || operacion == '4' ){
    capturaDatos();
    menu();
}else if( operacion == '0' || operacion== null){
    alert('Fin de la operacion');
}else{
    alert('Opcio NO valida');
    menu();
    }
}

function capturaDatos(){
    let num1, num2
    while (isNaN(num1)){
        num1 = prompt('ingrese un primer numero')}
    while (isNaN(num2)){
            num2 = prompt('ingrese un segundo numero')
            
    } // number combierte in string a numerico
    realizarOperacion(Number(num1),Number(num2),operacion);
}

function realizarOperacion(num1, num2, operacion){
    if (operacion == '1')
        alert(`el resultado de la SUMA es: ${num1+num2}`)
    else if ( operacion == '2')
        alert(`el resultado de la RESTA es: ${num1-num2}`)
    else if (operacion == '3')
        alert(`el resultado de la MULTIPLICACION es: ${num1*num2}`)
    else if (operacion == '4'){
        if (num1 !== 0)
            alert(`el resultado de la DIVISION es: ${num1/num2}`)
        else
            console.log("no se admite division por 0");
}else{
    console.log('opcion no valida');
    menu();
}

}
menu();