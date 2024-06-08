import QueryBuilders from '../../builders/QueryBuilders';
import { FacultySearchableFields } from './faculty.constants';
import { Faculty } from './faculty.model';

const getAllFacultyFromDB = async (query: Record<string, unknown>) => {
  const facultyQuery = new QueryBuilders(
    Faculty.find().populate('academicDepartment'),
    query,
  )
    .search(FacultySearchableFields)
    .filter()
    .sort()
    // .paginate()
    .fields();

  const result = await facultyQuery.modelQuery;
  return result;
};

const getSingleFacultyFromDB  = async(id:string) =>{
    const result = await Faculty.findById(id).populate("academicDepartment")

    return result

}

export const facultyServices = {
  getAllFacultyFromDB,
  getSingleFacultyFromDB
};
