import { z } from "zod";


const createAcademicSemesterValidationSchema = z.object({
    
   body:z.object({
    name:z.string()
   })
    
    
})

export default createAcademicSemesterValidationSchema