import { Resend } from "resend";

// Inicializamos el cliente una sola vez de forma global
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendMailParams {
    to: string;
    subject: string;
    text: string;
    replyTo?: string;
}

export const mailService = {
    async sendTextEmail({ to, subject, text, replyTo }: SendMailParams) {
        try {
            const response = await resend.emails.send({
                from: "Portafolio B2B <onboarding@resend.dev>",
                to,
                subject,
                text,
                replyTo,
            });
            return { success: true, data: response };
        } catch (error) {
            console.error("[MailService Error]:", error);
            return { success: false, error: "Fallo en el proveedor de correos." };
        }
    }
};