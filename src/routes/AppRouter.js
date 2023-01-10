import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { startChecking } from '../actions/auth'

import AdminDashboard from '../components/ui/AdminDashboard'
import BaldioPage from '../pages/BaldioPage'
import BaseDatosGeneral from '../pages/BaseDatosGeneral'
import CasasRentaPage from '../pages/CasasRentaPage'
import CuotasPage from '../pages/CuotasPage'
import EliminarCuotasPage from '../pages/EliminarCuotasPage'
import Error404Page from '../pages/Error404Page'
import EstadisticasPage from '../pages/EstadisticasPage'
import IndexPage from '../pages/IndexPage'
import RegistroVehicularPage from '../pages/InformacionPersonalPage'
import InquilinoPage from '../pages/InquilinoPage'
import LoginPage from '../pages/LoginPage'
import LotesBaldiosPage from '../pages/LotesBaldiosPage'
import PropietarioPage from '../pages/PropietarioPage'
import RegisterPage from '../pages/RegisterPage'
import TotalCuotasPredialPage from '../pages/TotalCuotasPredialPage'
import TotalPagadosPage from '../pages/TotalPagadosPage'
import TotalPendientePage from '../pages/TotalPendientePage'
import VehiculosPage from '../pages/VehiculosPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route
                        path='admin/*'
                        element={
                            <PrivateRoute>
                                <AdminDashboard>
                                    <Routes>
                                        <Route path='/' element={<BaseDatosGeneral />} />
                                        <Route path="/propietario" element={<PropietarioPage />} />
                                        <Route path="/casas-renta" element={<CasasRentaPage />} />
                                        <Route path="/inquilino" element={<InquilinoPage />} />
                                        <Route path="/lotes-baldios" element={<LotesBaldiosPage />} />
                                        <Route path="/baldio" element={<BaldioPage />} />
                                        <Route path="/registro-vehicular" element={<RegistroVehicularPage />} />
                                        <Route path="/vehiculos" element={<VehiculosPage />} />
                                        <Route path="/estadisticas" element={<EstadisticasPage />} />

                                        <Route path='cuotas-predial' element={<CuotasPage />} />
                                        <Route path="/cuotas-predial/total" element={<TotalCuotasPredialPage />} />
                                        <Route path="/cuotas-predial/pendiente" element={<TotalPendientePage />} />
                                        <Route path="/cuotas-predial/pagado" element={<TotalPagadosPage />} />
                                        <Route path="/cuotas-predial/pagado-eliminar/:id" element={<EliminarCuotasPage />} />
                                        <Route path="/*" element={<Error404Page />} />
                                    </Routes>
                                </AdminDashboard>
                            </PrivateRoute>
                        } />
                    <Route
                        path='/*'
                        element={
                            <PublicRoute>
                                <Routes>
                                    <Route path='/' element={<IndexPage />} />
                                    <Route path='/login' element={<LoginPage />} />
                                    <Route path='/register' element={<RegisterPage />} />
                                </Routes>
                            </PublicRoute>
                        } />
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRouter