
import { Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

const PHInput = ({type,name}) => {
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