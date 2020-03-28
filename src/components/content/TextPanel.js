import React, {useContext} from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ContentContext } from '../../contexts/ContentContext';

export default function TextPanel() {
    const contentContext = useContext(ContentContext);
    let content = '';

    for (let list of contentContext.articles.list) {
        if (list.id === contentContext.articles.current) {
            content = list.content;
        }
    }

    return (
        <div className={"mainPanel"}>
            { ReactHtmlParser(content) }
        </div>
    )
}
