"use server";

import { contactSchema, ContactFormValues } from "../schemas/contact.schema";
import { mailService } from "@/services/mail.service";

export async function submitContactAction(data: ContactFormValues) {
    // 1. Re-validación estricta de negocio
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
        return { error: "Datos de formulario inválidos." };
    }

    const { name, email, message } = parsed.data;

    // 2. Delegamos la ejecución a la capa de infraestructura
    const mailResult = await mailService.sendTextEmail({
        to: "jeisirosales2003@gmail.com",
        replyTo: email,
        subject: `[NUEVO LEAD] - ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    if (!mailResult.success) {
        return { error: "No se pudo procesar tu solicitud en este momento." };
    }

    return { success: true };
}