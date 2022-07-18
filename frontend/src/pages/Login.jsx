import {useState, useContext} from 'react'
import axios from "axios"
import { FaSignInAlt } from 'react-icons/fa'
import { API_URL } from "../constants"
import { AuthContext } from '../context/auth.context'

const Login = () =>  {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const handleEmail =  (e) => setEmail(e.target.value)
    const handlePassword =  (e) => setPassword(e.target.value)

    const {storeToken} = useContext(AuthContext);
   
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const {data} = await axios.post(`${API_URL}/auth/login`, {
          email,
          password,
          })
          console.log(data)
      } catch (error) {}
    }
    


  return ( 
    <>
      <section className="heading">
        <h1>
        <FaSignInAlt /> Login
        </h1>
        <p> Please Login </p>
      </section>

      <section className='form'>
        <form onSubmit ={handleSubmit} >

        <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={handleEmail}
              />
            </div>

            <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter your password'
              onChange={handlePassword}
              />
            </div>

            <div className='form-group'>
              <button type='submit' className='btn btn-block'>
                Submit
              </button>
            </div>


          </form>
          </section>

      </>
  )
}




export default Login