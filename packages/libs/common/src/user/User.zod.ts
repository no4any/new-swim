import * as z from "zod";

export const User = z.object({
    email: z.string().min(1),
    permissions: z.array(z.string()).nullish(),
    isRoot: z.boolean().nullish()
})

export type User = z.infer<typeof User>;