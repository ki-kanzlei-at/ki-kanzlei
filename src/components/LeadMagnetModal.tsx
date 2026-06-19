'use client';

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useCaptcha } from "./CaptchaProvider";
import { trackLeadEvent, getAttributionData } from "@/lib/analytics";
import { useEffect } from "react";

// Austrian and common international phone number regex
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s0-9])+$/;

const formSchema = z.object({
    firstName: z.string()
        .min(2, "Bitte Vorname angeben.")
        .max(50, "Zu lang."),
    lastName: z.string()
        .min(2, "Bitte Nachname angeben.")
        .max(50, "Zu lang."),
    phone: z.string()
        .min(5, "Zu kurz.")
        .regex(phoneRegex, "Ungültiges Format."),
    email: z.string()
        .email("Ungültige E-Mail Adresse.")
        .min(5, "Zu kurz."),
    // Honeypot field
    website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadMagnetModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export const LeadMagnetModal = ({ isOpen, onOpenChange }: LeadMagnetModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { executeCaptcha } = useCaptcha();

    useEffect(() => {
        if (isOpen) {
            trackLeadEvent("start");
        }
    }, [isOpen]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            website: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            if (data.website) return;
            setIsSubmitting(true);

            // Execute global reCAPTCHA (optional - proceed even if it fails)
            let token: string | null = null;
            try {
                token = await executeCaptcha();
            } catch (captchaError) {
                console.warn("reCAPTCHA failed, proceeding without it:", captchaError);
            }

            // Log if captcha failed but don't block submission
            if (!token) {
                console.warn("reCAPTCHA token not available, proceeding with honeypot protection only");
                trackLeadEvent("captcha_failed");
            }

            const webhookUrl = "https://n8n.srv1215699.hstgr.cloud/webhook/21a27d91-48f8-45f9-a116-2c2a0dfc1144";

            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    fullName: `${data.firstName} ${data.lastName}`,
                    submittedAt: new Date().toISOString(),
                    source: "Website Lead Magnet",
                    captchaToken: token || "not_available",
                    attribution: getAttributionData(),
                }),
            });

            if (!response.ok) throw new Error(`Fehler beim Senden: ${response.status}`);

            setIsSubmitting(false);
            setIsSuccess(true);
            trackLeadEvent("success");
        } catch (error) {
            console.error("Submission error:", error);
            setIsSubmitting(false);
            trackLeadEvent("error", error instanceof Error ? error.message : "Unknown error");

            if (error instanceof TypeError && error.message === "Failed to fetch") {
                toast.error("Verbindung zum n8n-Server blockiert (CORS oder Workflow nicht aktiv).");
            } else {
                toast.error("Ein technischer Fehler ist aufgetreten.");
            }
        }
    };

    const handleClose = () => {
        onOpenChange(false);
        setTimeout(() => {
            setIsSuccess(false);
            reset();
        }, 300);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="w-[92vw] max-w-[460px] max-h-[85vh] overflow-y-auto sm:max-h-none sm:overflow-visible border-none bg-white p-0 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.15)] rounded-xl sm:rounded-[32px]">
                {!isSuccess ? (
                    <div className="relative pt-4 sm:pt-8">
                        <div className="p-4 sm:p-8 md:p-12 space-y-4 sm:space-y-8">
                            <div className="space-y-2 sm:space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="inline-flex px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/5 text-primary text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                                    Exklusiver Einblick
                                </div>
                                <DialogHeader className="space-y-2 sm:space-y-4">
                                    <DialogTitle className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                                        Echtes Infomaterial. <br />
                                        <span className="text-primary italic">KOSTENLOS nur für dich.</span>
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-500 text-sm sm:text-lg font-medium leading-relaxed">
                                        Direkter Einblick in die Tools und Prozesse, die wir bei unseren Kunden im DACH-Raum wirklich implementieren.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-5">
                                <div className="sr-only">
                                    <Input {...register("website")} tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className="space-y-3 sm:space-y-4">
                                    {/* Name Fields Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                        <div className="space-y-1">
                                            <Label htmlFor="firstName" className={cn("text-[10px] sm:text-xs font-bold ml-1 uppercase", errors.firstName ? "text-destructive" : "text-gray-500")}>Vorname</Label>
                                            <Input
                                                id="firstName"
                                                {...register("firstName")}
                                                placeholder="z.B. Max"
                                                className={cn("h-10 sm:h-12 text-sm border-2 rounded-xl sm:rounded-2xl bg-gray-50/50 focus:ring-0", errors.firstName ? "border-destructive/50" : "border-gray-100")}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="lastName" className={cn("text-[10px] sm:text-xs font-bold ml-1 uppercase", errors.lastName ? "text-destructive" : "text-gray-500")}>Nachname</Label>
                                            <Input
                                                id="lastName"
                                                {...register("lastName")}
                                                placeholder="Mustermann"
                                                className={cn("h-10 sm:h-12 text-sm border-2 rounded-xl sm:rounded-2xl bg-gray-50/50 focus:ring-0", errors.lastName ? "border-destructive/50" : "border-gray-100")}
                                            />
                                        </div>
                                    </div>
                                    {(errors.firstName || errors.lastName) && (
                                        <p className="text-xs font-semibold text-destructive ml-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                                            <AlertCircle className="w-3.5 h-3.5" /> Bitte Namen vollständig angeben.
                                        </p>
                                    )}

                                    <div className="space-y-1">
                                        <Label htmlFor="phone" className={cn("text-[10px] sm:text-xs font-bold ml-1 uppercase", errors.phone ? "text-destructive" : "text-gray-500")}>Telefon</Label>
                                        <Input
                                            id="phone"
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="+43 676 1234567"
                                            className={cn("h-10 sm:h-12 text-sm border-2 rounded-xl sm:rounded-2xl bg-gray-50/50 focus:ring-0", errors.phone ? "border-destructive/50" : "border-gray-100")}
                                        />
                                        {errors.phone && (
                                            <p className="text-xs font-semibold text-destructive ml-1 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="email" className={cn("text-[10px] sm:text-xs font-bold ml-1 uppercase", errors.email ? "text-destructive" : "text-gray-500")}>E-Mail Adresse</Label>
                                        <Input
                                            id="email"
                                            {...register("email")}
                                            type="email"
                                            placeholder="max@beispiel.de"
                                            className={cn("h-10 sm:h-12 text-sm border-2 rounded-xl sm:rounded-2xl bg-gray-50/50 focus:ring-0", errors.email ? "border-destructive/50" : "border-gray-100")}
                                        />
                                        {errors.email && (
                                            <p className="text-xs font-semibold text-destructive ml-1 flex items-center gap-1">
                                                <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">

                                    <Button type="submit" disabled={isSubmitting} className="w-full h-11 sm:h-14 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                        <span className="flex items-center justify-center gap-2">
                                            {isSubmitting ? <><Loader2 className="h-5 w-5 animate-spin" /> Einen Moment...</> : <>PDF jetzt kostenlos anfordern <ArrowRight className="w-5 h-5" /></>}
                                        </span>
                                    </Button>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-gray-400 justify-center font-medium tracking-tight">
                                    <ShieldCheck className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                    <span className="text-center">
                                        Mit dem Absenden akzeptieren Sie unsere{" "}
                                        <a href="/datenschutz" className="text-primary hover:underline font-bold">
                                            Datenschutzerklärung
                                        </a>.
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[28px] bg-primary/5 flex items-center justify-center text-primary rotate-3 transition-transform">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Post ist da! 📬</h3>
                            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">Das PDF ist auf dem Weg in dein Postfach. Wir wünschen dir viel Spaß mit der Roadmap.</p>
                        </div>
                        <Button onClick={handleClose} className="w-full sm:w-auto px-10 h-14 text-lg font-bold shadow-xl shadow-primary/20 rounded-2xl transition-all">Alles klar</Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
