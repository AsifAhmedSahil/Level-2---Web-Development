import { useParams } from "react-router-dom"
import { useGetSingleStudentQuery } from "../../../redux/features/admin/userManagementApi"

// import {  Col, Divider, Row } from "antd"
// import PHInput from "../../../components/form/PHInput"





const StudentDetails = () => {
const {studentId} = useParams()

const {data} = useGetSingleStudentQuery(studentId)
console.log(data)



  return (
  
      
        <div  >
          {/* <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text"  name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text"  name="dateOfBirth" label="DOB" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
            </Col>
          </Row> */}
          {/* --------------------------------------------------------------------- */}
          {/* <Divider>Contact Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="email" name="email" label="Email" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="contact" label="Contact" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="emergenceContactNo" label="Emergency Contact" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="presentAddress" label="Present Address" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="permanentAddress" label="Permanent Address" />
            </Col>
            
          </Row> */}
          {/* --------------------------------------------------------------------- */}
          {/* <Divider> Guardian </Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="guirdian.fatherName" label="Father Name" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="guirdian.fatherOccupation" label="Father Occupation" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="guirdian.fatherNo" label="Father No." />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="guirdian.motherName" label="Mother Name" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="guirdian.motherOccupation" label="Mother Occupation" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="guirdian.motherNo" label="Mother No." />
            </Col>
          </Row> */}
          {/* --------------------------------------------------------------------- */}
          {/* <Divider> Local Guardian </Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="localGuirdian.name" label="Name" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="localGuirdian.address" label="Address" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text" name="localGuirdian.contact" label="Contact" />
            </Col>
          </Row> */}
          {/* --------------------------------------------------------------------- */}
          {/* <Divider> Semester Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput type="text"  name="academicSemester" label="Academic Semester" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHInput  type="text" name="academicDepartment" label="Academic Department" />
            </Col>
            
          </Row> */}
           
        </div>

    
  )
}

export default StudentDetails