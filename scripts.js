'use strict'

let score = 0;
let respuestas = ['CELESTE','CALABAZA','DIA DE LA BANDERA','ALBERTO FERNANDEZ','DOS'];
let preguntaNumero = 0

let pregunta1 = {
    pregunta: 'DE QUE COLOR ES LA FRANJA SUPERIOR DE LA BANDERA ARGENTINA?',
    respuesta1: 'BLANCO',
    respuesta2: 'VIOLETA',
    respuesta3: 'CELESTE',
};

let pregunta2 = {
    pregunta: 'QUE VERDURA LE DA SU COLOR CARACTERISTICO AL LOCRO?',
    respuesta1: 'CEBOLLA',
    respuesta2: 'CALABAZA',
    respuesta3: 'ZANAHORIA',
};

let pregunta3 = {
    pregunta: 'QUE SE CELEBRA EL 20 DE JUNIO EN ARGENTINA?',
    respuesta1: 'DIA DE LA BANDERA',
    respuesta2: 'DIA DEL AMIGO',
    respuesta3: 'DIA DEL VETERANO',
};

let pregunta4 = {
    pregunta: 'QUIEN ES EL PRESIDENTE DE ARGENTINA?',
    respuesta1: 'CARLOS MENEM',
    respuesta2: 'ALBERTO FERNANDEZ',
    respuesta3: 'MAURICIO MACRI',
};

let pregunta5 = {
    pregunta: 'CUANTAS COPAS DEL MUNDO TIENE LA SELECCION ARGENTINA?',
    respuesta1: 'UNA',
    respuesta2: 'CUATRO',
    respuesta3: 'DOS',
};

let todasLasPreguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5];

function comenzar(){
        cambiarPregunta(todasLasPreguntas);
        document.getElementById("home").style.display = "none"
        document.getElementById("trivia").style.display = ""
        document.getElementById("puntaje").style.display = ""
}

function cambiarPregunta(todasLasPreguntas){
    if(preguntaNumero <= 4){
        document.getElementById("quest").innerHTML = todasLasPreguntas[preguntaNumero].pregunta;
        document.getElementById("respuesta1").innerHTML = todasLasPreguntas[preguntaNumero].respuesta1;
        document.getElementById("respuesta2").innerHTML = todasLasPreguntas[preguntaNumero].respuesta2;
        document.getElementById("respuesta3").innerHTML = todasLasPreguntas[preguntaNumero].respuesta3;
    }else{
        document.getElementById("puntajeFinal").innerHTML = ("FIN DE JUEGO!!!<br> TU PUNTAJE FINAL ES " + score);
        document.getElementById("trivia").style.display = "none";
        document.getElementById("puntaje").style.display = "none";
        document.getElementById("final").style.display = "";
        document.getElementById("puntajeFinal").style.display = "";
    }
}

function responder(b){
	switch(b.id){
	   case "respuesta1":
            if(respuestas.includes(document.getElementById("respuesta1").innerText)){
                alert("correcto");
                score++;
                preguntaNumero++;
                document.getElementById("puntaje").innerHTML = ("Tu Puntacion es: " + score);
                cambiarPregunta(todasLasPreguntas);
            }else{
                alert("incorrecto");
                preguntaNumero++;
                cambiarPregunta(todasLasPreguntas);
                break;
            }
            break;
	   case "respuesta2":
            if(respuestas.includes(document.getElementById("respuesta2").innerText)){
                alert("correcto");
                score++;
                preguntaNumero++;
                document.getElementById("puntaje").innerHTML = ("Tu Puntacion es: " + score);
                cambiarPregunta(todasLasPreguntas);
            }else{
                alert("incorrecto");
                preguntaNumero++;
                cambiarPregunta(todasLasPreguntas);
                break;
            }
            break;
	   case "respuesta3":
            if(respuestas.includes(document.getElementById("respuesta3").innerText)){
                alert("correcto");
                score++;
                preguntaNumero++;
                document.getElementById("puntaje").innerHTML = ("Tu Puntacion es: " + score);
                cambiarPregunta(todasLasPreguntas);
            }else{
                alert("incorrecto");
                preguntaNumero++;
                cambiarPregunta(todasLasPreguntas);
                break;
            }
            break;
    }
}