import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagementApi";
import { TStudent } from "../../../types/userManagement.types";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TStudent,
  "name" | 'id' | "email"| "contact"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>([]);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetAllStudentsQuery(params);
  console.log(studentData);
  const tableData = studentData?.data?.map(
    ({ _id, name, id ,email,contact}) => ({
      key: _id,
      name,
      id,
      email,
      contact
    })
  );
  const columns: TableColumnsType<TTableData> = [
   
    
    
    {
      title: "Roll No.",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      key: "contact",
      dataIndex: "contact",
    },
    {
      title: "Action",
      key: "X",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student-data/${item.key}`}>
            <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width:"1%"
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    // console.log('params', pagination, filters, sorter, extra);
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      // console.log(queryParams)
      setParams(queryParams);
    }
  };

  if (isLoading) {
    return <p>Loading ... </p>;
  }

  return (
    <>
      <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
      pagination={false}
    />
    <Pagination pageSize={2} total={studentData?.data?.length}/>
    </>
  );
};

export default StudentData;
