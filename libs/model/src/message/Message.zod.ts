import * as z from "zod";

export const Message = z.object({
    msg: z.string().min(1)
})

export type Message = z.infer<typeof Message>;