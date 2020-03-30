import React  from 'react';
import { IconContext } from 'react-icons';
import { FaSave } from 'react-icons/fa';

export default function LinkSaver() {
    const handleSave = () => {

    };

    return (
        <div onClick={handleSave} className={"linkPart linkAdder"}>
            <IconContext.Provider value={{
                className: "addIcon"
            }}>
                <FaSave />
            </IconContext.Provider>
        </div>
    );
}
