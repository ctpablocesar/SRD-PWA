import { types } from '../types/types';

const initialState = {
    checking: false,
    saving: false,
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.startLoading:
            return {
                ...state,
                checking: true,
                saving: true
            }

        case types.finishLoading:
            return {
                ...state,
                checking: false,
                saving: false
            }

        default:
            return state
    }

}