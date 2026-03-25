import express from "express";
import { Message } from "@new-swim/common";

const PORT = 3000;

const app = express();

app.get("/", async (_req, res) => {
    res.json(await Message.parseAsync({
        msg: "Hello, World!"
    }))
});

app.get("/fetch", async (_req, res) => {
    res.send("hi!!!!?!??!!!");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

// Graceful shutdown on SIGINT/SIGTERM
process.on("SIGINT", () => {
    console.log("Shutting down...");
    server.close(() => {
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    console.log("Shutting down...");
    server.close(() => {
        process.exit(0);
    });
});