"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validators";
import Button from "@/components/ui/Button";

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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle size={48} className="text-green-500" />
        <p className="mt-4 text-lg font-medium text-green-700">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot — hidden from real users, prevents spam bots */}
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
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {t("message")}
        </label>
        <textarea
          rows={5}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={16} />
          {t("error")}
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={16} />
          Please fill in all required fields correctly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-dark disabled:opacity-50"
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
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
