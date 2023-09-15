// Descripción: Permite la conexión con una API basada en una librería que permite el envío de infromación asociada a los
// usuarios de la aplicación via correo electrónico

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID);

export default sgMail;
