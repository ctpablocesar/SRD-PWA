
import Swal from "sweetalert2";

import { fetchSinToken } from "../helpers/fetch";
import { types } from '../types/types';
import { finishLoading, startLoading } from "./ui";

export const getInformacionPersonal = () => {

    return async (dispatch) => {

        dispatch(startLoading());

        const resp = await fetchSinToken('propietario/informacion-personal');
        const body = await resp.json();

        const mapInfo = (el) => {

            const vehiculos = body.vehiculos.filter(vehiculo => vehiculo.uid === el._id)

            return {
                ...el,
                vehiculos: vehiculos[0].vehiculo,
            }

        }

        const info = body.info.map(el => (mapInfo(el)))

        dispatch(saveInformacionPersonal(info));

        dispatch(finishLoading());

    }

}

const saveInformacionPersonal = (info) => ({
    type: types.savingInformacionPersonal,
    payload: {
        info
    }
})

export const setHabitanteActive = (pro) => ({
    type: types.habitanteActive,
    payload: {
        pro
    }
})


export const updateVehiculo = () => {

    return async (dispatch, getState) => {

        dispatch(startLoading());

        const vehiculo = getState().informacionPersonal.vehiculo;

        const habitanteActive = getState().informacionPersonal.habitanteActive.pro;

        const resp = await fetchSinToken('propietario/informacion-personal/vehiculo-update', { uid: habitanteActive._id, vehiculo: vehiculo }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            Swal.fire({
                icon: "success",
                title: "Vehiculos actualizados correctamnete",
                showConfirmButton: false,
                timer: 1500,
            });
            setTimeout(() => {
                window.location.href = `${process.env.WINDOW_URL}/#/admin/informacion-personal`;
            }, 500);
        } else {
            Swal.fire({
                icon: "error",
                title: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });

        }

        dispatch(finishLoading());

    }

}

export const addVehiculo = (vehiculo) => ({
    type: types.addingVehiculo,
    payload: vehiculo
})

export const cleanVehiculos = () => ({ type: types.emptyVehiculos })

export const cleanHabitantes = () => ({ type: types.emptyHabitantes })

