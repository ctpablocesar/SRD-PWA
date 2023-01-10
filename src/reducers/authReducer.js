import { types } from '../types/types';

const initialState = {
    uid: '',
    rol: '',
    name: ''
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.login:
            return {
                uid: action.payload.uid,
                rol: action.payload.rol,
                name: action.payload.name,
                metodo: action.payload.metodo
            }
        case types.logout:
            return {
                initialState
            }

        default:
            return state

    }

}