import React, { useState } from 'react';
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthContext)

    function handelForm(e) {
        e.preventDefault();
        console.log({ email, password });

        if (password === "123") {

            const token = "abcd123";
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({token,email})

        } else {
            alert("falid password")
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h2 className="mb-4">Login</h2>
                <form>
                    <div className="form-group mb-4">
                        <input type="email" placeholder="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-4">
                        <input type="password" placeholder="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={handelForm}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
