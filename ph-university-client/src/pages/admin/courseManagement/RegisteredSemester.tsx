import { Button, Table, TableColumnsType} from "antd";

import { TAcademicSemester } from "../../../types/academicManagement.types";
import { useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagement";


export type TTableData = Pick<TAcademicSemester,'name'|'year'|'startMonth'|'endMonth'>


const RegisteredSemester = () => {

    const {data:semesterData,isLoading,isFetching} = useGetAllRegisteredSemesterQuery(undefined)
   
  const tableData = semesterData?.data?.map(({_id,academicSemester,endDate,startDate,status}) =>({
    key:_id,
    name:`${academicSemester.name} ${academicSemester.year} `,
    endDate,
    startDate,
    status
  }))
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
    
    },
    {
      title: 'Status',
      dataIndex: 'status',
     
      
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
    },
    {
      title: 'Action',
      key: 'X',
      render: () =>{
        return (
          <div>
          <Button>Update</Button>
        </div>
        )
      }
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

  if(isLoading){
    return <p>Loading ... </p>;
  }
  
  return (
    <Table
    loading={isFetching}
    columns={columns}
    dataSource={tableData}
    // onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
  )
}

export default RegisteredSemester