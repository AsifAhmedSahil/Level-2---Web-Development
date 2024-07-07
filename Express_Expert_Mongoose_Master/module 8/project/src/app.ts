/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application,  Request, Response} from 'express';
import cors from 'cors';

import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes';
import cookieParser from 'cookie-parser';

const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:['http://localhost:5173' ] , credentials:true}));


// application Route
// app.use("/api/v1/students",studentRoute)
// app.use("/api/v1/users",userRoute)
app.use("/api/v1",router)


app.get('/', (req: Request, res: Response) => {
  // const a = 10;

  res.send("server connected");
});


app.use(globalErrorHandler)

// not found route
app.use(notFound)

export default app;
