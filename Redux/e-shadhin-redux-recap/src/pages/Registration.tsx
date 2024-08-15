import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../redux/hooks'
import { RootState } from '../redux/store'
import { setEmail, setName, setPassword, setRole } from '../redux/feature/registerSlice'
import { useSignUpMutation } from '../redux/api/auth/authApi'

const Registration = () => {
  const dispatch = useAppDispatch()
  const {name,email,password,role} = useAppSelector((state:RootState) => state.register)

  const [signUp] = useSignUpMutation()

  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault()
    console.log("input",{name,email,password,role})
    const user = await signUp({username:name,email,password,role})
    console.log(user)

  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-600 to-green-600 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Register</h2>
      <form onSubmit={ handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=>dispatch(setName(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>dispatch(setEmail(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e)=>dispatch(setRole(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter your Role"
          />
        </div>
        <div className="mb-4">
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
          Register
        </button>
        <Link to={"/login"}>
          Already Registered? Please Login
          </Link>
      </form>
    </div>
  </div>
  )
}

export default Registration