import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";


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
    {
        path:"/academic-semesters",
        route: AcademicSemesterRoutes
    },
]

middleRoute.forEach(route => router.use(route.path,route.route))

export default router