/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {
  const {register,handleSubmit} = useForm(
    {
      defaultValues:{
        id: 'A-0001',
        password:'admin123'
      }
    }
  )

  const [login,{data,error}] = useLoginMutation()
  console.log("data",data)
  console.log("error",error)

  const onSubmit = (data:any) =>{
    console.log(data)
    const userInfo = {
      id: data.id,
      password:data.password
    }
    login(userInfo)

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="" {...register('id')}/>

      </div>
      <div>
        <label htmlFor="id">Password</label>
        <input type="text" id="password" {...register('password')}/>

      </div>
      <Button htmlType="submit">Log in</Button>
    </form>
  );
};

export default Login;
