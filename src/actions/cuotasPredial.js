
import Swal from "sweetalert2";

import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const getCuotas = () => {
    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchSinToken('cuotas-mantenimiento')
        const body = await resp.json()

        dispatch(saveCuotas(body.data))

        dispatch(finishLoading())

    }
}

const saveCuotas = (cuotas) => ({
    type: types.savingCuotasMantenimiento,
    payload: cuotas
})

export const getTotales = (mes) => {

    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchSinToken('cuotas-mantenimiento/total', { mes: mes }, 'POST')
        const body = await resp.json()

        dispatch(saveTotales(body.data));

        dispatch(finishLoading())

    }

}

const saveTotales = (totales) => ({
    type: types.savingTotales,
    payload: totales
})

export const getPendientes = () => {

    return async (dispatch, getState) => {

        dispatch(startLoading())

        const { fecha } = getState().cuotasPredial;

        const resp = await fetchSinToken('cuotas-mantenimiento/pendiente', { fecha }, 'POST')
        const body = await resp.json()

        dispatch(savePendientes(body.data));

        dispatch(finishLoading())

    }

}

const savePendientes = (pendientes) => ({
    type: types.savingPendientes,
    payload: pendientes
})

export const getPagados = () => {

    return async (dispatch, getState) => {

        dispatch(startLoading())

        const { fecha } = getState().cuotasPredial;

        const resp = await fetchConToken('cuotas-mantenimiento/pagados', { fecha: fecha }, 'POST')
        const body = await resp.json()

        dispatch(savePagados(body.data));

        dispatch(finishLoading())

    }

}

const savePagados = (pagados) => ({
    type: types.savingPagados,
    payload: pagados
})

export const setTotal = (data) => ({
    type: types.saveTotal,
    payload: data
})

export const payCuota = (id) => {
    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchConToken('cuotas-mantenimiento/pagar', { id: id }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: 'Pagado exitosamente',
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/admin/cuotas-predial`;
            }, 500);
        } else {
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch(finishLoading())

    }
}

export const setFecha = (fecha) => ({
    type: types.setFecha,
    payload: fecha
})

export const deleteCuota = (data) => {

    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchConToken('cuotas-mantenimiento/eliminar', data, 'POST');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: 'Cuota eliminada con exito',
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/admin/cuotas-predial`;
            }, 500);
        } else {
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch(finishLoading())

    }

}