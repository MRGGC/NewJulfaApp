import React, { useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaSave } from 'react-icons/fa';
import { ContentContext } from '../../contexts/ContentContext';
import { SaveContent } from '../../services/api';

export default function LinkSaver() {
    const contentContext = useContext(ContentContext);
    const { current, list } = contentContext.articles;

    const handleSave = async () => {
        console.log("SAVING");
        console.log(current, list);

        let content = null;
        for (let _content of list)
            if (_content.id === current) content = _content;

        const status = await SaveContent(content);

        if (!status)
            alert('ERROR');
        else
            alert("SAVED!");
    };

    return (
        <div onClick={() => handleSave()} className={"linkPart linkAdder"}>
            <IconContext.Provider value={{
                className: "addIcon"
            }}>
                <FaSave />
            </IconContext.Provider>
        </div>
    );
}
