import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { CourseRoutes } from "../modules/courses/courses.route";
import { semesterRegistrationRoute } from "../modules/semesterRegistration/semesterRegistration.route";


const router  = Router()

const middleRoute = [
    {
        path:"/students",
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
    {
        path:"/academic-faculties",
        route: AcademicFacultyRoutes
    },
    {
        path:"/academic-departments",
        route: AcademicDepartmentRoutes
    },
    {
        path:"/courses",
        route: CourseRoutes
    },
    {
        path:"/semester-registration",
        route: semesterRegistrationRoute
    },
]

middleRoute.forEach(route => router.use(route.path,route.route))

export default router