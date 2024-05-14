import { IncomingMessage, Server, ServerResponse } from "http"
import app from "./app"
const PORT = 5000

let server = new Server<typeof IncomingMessage, typeof ServerResponse>();

async function bootsTrap(){
    server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
}

bootsTrap();
