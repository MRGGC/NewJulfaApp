import { v1 as uuidv1 } from 'uuid';

const memo = {};

export default function contentReducer(state, action) {
    const newState = {...state};

    switch (action.type) {
        case 'SET_CURRENT':
            return {...state, current: action.current};

        case 'ADD_ARTICLE':
            if (!~~memo[action.k + ''])
                newState.list.push({ id: uuidv1(), icon: action.icon, link_text: action.link_text, content: '<p>ՏԵՔՍՏ</p>' });
            memo[action.k + ''] = true;
            return newState;

        case 'EDIT_ARTICLE':
            for (let i = 0; i < newState.list.length; i++)
                if (newState.list[i].id === action.id)
                    newState.list[i].content = action.content;
            return newState;

        case 'DELETE_ARTICLE':
            return {...state, list: state.list.filter(article => article.id !== action.id)};

        case 'MOVE_ARTICLE':
            console.log(action.k, newState.list.map(e => e.id).join` `);
            if (!~~memo[action.k + ''])
            for (let i = 0; i < newState.list.length; i++) {
                if (newState.list[i].id === action.id) {
                    if (action.move === 1) {
                        if (i === 0) return state;

                        let t = newState.list[i-1];
                        newState.list[i-1] = newState.list[i];
                        newState.list[i] = t;
                    }
                    if (action.move === -1) {
                        if (i === newState.list.length - 1) return state;

                        let t = newState.list[i+1];
                        newState.list[i+1] = newState.list[i];
                        newState.list[i] = t;
                    }

                    memo[action.k + ''] = true;
                    return newState;
                }
            }
            return state;

        default:
            return state;
    }
}
