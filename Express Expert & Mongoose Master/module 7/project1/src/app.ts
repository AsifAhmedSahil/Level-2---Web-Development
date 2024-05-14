import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000

// parser
app.use(express.json())

// middleware
const logger = (req:Request,res:Response,next:NextFunction){
  console.log(req.url,req.method,req.hostname)
  next()
}

// router in express

const userRouter = express.Router()
const courseRouter = express.Router()

app.use("/api/v1/users",userRouter)
app.use("/api/v1/courses",courseRouter)

// post request for create user
userRouter.post("/create-user",(req:Request,res:Response) =>{
  const user = req.body;
  console.log(user)

  res.json({
    success: "create user successfully"

  })
})

// post request for course user

courseRouter.post("/create-course",(req:Request,res:Response) =>{
  const course = req.body;
  console.log(course)

  res.json({
    success: "create user successfully"

  })
})





app.get('/',logger, (req:Request, res:Response) => {
  res.send('Hello sahil world!')
})

app.post('/',(req:Request, res:Response) => {
  console.log(req.body);
  //res.send("got data")
  res.json({
    message: "succesfully send data"
  })
})

export default app;