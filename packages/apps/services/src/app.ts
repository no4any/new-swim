import express from "express";
import { User } from "@new-swim/common";

const app = express();

app.get("/", (_req, res) => {
    res.json(User.parse({
        email: "asdf123123@bvfd.de",
        132123: 123123
    }))
})

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000")
})