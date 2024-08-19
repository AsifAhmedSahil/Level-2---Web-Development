import { useParams } from "react-router-dom"


const StudentDetails = () => {
const {studentId} = useParams()

  return (
    <div>StudentDetails</div>
  )
}

export default StudentDetails