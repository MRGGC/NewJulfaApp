import React, { useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { IconContext } from 'react-icons';
import { FaPlus } from 'react-icons/fa';

export default function LinkAdder() {
    const { dispatchArticles } = useContext(ContentContext);

    const handleAdd = () => {
        const title = prompt("Հոդվածի Անվանումը՝");
        if (!title) return;

        const icon = prompt("Իկոնկայի Անվանումը՝");
        if (!icon) return;

        dispatchArticles({ type: 'ADD_ARTICLE', icon: icon, link_text: title });
    };

    return (
        <div onClick={handleAdd} className={"linkPart linkAdder"}>
            <IconContext.Provider value={{
                className: "addIcon"
            }}>
                <FaPlus />
            </IconContext.Provider>
        </div>
    );
}
