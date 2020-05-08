import React, {createContext, useEffect, useReducer, useState} from 'react';
import contentReducer from '../reducers/contentReducer';
import { GetContent } from '../services/api';

const defaultValue = {
    list: [],
    current: '0',
};

export const ContentContext = createContext({ articles: null, dispatchArticles: null });

function ContentContextProvider(props) {
    const [loaded, setLoaded] = useState(false);
    const [articles, dispatchArticles] = useReducer(contentReducer, defaultValue);

    useEffect(async () => {
        defaultValue.list = await GetContent();
        setLoaded(true);
    },[]);

    return loaded ? (
        <ContentContext.Provider value={{ articles, dispatchArticles }}>
            { props.children }
        </ContentContext.Provider>
    ) : null;
}

export default ContentContextProvider;
