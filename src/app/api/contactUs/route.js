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
