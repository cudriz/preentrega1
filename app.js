let partipante = prompt("Bienvenido al torneo mas grande de freestyle, ingresa tu nombre");
let dinero = Number(prompt(`"Hola ${partipante}, para continuar debes ingresar el valor de la inscripcion que es $10"`));
let valorInscipcion = 10;

// aqui se validara si cumple con el pago de la inscripcion

if(dinero >= valorInscipcion){
    alert(`Gracias ${partipante}, tu pago ha sido exitoso, ya estas inscrito en el torneo`);
    mostrarciudades ();
   }  else{
   alert("para inscribirte debes cancelar el valor de la inscripcion");    
}

//funciones

function mostrarciudades(){
    let ciudades =  prompt(`${partipante} en que ciudad te encuentras?: `); 
    switch  (ciudades.toLowerCase()) {
        case "medellin" :
        alert(` ${partipante} en la ciudad de medellin contamos con estos horarios :
        01-01-2023, desde 08:00 am hasta 05:00 pm, en la parque de las luces
        05-01-2023, desde 08:00 am hasta 04:00 pm, en la plaza municipal
        07-01-2023, desde 08:00 am hasta 02:00 pm, en el coliseo nuestro señor `);
        break;
        case "cali" :
            alert(` ${partipante} en la ciudad de cali contamos con estos horarios :
            02-01-2023, desde 08:00 am hasta 05:00 pm, en la plaza de toros
            04-01-2023, desde 08:00 am hasta 04:00 pm, en el parque del barrio 6 de enero
            06-01-2023, desde 08:00 am hasta 02:00 pm, en el estadio bernabeu`);
            break;
            case "bogota" :
                alert(` ${partipante} en la ciudad de bogota contamos con estos horarios :
                03-01-2023, desde 08:00 am hasta 05:00 pm, en la universidad nacional
                08-01-2023, desde 08:00 am hasta 04:00 pm, en el colegio trujillo
                09-01-2023, desde 08:00 am hasta 02:00 pm, en la plaza simon `);
                break;
                default :
                alert(`"Ingrese un valor correcto ej: medellin, cali, bogota"`);
                break;
            }
        }
    

