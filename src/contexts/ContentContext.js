import React, {createContext, useReducer} from 'react';
import contentReducer from '../reducers/contentReducer';

const defaultValue = {
    list: [
        { id: '0', icon: 'TiCogOutline', link_text: 'ինչ-որ բան 1', content: `<p>Էլի որ, ինչ-որ բան 1 :D</p>` },
        { id: '1', icon: 'FiGitlab', link_text: 'ինչ-որ բան 2', content: `<p>Էլի որ, ինչ-որ բան 2 :D</p>` },
        { id: '2', icon: 'TiChartBarOutline', link_text: 'ինչ-որ բան 3', content: `<p>Էլի որ, ինչ-որ բան 3 :D</p>` },
        { id: '3', icon: 'GoDatabase', link_text: 'ինչ-որ բան 4', content: `<p>Էլի որ, ինչ-որ բան 4 :D</p>` },
    ],
    current: '0',
};

export const ContentContext = createContext({ articles: null, dispatchArticles: null });

function ContentContextProvider(props) {
    const [articles, dispatchArticles] = useReducer(contentReducer, defaultValue);

    return (
        <ContentContext.Provider value={{ articles, dispatchArticles }}>
            { props.children }
        </ContentContext.Provider>
    );
}

export default ContentContextProvider;
