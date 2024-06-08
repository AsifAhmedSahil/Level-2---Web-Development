import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { CourseRoutes } from "../modules/courses/courses.route";
import { semesterRegistrationRoute } from "../modules/semesterRegistration/semesterRegistration.route";
import { OfferedCoursesRoute } from "../modules/OfferedCourse/OfferedCourse.route";
import { FacultyRoutes } from "../modules/faculty/faculty.route";
import { AdminRouter } from "../modules/admin/admin.route";
import { AuthRoute } from "../modules/auth/auth.route";


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
    {
        path:"/offered-courses",
        route:OfferedCoursesRoute
    },
    {
        path:"/faculty",
        route:FacultyRoutes
    },
    {
        path:"/admin",
        route:AdminRouter
    },
    {
        path:"/auth",
        route:AuthRoute
    },
]

middleRoute.forEach(route => router.use(route.path,route.route))

export default router