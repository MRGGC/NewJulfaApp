import React from 'react';
import ContentContextProvider from '../../contexts/ContentContext';
import Sidebar from './Sidebar';
import TextPanel from './TextPanel';
import './index.css';
import './sidebar.css';
import './textpanel.css';

export default function Content() {
    return (
        <ContentContextProvider>
        <div className={"content"}>
            <Sidebar />
            <TextPanel />
        </div>
        </ContentContextProvider>
    )
}
