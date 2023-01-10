import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { baseDatosReducer } from "../reducers/baseDatosReducer";
import { cuotasPredialReducer } from "../reducers/cuotasPredialReducer";
import { estadisticasReducer } from "../reducers/estadisticasReducer";
import { informacionPersonalReducer } from "../reducers/informacionPersonalReducer";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    baseDatos: baseDatosReducer,
    informacionPersonal: informacionPersonalReducer,
    estadisticas: estadisticasReducer,
    cuotasPredial: cuotasPredialReducer
});

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
