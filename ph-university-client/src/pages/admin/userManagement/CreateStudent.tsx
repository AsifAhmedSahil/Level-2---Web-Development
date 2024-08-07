import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const studentSummyData = {
  "password":"student123",
  "student": {
      "name": {
          "firstName": "Asif",
          "middleName": "mahmud",
          "lastName": "sahil"
      },
      "gender": "male",
      "dateOfBirth": "1995-03-15",
      "bloodGroup": "A+",

      "email": "towsif.doe@example.com",
      "contact": "1234567890",
      "emergenceContactNo": "0987654321",
      "presentAddress": "123 Main St, City, Country",
      "permanentAddress": "456 Elm St, City, Country",

      "guirdian": {
          "fatherName": "Michael Smith",
          "fatherOccupation": "Engineer",
          "fatherNo": "9876543210",
          "motherName": "Emily Smith",
          "motherNo": "1234567890",
          "motherOccupation": "Teacher"
      },

      "localGuirdian": {
          "name": "Jane Doe",
          "address": "789 Oak St, City, Country",
          "contact": "2345678901"
      },
      
      "photoUrl": "https://example.com/john_doe_photo.jpg",
      "academicSemester": "6674f3db444d879394103420",
      "academicDepartment": "6674f2b4444d87939410341b",
      "isActive": "active"
  }
}
const CreateStudent = () => {
  const onSubmit : SubmitHandler<FieldValues> = (data) =>{
    console.log(data)
  }

  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name"/>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent
