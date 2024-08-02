import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";


export const facultyPaths = [
    {
        name:'Dashboard',
        path: 'Dashboard',
        element:<FacultyDashboard/>
    },
    {
        name:'Offered Courses',
        path: 'Offered Courses',
        element:<OfferedCourse/>
    },
]