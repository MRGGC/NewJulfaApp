import React, { createContext, useState } from 'react';

export const AuthContext = createContext({ logged: null, setLogged: null });

function AuthContextProvider(props) {
    const [logged, setLogged] = useState(true);

    return (
        <AuthContext.Provider value={{logged, setLogged}}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
