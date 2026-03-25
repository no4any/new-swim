import * as z from "zod";

export const PERMISSIONS = {
    ADMIN: "ADMIN",
    USER: "USER",
    REGISTRATION: "REGISTRATION",
    LOGGING: "LOGGING",
    RESULTS: "RESULTS"
} as const;

export const Permission = z.enum(Object.values(PERMISSIONS))

export type Permission = z.infer<typeof Permission>;