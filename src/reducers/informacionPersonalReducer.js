import { types } from '../types/types';

const initialState = {
    informacionPersonal: [],
    habitanteActive: [],
    vehiculo: [],
}

export const informacionPersonalReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.savingInformacionPersonal:
            return {
                ...state,
                informacionPersonal: action.payload
            }

        case types.habitanteActive:
            return {
                ...state,
                habitanteActive: action.payload
            }

        case types.addingVehiculo:
            return {
                ...state,
                vehiculo: action.payload
            }

        case types.emptyVehiculos:
            return {
                ...state,
                vehiculo: []
            }

        default:
            return state

    }

}