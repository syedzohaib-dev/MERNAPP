import React, { useContext, useState } from 'react'
import axios from 'axios'
import { GlobalContext } from '../../../Context/context'
import Cookies from 'js-cookie'

export default function Guest() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { state, dispatch } = useContext(GlobalContext)


  const LoginUser = (e) => {
    e.preventDefault();
    const payload = { email, password }
    console.log(payload)
    axios.post('/api/login', payload)
      .then((json) => {

        Cookies.set('token', json.data.token)
        dispatch({
          type: "USER_LOGIN",
          token: json.data.token
        })
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
        <div className="login-box">
          <p>Login</p>
          <form onSubmit={LoginUser}>
            <div className="user-box">
              <input required={true} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input required={true} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <label>Password</label>
            </div>
            <a href='#' type='submit'>
              <span />
              <span />
              <span />
              <span />
              <button type='submit' className='bg-dark text-white'>Login</button>
            </a>
          </form>
          <p>
            Don't have an account?{" "}
            <a href="#" className="a2">
              Login
            </a>
          </p>
        </div>

      </div>
    </div>


  )
}
