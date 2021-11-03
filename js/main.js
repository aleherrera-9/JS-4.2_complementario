//esta definido que la entrada se transforma a lowercase al ingresarse el valor
let flag = true;
let userName;
let age;
let number=0;
//busca el elemento
function element() {
    do {
        let zodiac = (prompt("Ingresa tu signo del horoscopo para saber que elemento sos")).toLowerCase();
        switch (zodiac) {
            case 'aries':
                alert('tu elemento es fuego');
                break;
            case 'leo':
                alert('tu elemento es fuego');
                break;
            case 'sagitario':
                alert('tu elemento es fuego');
                break;
            case 'tauro':
                alert('tu elemento es tierra');
                break;
            case 'virgo':
                alert('tu elemento es tierra');
                break;
            case 'capricornio':
                alert('tu elemento es tierra');
                break;
            case 'geminis':
                alert('tu elemento es aire');
                break;
            case 'libra':
                alert('tu elemento es aire');
                break;
            case 'acuario':
                alert('tu elemento es aire');
                break;
            case 'cancer':
                alert('tu elemento es agua');
                break;
            case 'escorpio':
                alert('tu elemento es agua');
                break;
            case 'piscis':
                alert('tu elemento es agua');
                break;
            default:
                alert('el signo ingresado no existe');

        }
        flagLocal = parseInt(prompt("Ingresa una opcion: "
            + "\n 1- Volver a ingresar un signo"
            + "\n 2- Ir al menu principal"
            + "\n *presiona cualquier tecla para finalizar*")
            );
        if(flagLocal==2){
            menu();
        }
    } while (flagLocal == 1);


}
//ingresa la info del usuario
function personalInfo(){
    alert("Welcome");
    userName=prompt('Ingresa tu nombre');
    age=prompt('Ingresa tu edad');
    while(isNaN(age)){
        age=prompt('Ingresa una edad valida');
    }
}
//genera un numero de la suerte
function luckyNumber(){
    let localNumber=prompt("Ingresa un numero entre 1 y 10 para calcular tus numeros de la suerte");
    while(isNaN(localNumber)||(localNumber>11 || localNumber<0)){
        localNumber=prompt('Ingresa otro valor ');
    }
    if(age!=0){
            number=age/localNumber;
            alert(userName+" tu numero de la suerte para esta semana es "+parseInt(number));
        
        flagLocal = parseInt(prompt("Ingresa una opcion: "
            + "\n 1- Volver al menu principal"
            + "\n *presiona cualquier tecla para finalizar*")
            );
        if(flagLocal==1){
            menu();
        }
    }
    
}
//opciones para elegir se sale con cualquier tecla que no este dentro de las opciones
function menu() {
    let option = prompt("Ingresa una opcion: "
        + "\n 1-Conocer mi elemento Zodiacal"
        + "\n 2-Conocer mi numero de la suerte para esta semana"
        + "\n *presiona cualquier tecla para salir*")
    if (option == 1) {
        element();
    }
    if (option == 2) {
       luckyNumber(); 
    }
}
personalInfo();
menu();

