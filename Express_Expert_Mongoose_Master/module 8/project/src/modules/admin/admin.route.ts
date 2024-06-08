import  express  from "express"
import { AdminControllers } from "./admin.controller"

const router = express.Router()

router.get("/",AdminControllers.getAllAdmin)
router.get("/:id",AdminControllers.getSingleAdmin)

export const AdminRouter = router