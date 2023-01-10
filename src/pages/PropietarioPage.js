import { NavLink } from 'react-router-dom'
import { AdminHeader } from '../components/ui/AdminHeader'
import { TbArrowBackUp } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import AgregarPropietariosForm from '../components/forms/AgregarPropietariosForm';

const PropietarioPage = () => {

    const { propietarioActive } = useSelector(state => state.baseDatos)

    return (
        <>
            <AdminHeader
                title='Editar propietario'
            />
            <div className="card">
                <div className="card-header border-bottom border-1">
                    <div className="row d-flex justify-content-between">
                        <h5 className="card-title col-md-6 pt-2"></h5>
                        <div className="col-md-2 text-right">
                            <NavLink className='btn btn-primary' to='/admin/'>
                                <TbArrowBackUp />
                                Regresar
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <AgregarPropietariosForm propietarioActive={propietarioActive} />
                </div>
            </div>
        </>
    )
}

export default PropietarioPage