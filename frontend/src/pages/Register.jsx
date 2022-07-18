import {useState} from 'react'
import axios from "axios"
import { FaUser } from 'react-icons/fa'
import { API_URL } from "../constants"

const Register = () =>  {

    const [image,setImage] = useState ("")
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [campus, setCampus] = useState ("")
    const [course, setCourse] = useState ("")
    
    
    const handleImage = (e) => setImage(e.target.value)
    const handleName =  (e) => setName(e.target.value)
    const handleEmail =  (e) => setEmail(e.target.value)
    const handlePassword =  (e) => setPassword(e.target.value)
    const handleCourse =  (e) => setCourse(e.target.value)
    const handleCampus =  (e) => setCampus(e.target.value)
  
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const {data} = await axios.post(`${API_URL}/auth/register`, {
          name,
          email,
          password,
          campus,
          course
          })
          console.log(data)
      } catch (error) {}
    }
    

    


  return ( 
    <>
      <section className="heading">
        <h1>
        <FaUser /> Register
        </h1>
        <p> Please create your account </p>
      </section>

      <section className='form'>
        <form onSubmit ={handleSubmit} >
        
        <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className='form-group'> 
        <div className="img-wrap img-upload">
        <img id ="photo-upload" src="https://react.semantic-ui.com/images/wireframe/square-image.png"/>
            <input
              type='file'
              className='form-control'
              value={image}
              placeholder='Upload your photo'
              onChange={handleImage}
              />
              
            </div>
            </div>
        </label>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              autoComplete="off"
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={handleName}
              />
            </div>

            <div className='form-group'>
            <input
              type='email'
              className='form-control'
              autoComplete="off"
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
              <select id="course" name="course" onChange={handleCourse}>
                <option value=""> Select your course </option>
                <option value="webdev">Web Dev</option>
                <option value="UxUi"> UX/UI</option>
                <option value="dataAnalytics">Data Analytics</option>
                <option value="paris">Paris</option>
                <option value="berlin">Berlin</option>
                <option value="amsterdam">Amsterdam</option>
                <option value="mexico">Mexico</option>
                <option value="saoPaulo">Sao Paulo</option>
                <option value="lisbon">Lisbon</option>
                <option value="remote">Remote</option>
              </select> 
            </div>

            <div className='form-group'>
              <select id="campus" name="campus" onChange={handleCampus}>
                <option value=""> Select your campus </option>
                <option value="madrid">Madrid</option>
                <option value="barcelona">Barcelona</option>
                <option value="miami">Miami</option>
                <option value="paris">Paris</option>
                <option value="berlin">Berlin</option>
                <option value="amsterdam">Amsterdam</option>
                <option value="mexico">Mexico</option>
                <option value="saoPaulo">Sao Paulo</option>
                <option value="lisbon">Lisbon</option>
                <option value="remote">Remote</option>
              </select> 
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

export default Register

