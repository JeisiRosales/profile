"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { contactSchema, ContactFormValues } from "./schemas/contact.schema";
import { submitContactAction } from "./actions/submitContact.action";
import { Button } from "@/components/ui/Button";
import { SvgMascot } from "@/components/ui/mascot/SvgMascot";

export function ContactForm() {
    const [serverMessage, setServerMessage] = useState<{ type: "success" | "error", text: string } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const watchedValues = watch();
    const hasContent = Object.values(watchedValues).some((v) => v && v.length > 0);

    const onSubmit = async (data: ContactFormValues) => {
        setServerMessage(null);
        const response = await submitContactAction(data);

        if (response?.error) {
            setServerMessage({ type: "error", text: response.error });
        } else {
            setServerMessage({ type: "success", text: "Mensaje recibido. Te contactaré a la brevedad." });
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input Nombre */}
                <div className="flex flex-col gap-2">
                    <label className="text-tech-3 text-primary/80">&gt; Nombre</label>
                    <input
                        {...register("name")}
                        placeholder="Tú nombre"
                        className={`bg-transparent border ${errors.name ? 'border-red-500' : 'border-primary/50'} focus:border-primary p-4 outline-none text-primary transition-colors`}
                    />
                    {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                </div>

                {/* Input Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-tech-3 text-primary/80">&gt; Email</label>
                    <input
                        {...register("email")}
                        placeholder="tu.email@dominio.com"
                        className={`bg-transparent border ${errors.email ? 'border-red-500' : 'border-primary/50'} focus:border-primary p-4 outline-none text-primary transition-colors`}
                    />
                    {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                </div>
            </div>

            {/* Textarea Mensaje */}
            <div className="flex flex-col gap-2">
                <label className="text-tech-3 text-primary/80">&gt; Cuéntame qué tienes en mente...</label>
                <textarea
                    {...register("message")}
                    placeholder="¿Qué servicio quieres presupuestar?"
                    rows={5}
                    className={`bg-transparent border ${errors.message ? 'border-red-500' : 'border-primary/50'} focus:border-primary p-4 outline-none text-primary transition-colors resize-none`}
                />
                {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
            </div>

            {/* Mensajes de Servidor */}
            {serverMessage && (
                <div className={`p-4 border ${serverMessage.type === "success" ? "bg-green-500/10 border-primary/50 text-primary" : "bg-red-500/10 border-primary/50 text-primary"}`}>
                    {serverMessage.text}
                </div>
            )}

            {/* Botones de Acción */}
            <div className="flex items-center justify-end gap-4 mt-4">
                <SvgMascot
                    size={60}
                    accessory="headset"
                    action="idle"
                    message="Soy capaz de hacer tus ideas realidad."
                    bubbleAlign="left"
                />

                {/* Botón Limpiar (Icono estático) */}
                {hasContent && (
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => { reset(); setServerMessage(null); }}
                        title="Limpiar formulario"
                        className="border-transparent hover:border-primary text-primary/60 hover:text-primary"
                        icon={<Icon icon="ph:trash-bold" className="w-6 h-6" />}
                    />
                )}

                {/* Botón Enviar (Icono dinámico) */}
                <Button
                    type="submit"
                    variant="solid"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Icon icon="ph:spinner-gap-bold" className="w-6 h-6 animate-spin" /> : <Icon icon="bi:send" className="w-5 h-5" />}
                    className="w-[200px] h-[60px]"
                >
                    {isSubmitting ? '' : 'ENVIAR'}
                </Button>
            </div>
        </form>
    );
}