/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { toast } from "sonner";



import PHInput from "../../../components/form/PHInput";


import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";

const CreateCourse = () => {
  const { data: courses } = useGetAllCoursesQuery(undefined);
  console.log(courses,"******************")

  

  const prerequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title
  }));

  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("created...");

    const courseData = {
      ...data,
      isDeleted:false,
      preReqsiteCourses: data.preReqsiteCourses.map(item =>({
        course: item,
        isDeleted:false
      }))
      
    };

    console.log(courseData);

    // try {
    //   console.log(semesterData);
    //   const res = (await addRegisteredSemester(
    //     semesterRegistrationData
    //   )) as TResponse<any>;
    //   if (res.error) {
    //     toast.error(res.error?.data?.message, { id: toastId });
    //   } else {
    //     toast.success("semester created...", { id: toastId });
    //   }
    //   console.log(res);
    // } catch (error) {
    //   toast.error("Something went wrong!");
    // }
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
