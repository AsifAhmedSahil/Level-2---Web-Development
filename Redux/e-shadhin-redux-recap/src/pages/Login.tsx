import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector,useAppDispatch } from '../redux/hooks'
import { RootState } from '../redux/store';
import { useLoginMutation } from '../redux/api/auth/authApi';
import { setName, setPassword } from '../redux/feature/loginSlice';

const Login = () => {
  const dispatch = useAppDispatch()
  const {name,password} = useAppSelector((state:RootState) => state.login)
  const [login , { data }] = useLoginMutation()

  const handleLogin = async(e:React.FormEvent) =>{
    e.preventDefault()
    const user = await login({username:name,password})
    console.log(user)

  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-600 to-green-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e)=>dispatch(setName(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>dispatch(setPassword(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Login
          </button>
          <Link to={"/registration"}>
          New Here?Register Now
          </Link>
        </form>
      </div>
    </div>
  );

  
}

export default Login