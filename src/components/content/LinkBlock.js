import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import * as Icons from 'react-icons/all';
import { ContentContext } from '../../contexts/ContentContext';

export default function LinkBlock({ id, icon, onMouseOver, onMouseLeave }) {
    const IconComponent = Icons[icon];
    const { articles, dispatchArticles } = useContext(ContentContext);
    const role = articles.current === id ? 'linkSelected' : 'linkBlock';

    const handleClick = () => {
        dispatchArticles({ type: 'SET_CURRENT', current: id });
    };

    return (
        <div onClick={handleClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={`linkPart ${role}`}>
            <IconContext.Provider value={{className: "linkIcon"}}>
                <IconComponent />
            </IconContext.Provider>
        </div>
    );
}
