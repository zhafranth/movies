const initialState = {
    listMovie = []
}

export const movieReducer = (state=initialState,action)=> {
    switch (action) {
        case 'SET_LIST_MOVIE':
            
            return {...state,listMovie:action.payload};
    
        default:
            return {...state};
    }
}