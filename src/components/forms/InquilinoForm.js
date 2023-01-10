import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaBuilding, FaRegSave } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { updateInquilinoData } from '../../actions/baseDeDatosGeneral'
import LoaderBtn from '../ui/btn/LoaderBtn'


const schema = yup.object().shape({
})

const InquilinoForm = () => {

    const dispatch = useDispatch();

    const { propietarioActive } = useSelector(state => state.baseDatos)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const updateInquilino = (data) => {
        dispatch(updateInquilinoData(data));
    }

    useEffect(() => {
        reset(propietarioActive)
    }, [])


    return (
        <form onSubmit={handleSubmit(updateInquilino)}>
            <div className='row'>
                <div className="col-md-12 border-bottom border-1 my-3">
                    <p className="text-primary fw-bolder">
                        <FaBuilding /> Inquilino
                    </p>
                </div>

                <div className="col-md-4 mb-3">
                    <label className="form-label">Nombre(s) *</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("nombre_inquilino", { required: true })}
                        placeholder="Nombre(s)"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Apellido Paterno *</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("apellido_pat_inquilino", { required: true })}
                        placeholder="Apellido Paterno"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Apellido Materno *</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("apellido_mat_inquilino", { required: true })}
                        placeholder="Apellido Materno"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Correo *</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("correo_inquilino", { required: true })}
                        placeholder="Correo"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Celular *</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("celular_inquilino", { required: true })}
                        placeholder="Celular"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("telefono_inquilino")}
                        placeholder="Teléfono"
                    />
                </div>
                <div className="col-md-12 mb-3 d-flex justify-content-center">
                    <div className="col-md-2 my-5">
                        <LoaderBtn
                            typeBtn="submit"
                            textBtn={
                                <>
                                    <FaRegSave /> Guardar
                                </>
                            }
                            loadText="Guardando..."
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InquilinoForm