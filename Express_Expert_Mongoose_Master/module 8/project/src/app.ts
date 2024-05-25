/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application,  Request, Response} from 'express';
import cors from 'cors';
import { studentRoute } from './modules/student/student.route';
import { userRoute } from './modules/user/user.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';

const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());


// application Route
app.use("/api/v1/students",studentRoute)
app.use("/api/v1/users",userRoute)


app.get('/', (req: Request, res: Response) => {
  // const a = 10;

  res.send("server connected");
});


app.use(globalErrorHandler)

// not found route
app.use(notFound)

export default app;
