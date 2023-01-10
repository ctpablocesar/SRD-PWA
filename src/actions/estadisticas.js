import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const saveEstadisticas = (data) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const resp = await fetchSinToken(`estadisticas/${data}`);
        const body = await resp.json();

        dispatch(setEstadisticas(body.data))

        dispatch(finishLoading());
    }
}

const setEstadisticas = (data) => {
    const info = data.map((obj, index) => ({ ...obj, numero: index + 1 }))
    return {
        type: types.settingEstadisticas,
        payload: info
    }
}