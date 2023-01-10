import Swal from "sweetalert2";

import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const savePropietario = (data) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const resp = await fetchSinToken("propietario/agregar", data, "POST");
        const body = await resp.json();
        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Propietario agregado correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/loign`;
            }, 1000);
        } else {
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch(finishLoading())
    };
};

export const updatePropietario = (data) => {
    return async (dispatch) => {
        dispatch(startLoading);

        const resp = await fetchSinToken("propietario/actualizar", data, "POST");
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Propietario actualizado correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/login`;
            }, 1000);
            // dispatch(cleanPropietarioActive());
        } else {
            console.log(body);
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        dispatch(finishLoading())
    };
};

export const getPropietarios = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        const resp = await fetchSinToken("propietario/todos");
        const body = await resp.json();

        dispatch(savePropietarios(body));

        dispatch(finishLoading());
    };
};

const savePropietarios = ({ propietarios }) => ({
    type: types.savingPropietarios,
    payload: {
        propietarios,
    },
});

export const setPropietarioActive = (data) => ({
    type: types.propietarioActive,
    payload: {
        ...data,
    },
});

export const cleanPropietarioActive = () => ({ type: types.emptyPropietarioActive });

export const getRentadas = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        const resp = await fetchSinToken("propietario/rentadas");
        const body = await resp.json();

        dispatch(saveRentadas(body));

        dispatch(finishLoading());
    };
};

const saveRentadas = ({ casas }) => ({
    type: types.savingRentadas,
    payload: {
        casas,
    },
});

export const updateInquilinoData = (data) => {
    return async (dispatch) => {
        dispatch(startLoading);

        const resp = await fetchSinToken("propietario/actualizar", data, "POST");
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Inquilino actualizado correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/admin/casas-renta`;
            }, 1000);
            dispatch(cleanPropietarioActive());
        } else {
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
};

export const getBaldios = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        const resp = await fetchSinToken("propietario/baldio");
        const body = await resp.json();

        dispatch(saveBaldios(body));

        dispatch(finishLoading());
    };
};

const saveBaldios = ({ casas }) => ({
    type: types.savingBaldios,
    payload: {
        casas,
    },
});

export const updateBaldioData = (data) => {
    return async (dispatch) => {
        dispatch(startLoading);

        const resp = await fetchSinToken("propietario/actualizar", data, "POST");
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Inquilino actualizado correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/admin/lotes-baldios`;
            }, 1000);
            dispatch(cleanPropietarioActive());
        } else {
            console.log(body);
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
};