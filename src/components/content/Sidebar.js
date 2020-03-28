import React, { useContext } from 'react';
import Link from './Link';
import { ContentContext } from '../../contexts/ContentContext';

export default function Sidebar() {
    const contentContext = useContext(ContentContext);

    const links = contentContext.articles.list.map(link => (
        <Link id={link.id} icon={link.icon} content={link.link_text} />
    ));

    return (
        <div className={"sidebar"}>
            { links }
        </div>
    );
}
