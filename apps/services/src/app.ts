
import express from "express";
import { Message } from "@new-swim/model";
import { getHello } from "@new-swim/client";

const PORT = 3000;

const app = express();

app.get("/", async (_req, res) => {
    res.json(await Message.parseAsync({
        msg: "Hello, World!!!!"
    }))
});

app.get("/fetch", async (_req, res) => {
    const msg = await getHello();
    res.send(msg);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});