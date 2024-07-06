import { Button } from 'antd'
import { FieldValues } from 'react-hook-form'
import { useLoginMutation } from '../redux/features/auth/authApi'
import { useAppDispatch } from '../redux/hooks'
import { setUser, TUser } from '../redux/features/auth/authSlice'
import { verifyDecode } from '../utils/verifyDecode'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import PHForm from '../components/form/PHForm'
import PHInput from '../components/form/PHInput'


const Login = () => {
  const navigate = useNavigate()

  // const {register,handleSubmit} = useForm({
  //   defaultValues:{
  //     id:'A-0001',
  //     password: 'admin123'
  //   }
  // })
  const disPatch = useAppDispatch()

  const [login ] = useLoginMutation()

  const onSubmit = async(data : FieldValues) =>{
    const toastID = toast.loading("Logging user")
    
   try {
    const userInfo = {
      id: data.id,
      password: data.password
    }

    const res = await login(userInfo).unwrap()

    const user = verifyDecode(res.data.accessToken) as TUser
    console.log(user)
    disPatch(setUser({user:user,token:res.data.accessToken}))
    toast.success("Logged in user successfully" ,{id: toastID , duration: 2000})
    navigate(`/${user.role}/dashboard`)
   } catch (error) {
    toast.error("Something went wrong",{id: toastID , duration: 2000})
   }
  }

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <PHInput type="text" name="userId"/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <PHInput type="text" name="password"/>
      </div>
      <Button htmlType='submit'>Login</Button>
    </PHForm>
  )
}

export default Login