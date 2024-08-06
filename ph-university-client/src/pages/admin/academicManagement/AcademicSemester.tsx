import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi"
import { TAcademicSemester } from "../../../types/academicManagement.types";
import { useState } from "react";

export type TTableData = Pick<TAcademicSemester,'_id'|'name'|'year'|'startMonth'|'endMonth'>


const AcademicSemester = () => {
   const [params, setParams] = useState([])
  const {data: semesterData} = useGetAllSemesterQuery(params)
  console.log(semesterData)
  const tableData = semesterData?.data?.map(({_id,name,endMonth,startMonth,year}) =>({
    key:_id,name,endMonth,startMonth,year
  }))
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
        }
        
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Year',
      dataIndex: 'year',
      filters: [
        {
          text: '2024',
          value: '2024',
        },
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        }
        
      ],
      
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
    },
    
  ];

  
  const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
    if(extra.action === 'filter'){
      const queryParams = [];
      filters.name?.forEach((item) =>(
        queryParams.push({name:'name',value:item})
      ))
      filters.year?.forEach((item) =>(
        queryParams.push({name:'year',value:item})
      ))
      // console.log(queryParams)
      setParams(queryParams)
    }
  };
  
  return (
    <Table
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
  )
}

export default AcademicSemester