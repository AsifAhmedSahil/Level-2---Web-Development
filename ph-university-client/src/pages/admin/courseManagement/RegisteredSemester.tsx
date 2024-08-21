/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetAllRegisteredSemesterQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import { TSemester } from "../../../types/courseManagement";
import moment from "moment";
import { useState } from "react";



export type TTableData = Pick<TSemester, "status" | "startDate" | "endDate">;

const items = [
    {
        label:"Upcoming",
        key:'UPCOMING'
    },
    {
        label:"Ongoing",
        key:'ONGOING'
    },
    {
        label:"Ended",
        key:'ENDED'
    },
]

const RegisteredSemester = () => {
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllRegisteredSemesterQuery(undefined);

  const [semesterId,setSemesterId] = useState("")

  const [updateSemester] = useUpdateRegisteredSemesterMutation()

  

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, endDate, startDate, status }) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year} `,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );

  const handleStatusUpdate = (data:any) =>{
        console.log("semester id",semesterId)
        console.log(data.key)

        const updateData = {
            id: semesterId,
            data:{
                status: data.key
            }
        }

        updateSemester(updateData)

  }

  const menuProps = {
    items,
    onClick: handleStatusUpdate
  }

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render:(item) =>{
        let color;
        if(item === "UPCOMING"){
            color="blue"
        }
        if(item === "ONGOING"){
            color="green"
        }
        if(item === "ENDED"){
            color="red"
        }
            return <Tag color={color}>{item}</Tag>
      }
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "X",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={['click']}>
            <Button onClick={()=> setSemesterId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  //   const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
  //     // console.log('params', pagination, filters, sorter, extra);
  //     if(extra.action === 'filter'){
  //       const queryParams : TQueryParams[] = [];
  //       filters.name?.forEach((item) =>(
  //         queryParams.push({name:'name',value:item})
  //       ))
  //       filters.year?.forEach((item) =>(
  //         queryParams.push({name:'year',value:item})
  //       ))
  //       // console.log(queryParams)
  //       setParams(queryParams)
  //     }
  //   };

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

export default RegisteredSemester;
