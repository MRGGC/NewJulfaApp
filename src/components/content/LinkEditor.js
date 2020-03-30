import React, { useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { IconContext } from 'react-icons';
import { FaChevronUp, FaChevronDown, TiDelete } from 'react-icons/all';

export default function LinkEditor({ id }) {
    const {dispatchArticles} = useContext(ContentContext);

    const moveColor = 'rgb(235, 235, 235)';
    const crossColor = 'rgb(200,108,102)';

    function handleDelete() {
        console.log("CLICKED");
        dispatchArticles({ type: 'DELETE_ARTICLE', id: id });
    }

    function handleMove(move) {
        console.log("CLICKED");
        dispatchArticles({ type: 'MOVE_ARTICLE', move: move, id: id, k: Math.random() });
    }

    return (
        <div className={"linkEditor"}>
            <div onClick={() => handleMove(1)}>
                <IconContext.Provider value={{className: "link-up", color: moveColor}}>
                <FaChevronUp />
                </IconContext.Provider>
            </div>
            <div className={"link-delete"} onClick={handleDelete}>
                <IconContext.Provider value={{color: crossColor}}>
                <TiDelete />
                </IconContext.Provider>
            </div>
            <div onClick={() => handleMove(-1)}>
                <IconContext.Provider value={{className: "link-down", color: moveColor}}>
                <FaChevronDown />
                </IconContext.Provider>
            </div>
        </div>
    )
}
