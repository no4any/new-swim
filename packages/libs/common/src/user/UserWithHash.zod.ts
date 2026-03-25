import * as z from "zod";
import { User } from "./User.zod";

export const UserWithHash = User.extend({
    hash: z.string().min(8)
})

export type UserWithHash = z.infer<typeof UserWithHash>;