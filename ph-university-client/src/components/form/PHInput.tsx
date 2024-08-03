
import { useFormContext } from 'react-hook-form'

const PHInput = ({type,name}) => {
    const {register} = useFormContext()
  return <input type={type} id={name} {...register(name)}/>
}

export default PHInput