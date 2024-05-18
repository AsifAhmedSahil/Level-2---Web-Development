import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './modules/student/student.route';
const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());


// application Route
app.use("/api/v1/students",studentRoute)


app.get('/', (req: Request, res: Response) => {
  // const a = 10;

  res.send("server connected");
});

export default app;
