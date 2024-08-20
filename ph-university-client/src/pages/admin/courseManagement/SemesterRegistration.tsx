/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";



import { toast } from "sonner";
// import { TResponse } from "../../../types/global";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types/global";
import { statusOption } from "../../../types/courseManagement";



  

  
  

const SemesterRegistration = () => {

    const {data:semesterData} = useGetAllSemesterQuery(undefined)

    const [addRegisteredSemester] = useAddRegisteredSemesterMutation()

    const semesterOptions = semesterData?.data?.map((item )=>({
        value: item._id,
        label:`${item.name} ${item.year}`
    }))

    const statusOptions = statusOption?.map((item) =>({
        value: item.value,
        label:item.label
    }))
 
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("created...")

    
    
      const semesterRegistrationData ={
          ...data,
          minCredit: Number(data.minCredit),
          maxCredit: Number(data.maxCredit)
        }

        console.log(semesterRegistrationData)

        try {
          
          console.log(semesterData);
          const res = await addRegisteredSemester(semesterRegistrationData) as TResponse<any>
          if(res.error){
            toast.error(res.error?.data?.message ,{id:toastId})
          }else{
            toast.success("semester created..." ,{id:toastId})
          }
          console.log(res)
        } catch (error) {
          toast.error("Something went wrong!")
        }
  };

  
  
  return (
    <Flex justify="center" align="center">
    <Col span={6}>
      <PHForm onSubmit={onSubmit}>
        <PHSelect
          label="Academic Semester"
          name="academicSemester"
          options={semesterOptions}
        />

        <PHSelect
          name="status"
          label="Status"
          options={statusOptions}
        />
        <PHDatePicker name="startDate" label="Start Date" />
        <PHDatePicker name="endDate" label="End Date" />
        <PHInput type="text" name="minCredit" label="Min Credit" />
        <PHInput type="text" name="maxCredit" label="Max Credit" />

        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Col>
  </Flex>
  );
};

export default SemesterRegistration;
