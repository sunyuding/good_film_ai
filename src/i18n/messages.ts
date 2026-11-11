import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

export const messagesByLocale = { en, zh } as const;

export type AppLocale = keyof typeof messagesByLocale;
