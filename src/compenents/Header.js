import { useContext } from 'react'
import { AuthContext } from '../AuthProvider';


function Header() {

    const authContext = useContext(AuthContext);


    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }
    return (

        <nav className="navbar navbar-light bg-light mb-4">
            <a className="navbar-brand mb-0 h1" href="#">React-hooks</a>
            <div>
                {authContext.auth.email ? <div>{authContext.auth.email} <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button></div> : 'you need to login'}
            </div>
        </nav>

    )
}

export default Header
