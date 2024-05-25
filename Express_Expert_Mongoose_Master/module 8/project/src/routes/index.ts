import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/user/user.route";


const router  = Router()

const middleRoute = [
    {
        path:"/student",
        route: studentRoute
    },
    {
        path:"/users",
        route: userRoute
    },
]

middleRoute.forEach(route => router.use(route.path,route.route))

export default router