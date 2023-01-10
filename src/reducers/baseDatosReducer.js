import { types } from '../types/types';

const initialState = {
    propietarios: [],
    rentadas: [],
    baldios: [],
    propietarioActive: {
        info: []
    }
}

export const baseDatosReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.savingPropietarios:
            return {
                ...state,
                propietarios: action.payload,
            }

        case types.savingRentadas:
            return {
                ...state,
                rentadas: action.payload
            }

        case types.savingBaldios:
            return {
                ...state,
                baldios: action.payload
            }

        case types.propietarioActive:
            return {
                ...state,
                propietarioActive: action.payload
            }

        case types.emptyPropietarioActive:
            return {
                ...state,
                propietarioActive: ''
            }

        default:
            return state

    }

}