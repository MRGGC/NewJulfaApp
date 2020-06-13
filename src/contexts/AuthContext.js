import React, { createContext, useState } from 'react';
import * as COOKIE from '../services/cookie';

export const AuthContext = createContext({ logged: null, setLogged: null });

function AuthContextProvider(props) {
    const [logged, setLogged] = useState(!!COOKIE.getCookie('tkn'));

    return (
        <AuthContext.Provider value={{logged, setLogged}}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
