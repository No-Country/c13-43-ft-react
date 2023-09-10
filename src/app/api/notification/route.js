import { NextResponse } from "next/server";
import sgMail from "@/lib/SendgridConn";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, name, subject, message } = body;
        const msg = {
            to: email,
            from: "votechoice.notifications@gmail.com", // Cambia esto a tu remitente verificado
            subject: subject,
            html: `
      <h1>La votacion ha terminado!</h1>
      <h3>De parte de: ${name}</h3>
      <h3>Mensaje:</h3>
      <p>${message}</p>
    `,
        };

        await sgMail.send(msg);

        return NextResponse.json({ notificationSent: true });
    } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
        return NextResponse.json({
            notificationSent: false,
            error: error.message,
        });
    }
}
