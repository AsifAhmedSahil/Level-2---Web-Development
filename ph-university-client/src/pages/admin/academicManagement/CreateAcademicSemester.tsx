import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthList } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicSemester.schema";
import { useAddSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";



  const currentYear = new Date().getFullYear()
  const yearOptions = [0,1,2,3,4].map(number => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
  }))

  
  

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddSemesterMutation()
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data?.name) -1]?.label
    
      const semesterData ={
          name:name,
          code:data.name,
          year:data.year,
          startMonth:data.startMonth,
          endMonth:data.endMonth,
        }

        try {
          
          console.log(semesterData);
          const res = await addAcademicSemester(semesterData)
          console.log(res)
        } catch (error) {
          toast.error("Something went wrong!")
        }
  };

  
  
  return (
    <Flex  justify="center" align="center" >
      <Col  span={6}>
        <PHForm  onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          
          <PHSelect label="name" name="name" options={semesterOptions}/>
          <PHSelect label="Year" name="year" options={yearOptions}/>
          <PHSelect label="Start Month" name="startMonth" options={monthList}/>
          <PHSelect label="End Month" name="endMonth" options={monthList}/>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
