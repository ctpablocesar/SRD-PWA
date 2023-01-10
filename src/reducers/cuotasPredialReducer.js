import { types } from '../types/types';

const initialState = {
    cuotas: [],
    totales: [],
    pendientes: [],
    pagados: [],
    comisiones: 0,
    fecha: ''
}

export const cuotasPredialReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.savingCuotasMantenimiento:
            return {
                ...state,
                cuotas: action.payload
            }

        case types.savingTotales:
            return {
                ...state,
                totales: action.payload
            }

        case types.savingPendientes:
            return {
                ...state,
                pendientes: action.payload
            }

        case types.savingPagados:
            return {
                ...state,
                pagados: action.payload
            }

        case types.saveTotal:
            return {
                ...state,
                comisiones: action.payload
            }

        case types.setFecha:
            return {
                ...state,
                fecha: action.payload
            }

        default:
            return state
    }

}