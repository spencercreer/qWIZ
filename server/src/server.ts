import express, { Request, Response } from "express";
const app = express();
const PORT = 3001;

app.get("/", (req: Request, res: Response) => {
    res.send("Server initialized");
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
