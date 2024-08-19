import { useParams } from "react-router-dom"
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagementApi"




const StudentDetails = () => {
const {studentId} = useParams()

const {data} = useGetSingleStudentQuery(studentId)
console.log(data)

  return (
    <div>StudentDetails</div>
  )
}

export default StudentDetails