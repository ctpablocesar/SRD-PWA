import { types } from '../types/types';

const initialState = {
    data: []
}

export const estadisticasReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.settingEstadisticas:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state

    }

}