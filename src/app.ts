import { Application, Request, Response } from "express";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import router from "./app/routes";

const app: Application = express();

//perser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

//Application routes
app.use('/api/v1', router)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
