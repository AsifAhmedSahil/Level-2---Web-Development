/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";




const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {register,handleSubmit} = useForm(
    {
      defaultValues:{
        id: 'A-0001',
        password:'admin123'
      }
    }
  )

  const [login] = useLoginMutation()
  
  

  const onSubmit = async (data : FieldValues) =>{
    const toastId = toast.loading("login user...")
    // console.log(data)
    try {
      const userInfo = {
        id: data.id,
        password:data.password
      }
      const res = await login(userInfo).unwrap()
      const user = verifyToken(res.data.accessToken) as TUser
     
      console.log(user)
      
      dispatch(setUser({user:user , token:res.data.accessToken}))
      toast.success("Logged In User Succesfully!",{id:toastId , duration:2000})
      navigate(`/${user.role}/dashboard`)
    } catch (error) {
      toast.error("Something Went Wrong!",{id:toastId , duration:2000})
    }


  }
  return (
    <PHForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="" {...register('id')}/>

      </div>
      <div>
        <label htmlFor="id">Password</label>
        <input type="text" id="password" {...register('password')}/>

      </div>
      <Button htmlType="submit">Log in</Button>
    </PHForm>
  );
};

export default Login;
