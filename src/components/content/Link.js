import React, { useState } from 'react';
import LinkBlock from './LinkBlock';
import LinkContent from './LinkContent';
import LinkEditor from './LinkEditor';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';

export default function Link({ id, icon, content, logged }) {
    const [visible, setVisible] = useState(false);

    const handleMouseOver = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    return (
        <div className={"mainLink"}>
            { logged ? (<LinkEditor id={id} />) : null }
            <LinkBlock id={id} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} icon={icon} />
            <CSSTransition
                in={visible}
                timeout={500}
                classNames="list-transition"
                unmountOnExit
                appear
            >
                <LinkContent content={content} />
            </CSSTransition>
        </div>
    );
}
