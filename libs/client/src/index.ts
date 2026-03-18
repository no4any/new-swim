import { Message } from "@new-swim/model";

export async function getHello(): Promise<Message> {
    const response = await fetch("http://localhost:3000/");
    return await Message.parseAsync(await response.json());
}