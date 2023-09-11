import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID);

export default sgMail;
