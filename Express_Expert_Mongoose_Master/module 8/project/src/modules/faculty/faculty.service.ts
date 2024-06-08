import QueryBuilders from "../../builders/QueryBuilders"
import { FacultySearchableFields } from "./faculty.constants"
import { Faculty } from "./faculty.model"


const getAllFacultyFromDB = async(query: Record<string, unknown>) =>{
    const facultyQuery = new QueryBuilders(
        Faculty.find().populate("academicDepartment"),query
    )
    .search(FacultySearchableFields)
    .filter()
    .sort()
    // .paginate()
    .fields();

    const result = await facultyQuery.modelQuery;
    return result 
}

export const facultyServices = {
    getAllFacultyFromDB
}