function actualizarEstado() {
    const estado = document.getElementById("estado");
    const texto = document.getElementById("texto-estado");
    const extra = document.getElementById("texto-extra");
    const reloj = document.getElementById("reloj");

    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();

    // Horarios de la ferretería
    const apertura = 7;          // 7 AM
    const cierre = 18;           // 6 PM L-V
    const cierreSabado = 16;     // 4 PM Sábado

    const dia = ahora.getDay();  // 0 domingo, 6 sábado
    let cierreHoy = (dia === 6) ? cierreSabado : cierre;

    // Reloj
    reloj.textContent = "Hora actual: " + ahora.toLocaleTimeString();

    // Lógica del estado
    if (hora >= apertura && hora < cierreHoy) {
        estado.className = "estado-box abierto";
        texto.textContent = "Estamos ABIERTO";

        if (hora === cierreHoy - 1 && minutos >= 30) {
            extra.textContent = "⚠ Cerramos en menos de 30 minutos";
        } else {
            extra.textContent = "Horario en servicio";
        }

    } else {
        estado.className = "estado-box cerrado";
        texto.textContent = "Estamos CERRADO";

        if (hora < apertura) {
            extra.textContent = `Abrimos hoy a las ${apertura}:00 AM`;
        } else {
            extra.textContent = `Volvemos a abrir mañana a las ${apertura}:00 AM`;
        }
    }
}

setInterval(actualizarEstado, 1000);
actualizarEstado();
