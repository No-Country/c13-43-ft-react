// Descripción: Este archivo contiene una función que maneja las solicitudes POST relacionadas con el formulario de contacto en la aplicación.
// Cuando se recibe una solicitud POST con datos del formulario de contacto, esta función procesa los datos y envía un 
// correo electrónico de notificación al destinatario.

// Funcionamiento: La función primero obtiene los datos del cuerpo de la solicitud POST, que incluyen información como el 
// mensaje del usuario, su dirección de correo electrónico, número de teléfono y nombre. Luego, se crea un objeto de 
// mensaje que contiene estos datos y se configura con un remitente, destinatario y asunto específicos. Finalmente, se 
// utiliza una biblioteca de correo electrónico (sgMail) para enviar el mensaje al destinatario especificado. Si el proceso
// se completa correctamente, se devuelve una respuesta JSON con un mensaje de confirmación. En caso de cualquier error
// durante el proceso, se captura y se devuelve una respuesta de error.

import { NextResponse } from "next/server";
import sgMail from "@/lib/SendgridConn";

//si no vota nadie, de todos modos hay que notificar al creador
export async function POST(request) {
    try {
        const body = await request.json();
        const { contactEmail, contactMessage, contactPhone, contactName } =
            body;
        const message = {
            to: "pablomurillo.sp@gmail.com",
            from: "votechoice.notifications@gmail.com",
            subject: "Nos han contactado desde VoteChoice",
            html: `     
                <h3>Mensaje:</h3>
                <p>${contactMessage}</p>
                <h3>Remitente:</h3>
                <p>email: ${contactEmail}</p>
                <p>telefono: ${contactPhone}</p>
                <p>nombre: ${contactName}</p>

            `,
        };
        const messageFromContactForm = await sgMail.send(message);
        return NextResponse.json({ messageFromContactForm });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.error("Error al procesar la solicitud");
    }
}
