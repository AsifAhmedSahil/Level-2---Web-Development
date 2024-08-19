import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAcademicDepartmentQuery, useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagementApi";


const defaultstudentData ={
  name: {
    firstName: "Asif",
    middleName: "Ahmed",
    lastName: "Sahil",
  },
  gender: "male",
  
  bloodGroup: "A+",

  email: "student1@example.com",
  contact: "1234567890",
  emergenceContactNo: "0987654321",
  presentAddress: "123 Main St, City, Country",
  permanentAddress: "456 Elm St, City, Country",

  guirdian: {
    fatherName: "Michael Smith",
    fatherOccupation: "Engineer",
    fatherNo: "9876543210",
    motherName: "Emily Smith",
    motherNo: "1234567890",
    motherOccupation: "Teacher",
  },

  localGuirdian: {
    name: "Jane Doe",
    address: "789 Oak St, City, Country",
    contact: "2345678901",
  },

  photoUrl: "https://example.com/john_doe_photo.jpg",
  // academicSemester: "6674f3db444d879394103420",
  // academicDepartment: "6674f2b4444d87939410341b",
  isActive: "active",
}
const CreateStudent = () => {

  const {data:sData ,isLoading:sIsLoading }= useGetAllSemesterQuery(undefined)
  console.log(sData)

  const {data:dData,isLoading:dIsLoading} = useGetAcademicDepartmentQuery(undefined )
  console.log(dData)

  const [addStudent , {data,error}] = useAddStudentMutation()
  console.log(data,error)

  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const studentData = {
      password:"student123",
      student :data
    }
    addStudent(studentData)
  };
  
  const semesterOptions = sData?.data?.map((item) =>({
    value:item._id,
    label:`${item.name} ${item.year}`
  }))
  const departmentOptions = dData?.data?.map((item) =>({
    value:item._id,
    label:`${item.name} `
  }))


  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultstudentData}>
          <Divider>Personal Info</Divider>
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
              <PHSelect options={genderOptions}  name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHDatePicker  name="dateOfBirth" label="DOB" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHSelect options={bloodGroupOptions} name="bloodGroup" label="Blood Group" />
            </Col>
          </Row>
          {/* --------------------------------------------------------------------- */}
          <Divider>Contact Info</Divider>
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
            
          </Row>
          {/* --------------------------------------------------------------------- */}
          <Divider> Guardian </Divider>
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
          </Row>
          {/* --------------------------------------------------------------------- */}
          <Divider> Local Guardian </Divider>
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
          </Row>
          {/* --------------------------------------------------------------------- */}
          <Divider> Semester Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHSelect options={semesterOptions} disabled={sIsLoading}  name="academicSemester" label="Academic Semester" />
            </Col>
            <Col span={24} md={{span:12}} lg={{span:8}}>
              <PHSelect options={departmentOptions} disabled={dIsLoading}  name="academicDepartment" label="Academic Department" />
            </Col>
            
          </Row>
            <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
