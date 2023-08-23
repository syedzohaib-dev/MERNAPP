import axios from 'axios'
import React, { useState } from 'react'

export default function Signupform() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username }

        axios.post('/api/signup', payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err))

    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
                <div className="login-box">
                    <p>Login</p>
                    <form onSubmit={SignupUser}>
                        <div className="user-box">
                            <input required={true} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label>User Name</label>
                        </div>
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
                            <button type='submit' className='bg-dark text-white'>Signup</button>
                        </a>
                    </form>
                    <p>
                        Don't have an account?{" "}
                        <a href="#" className="a2">
                            Signup
                        </a>
                    </p>
                </div>

            </div>
        </div>


    )
}