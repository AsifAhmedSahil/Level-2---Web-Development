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