import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';
import * as COOKIE from '../../services/cookie';

export default function LinkLogout() {

    const authContext = useContext(AuthContext);

    const handleLogout = async () => {
        COOKIE.setCookie('tkn', null);
        authContext.setLogged(false);
    };

    return (
        <div onClick={() => handleLogout()} className={"linkPart linkAdder"}>
            <IconContext.Provider value={{
                className: "logoutIcon",
            }}>
                <FaSignOutAlt />
            </IconContext.Provider>
        </div>
    );
}
