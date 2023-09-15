// Descripción: Son funciones que permiten realizar funcionalidades dentro de los componentes de la aplicación, para mejorar la 
// limpieza y legibilidad de código se abstraen de los componentes y se crea el componente que las almacena.

import bcrypt from "bcrypt";
export async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}
export function generarNumeroAleatorio() {
    var numero = Math.floor(Math.random() * 90000) + 10000;
    return numero;
}

export function compararFechas(fecha1, fecha2) {
    // Crear objetos Date a partir de las cadenas de fecha e internacionaliza las fechas
    var date1 = new Date(fecha1).toISOString();
    var date2 = new Date(fecha2).toISOString();

    // Comparar las fechas
    return date1 > date2;
}

export function passwordsAreEqual(pOne, pTwo) {
    return pOne === pTwo;
}

//const passwordMatch = await bcrypt.compare(password, savedPassword);

export function createNotificationMessage(email, roomId) {
    const message = {
        to: email,
        from: "votechoice.notifications@gmail.com",
        subject: "Votación finalizada",
        html: `
            <h1>La votación ha terminado!</h1>
            <h3>Ya tenemos los resultados de la encuesta: ${roomId}</h3>
            <h3>Ingresa Aquí:</h3>
            <a href="https://nocountry-deploy.vercel.app/login" target="_blank">Ver resultados</a>
        `,
    };
    return message;
}
