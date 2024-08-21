import { Button, Col, Flex } from "antd"
import PHForm from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput"
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi"
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch"


const OfferedCourse = () => {
    const {data:academicFacultyData} = useGetAcademicFacultiesQuery(undefined)

    const academicSemesterOptions = academicFacultyData?.data?.map((item)=>({
        value:item._id,
        label:item.name
    }))

    const onSubmit = () =>{

    }
  return (
    <Flex justify="center" align="center">
    <Col span={6}>
      <PHForm onSubmit={onSubmit}>
        <PHSelectWithWatch
          label="Academic Semester"
          name="academicSemester"
          options={academicSemesterOptions}
        />

       
        <PHInput type="text" name="maxCredit" label="Max Credit" />

        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Col>
  </Flex>
  )
}

export default OfferedCourse