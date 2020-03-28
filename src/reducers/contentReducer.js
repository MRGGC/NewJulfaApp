export default function contentReducer(state, action) {
    switch (action.type) {
        case 'SET_CURRENT':
            return {...state, current: action.current};
        default:
            return state;
    }
}
