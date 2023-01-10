import Swal from 'sweetalert2';

import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const resp = await fetchSinToken('auth/admin', { email, password }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesion correcto',
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
                dispatch(Login(body.body))
            }, 1000);
        } else {
            Swal.fire({
                icon: 'error',
                title: body.msg,
                showConfirmButton: false,
                timer: 1500
            })
        }
        dispatch(finishLoading());
    }
}

const Login = ({ uid, rol, name, metodo }) => ({
    type: types.login,
    payload: {
        uid,
        rol,
        name,
        metodo
    }
})

export const startChecking = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(Login({
                uid: body.uid,
                rol: body.rol,
                name: body.name,
                metodo: body.metodo
            }))
        }
        //  else {
        //     dispatch(checkingFinish());
        // }
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        const resp = await fetchConToken('auth/logout');
        const body = await resp.json();
        if (body.ok) {
            localStorage.clear();
            dispatch(logout());
            Swal.fire({
                icon: 'success',
                title: 'Sesión cerrada',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}


const logout = () => ({ type: types.logout })