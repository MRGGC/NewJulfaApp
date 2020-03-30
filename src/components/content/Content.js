import React from 'react';
import AuthContextProvider from '../../contexts/AuthContext';
import ContentContextProvider from '../../contexts/ContentContext';
import Sidebar from './Sidebar';
import TextPanel from './TextPanel';
import './index.css';
import './sidebar.css';
import './textpanel.css';
import './editor.css';

export default function Content() {
    return (
        <AuthContextProvider>
        <ContentContextProvider>
        <div className={"content"}>
            <Sidebar />
            <TextPanel />
        </div>
        </ContentContextProvider>
        </AuthContextProvider>
    )
}
