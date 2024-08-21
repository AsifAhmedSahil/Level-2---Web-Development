/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";



import PHInput from "../../../components/form/PHInput";


import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types/global";

const CreateCourse = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);
  const [createCourse] = useAddCourseMutation()


  const prerequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title
  }));

  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("created...");

    const courseData = {
      ...data,
      isDeleted:false,
      code:Number(data.code),
      credits:Number(data.credits),
      preReqsiteCourses: data.preReqsiteCourses ? data.preReqsiteCourses?.map(item =>({
        course: item,
        isDeleted:false
      })) : []
      
    };

    console.log(courseData);

    try {
      
      const res = (await createCourse(
        courseData
      )) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success("Course created...", { id: toastId });
      }
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          

          
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label="Credits" />

          <PHSelect  mode="multiple" name="preReqsiteCourses" label="Prereqsite Courses" options={prerequisiteCoursesOptions}/>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
