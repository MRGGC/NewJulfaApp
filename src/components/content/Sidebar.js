import React, { useContext } from 'react';
import { ContentContext } from '../../contexts/ContentContext';
import { AuthContext } from '../../contexts/AuthContext';
import Link from './Link';
import LinkAdder from './LinkAdder';
import LinkSaver from './LinkSaver';
import LinkLogout from './LinkLogout';

export default function Sidebar() {
    const contentContext = useContext(ContentContext);
    const {logged} = useContext(AuthContext);

    const links = contentContext.articles.list.map(link => (
        <Link logged={logged} id={link.id} icon={link.icon} content={link.link_text} />
    ));

    return (
        <div className={"sidebar"}>
            { links }
            { logged ? (<LinkAdder />) : null }
            { logged ? (<LinkSaver />) : null }
            { logged ? (<LinkLogout />) : null }
        </div>
    );
}
