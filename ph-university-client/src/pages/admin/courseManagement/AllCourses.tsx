/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Modal, Table, TableColumnsType, Tag } from "antd";
import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemesterQuery,
  useUpdateRegisteredSemesterMutation,
} from "../../../redux/features/admin/courseManagement";
import { TSemester } from "../../../types/courseManagement";
import moment from "moment";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/userManagementApi";

export type TTableData = Pick<TSemester, "status" | "startDate" | "endDate">;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const AllCourses = () => {
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetAllCoursesQuery(undefined);

  const tableData = courseData?.data?.map(
    ({ _id, title, prefix, code, credits }) => ({
      key: _id,
      name: title,
      code: `${prefix} ${code}`,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "X",
      render: (item) => {
        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];

  if (isLoading) {
    return <p>Loading ... </p>;
  }

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

const AddFacultyModal = ({ facultyInfo }) => {
//   console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data:facultiesData} = useGetAllFacultyQuery(undefined)

  const [addFaculties] = useAddFacultiesMutation()
  
  
  const facultyOptions = facultiesData?.data?.map((item:any) => ({
    value: item._id,
    label:`${item.name.firstName} ${item.name.middleName} ${item.name.lastName}`
  }))

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) =>{
    const facultyData = {
      courseId : facultyInfo.key,
      data
    }
   

    addFaculties(facultyData)

  }

  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <PHForm onSubmit={handleSubmit}>
            <PHSelect mode="multiple" options={facultyOptions} name="faculties" label="Faculty"/>
        <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default AllCourses;
