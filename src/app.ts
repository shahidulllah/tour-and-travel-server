import { Request, Response } from "express";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

//perser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
