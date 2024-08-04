import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi"



const AcademicSemester = () => {
  const {data} = useGetAllSemesterQuery(undefined)
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default AcademicSemester