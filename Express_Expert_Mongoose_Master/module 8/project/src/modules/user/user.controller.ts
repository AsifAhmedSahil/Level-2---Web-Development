

const createStudent = async (req: Request, res: Response) => {
    try {
      const {student:studentData} = req.body;
  
      // using zod validation
      const zodParsedData = studentValidationSchema.parse(studentData)
  
      const result = await studentServices.createStudentIntoDB(zodParsedData);
      
      
      res.status(200).json({
        success: true,
        message: 'Student Create Successfully',
        data: result,
      });
    } catch (error :any) {
      res.status(200).json({
        success: true,
        message: error.message || 'Student Create Successfully',
        
      });
    }
  };