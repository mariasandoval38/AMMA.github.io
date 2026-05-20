// FRASES SEGÚN EMOCIÓN

const emotionMessages = {

    feliz:
        "Tu alegría puede iluminar incluso los días más oscuros ☀️",

    triste:
        "Está bien sentirse triste. Todo pasa y volverás a brillar 🌷",

    ansiedad:
        "Respira profundo. No tienes que resolver todo hoy 💛",

    cansado:
        "Descansar también es avanzar ✨",

    calmado:
        "La paz interior es uno de los regalos más valiosos 🌸",

    enojado:
        "Respira, las cosas suenan mejor cuando las cuentas☺️"

};

// SELECCIONAR EMOCIÓN

const emociones = document.querySelectorAll(".emocion");

emociones.forEach((emocion) => {

    emocion.addEventListener("click", () => {

        emociones.forEach((e) => {
            e.classList.remove("selected");
        });

        emocion.classList.add("selected");

        const quote = document.getElementById("quote");

        if(emocion.classList.contains("feliz")){
            quote.textContent = emotionMessages.feliz;
        }

        if(emocion.classList.contains("triste")){
            quote.textContent = emotionMessages.triste;
        }

        if(emocion.classList.contains("ansiedad")){
            quote.textContent = emotionMessages.ansiedad;
        }

        if(emocion.classList.contains("cansado")){
            quote.textContent = emotionMessages.cansado;
        }

        if(emocion.classList.contains("calmado")){
            quote.textContent = emotionMessages.calmado;
        }

    });

});

// FRASES ALEATORIAS

const quotes = [

    "Eres más fuerte de lo que imaginas 💪",

    "Todo lo que sientes es válido 🌸",

    "No eres lo que logras, eres lo que superas💫",

    "Cada día es una nueva oportunidad ✨",

    "Confía en ti y en tu proceso 🌷",

    "Prohibido rendirse, respira hondo y sigue🤍",

    "No necesitas que los demas crean en ti, necesitas creer en ti mismo🤯",

    "No te compares con nadie mas que con la persona que fuiste ayer🎭",

    "Tienes el poder de cambiar tu historia en cualquier momento🪄",


];

function changeQuote(){

    const quote = document.getElementById("quote");

    const random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random];

}

// CHAT

function sendMessage(){

    const input = document.getElementById("userInput");

    const chatBox = document.getElementById("chatBox");

    const text = input.value.trim();

    if(text === "") return;

    // MENSAJE USUARIO

    const userMessage = document.createElement("div");

    userMessage.classList.add("message", "user");

    userMessage.textContent = text;

    chatBox.appendChild(userMessage);

    // RESPUESTA AMMA

    const ammaMessage = document.createElement("div");

    ammaMessage.classList.add("message", "amma");

    let response =
        "Gracias por contarme como te fue hoy, cuentame ¿Como te sientes hoy?😊 ";

    if(text.includes("triste")){
        response =
            "Aunque hoy sea difícil, recuerda que no estás solo, cuentame ¿Por que te sientes asi?";
    }

    else if(text.includes("feliz")){
        response =
            "Me alegra muchísimo saber que te sientes feliz☀️ ¿Por que te sientes asi?";
    }

    else if(text.includes("ansiosa")){
        response =
            "Respira despacio. Realiza un ejercicio de respiracion conmigo, inahala 4 segundos, reten el aire 7 segundos y exhala en 8 segundos. hazlo vas veces que sean necesario hasta sentirte mejor.💖";
    }

        else if(text.includes("ansioso")){
        response =
            "Respira despacio. Realiza un ejercicio de respiracion conmigo, inahala 4 segundos, reten el aire 7 segundos y exhala en 8 segundos. hazlo vas veces que sean necesario hasta sentirte mejor.💖";
    }

    else if(text.includes("enojado")){
        response =
            "Cuentame por que te sientes asi. No es fácil lidiar con momentos así. No tienes que pasar por esto solo; aquí estoy para escucharte con atención y acompañarte en lo que decidas hacer hoy.🤍";
    }

        else if(text.includes("enojada")){
        response =
            "Cuentame por que te sientes asi. No es fácil lidiar con momentos así. No tienes que pasar por esto solo; aquí estoy para escucharte con atención y acompañarte en lo que decidas hacer hoy.🤍";
    }

        else if(text.includes("estresado")){
        response =
            "¿Cuentame que es lo que te tiene asi?👀";
    }

            else if(text.includes("estresada")){
        response =
            "¿Cuentame que es lo que te tiene asi?👀";
    }



    ammaMessage.textContent = response;

    setTimeout(() => {

        chatBox.appendChild(ammaMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    input.value = "";

}

// DIARIO

function saveJournal(){

    const text =
        document.getElementById("journal").value;

    localStorage.setItem("ammaJournal", text);

    document.getElementById("saveMessage")
        .textContent = "Tu diario fue guardado con exito";

}

// CARGAR DIARIO

window.onload = () => {

    const saved =
        localStorage.getItem("ammaJournal");

    if(saved){
        document.getElementById("journal").value = saved;
    }

};