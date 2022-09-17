import {
  Router, Request, Response, RequestHandler,
} from "express";
import { MongoClient } from "mongodb";

const userRoutes = Router();

userRoutes.get("/", (async (req: Request, res: Response) => {
  try {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    const db = client.db("qwiz");

    const user = await db.collection("user").find({}).toArray();
    await client.close();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}) as RequestHandler);

userRoutes.post("/", (async (req: Request<unknown, unknown, { username: string }>, res: Response) => {
  try {
    const { username } = req.body;
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();
    const db = client.db("qwiz");

    const user = await db.collection("user").insertOne({ username });
    await client.close();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Woah Server error", error });
  }
}) as RequestHandler);

export default userRoutes;
