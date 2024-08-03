import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
    {
        value: '01',
        label: 'Autumn'
    },
    {
        value: '02',
        label: 'Summer'
    },
    {
        value: '03',
        label: 'Fall'
    },
  ]

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
      const semesterData ={
          name:"some",
          code:"some"
        }
        console.log(semesterData);
  };
  
  return (
    <Flex  justify="center" align="center">
      <Col  span={6}>
        <PHForm  onSubmit={onSubmit}>
          
          <PHSelect label="name" name="name" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
