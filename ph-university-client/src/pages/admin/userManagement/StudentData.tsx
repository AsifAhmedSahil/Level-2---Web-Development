import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParams } from "../../../types/global";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagementApi";
import { TStudent } from "../../../types/userManagement.types";

export type TTableData = Pick<
  TStudent,
  "name" | 'id'
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
    ({ _id, name, id }) => ({
      key: _id,
      name,
      id
    })
  );
  const columns: TableColumnsType<TTableData> = [
   
    
    
    {
      title: "Roll No.",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Action",
      key: "X",
      render: () => {
        return (
          <Space>
            <Button>Details</Button>
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
