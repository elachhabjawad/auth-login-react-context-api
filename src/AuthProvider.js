import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider(props) {

    const [auth, setAuth] = useState({})
    //const [auth,setAuth] = useState({ email:'elachhabjawad@gmail.com' })

    useEffect(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');

        if (email != null && token != null) {
            setAuth({token , email })
        }

    }, [])



    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )

}

