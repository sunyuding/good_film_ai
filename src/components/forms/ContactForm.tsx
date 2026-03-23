"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validators";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormSchema) {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center">
        <CheckCircle size={48} className="text-green-400" />
        <p className="mt-4 text-lg font-medium text-green-300">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot */}
      <div
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <FormField
        label={t("name")}
        error={errors.name?.message}
        {...register("name")}
      />

      <FormField
        label={t("email")}
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormField
        label={t("company")}
        error={errors.company?.message}
        {...register("company")}
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-400">
          {t("message")}
        </label>
        <textarea
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} />
          {t("error")}
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} />
          Please fill in all required fields correctly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-3.5 text-base font-semibold text-cinema-black transition-all duration-300 hover:bg-gold-light disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 size={18} className="mr-2 animate-spin" />
        ) : (
          <Send size={18} className="mr-2" />
        )}
        {t("submit")}
      </button>
    </form>
  );
}

import { forwardRef, type InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  readonly label: string;
  readonly error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  function FormField({ label, error, ...props }, ref) {
    return (
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-400">
          {label}
        </label>
        <input
          ref={ref}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);
