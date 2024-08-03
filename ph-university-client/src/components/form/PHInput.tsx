
import { Input } from 'antd'
import { Controller } from 'react-hook-form'

type TInputProps = {
    type:string,
    name:string
}

const PHInput = ({type,name}:TInputProps) => {
    // const {register} = useFormContext()
  return (
    <div style={{marginBottom: '20px'}}>
        <Controller 
            name={name}
            render={({field})=> <Input {...field} type={type} id={name} />}
        />
    </div>
  )
}

export default PHInput