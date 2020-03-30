import React, { useContext } from 'react';
import Editor from './Editor';
import ReactHtmlParser from 'react-html-parser';
import { ContentContext } from '../../contexts/ContentContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function TextPanel() {
    const {logged} = useContext(AuthContext);
    const contentContext = useContext(ContentContext);

    let content = '';
    for (let list of contentContext.articles.list) {
        if (list.id === contentContext.articles.current) {
            content = list.content;
        }
    }

    return logged ? (
        <Editor
            current={contentContext.articles.current}
            content={content}
            dispatch={contentContext.dispatchArticles}
        />
    ) : (
        <div className={"mainPanel"}>
            { ReactHtmlParser(content) }
        </div>
    )
}
