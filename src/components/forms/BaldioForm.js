import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FaBuilding, FaRegSave } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { updateBaldioData } from '../../actions/baseDeDatosGeneral'
import LoaderBtn from '../ui/btn/LoaderBtn'


const schema = yup.object().shape({
})

const BaldioForm = () => {

    const dispatch = useDispatch();

    const { propietarioActive } = useSelector(state => state.baseDatos)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const updateBaldio = (data) => {
        dispatch(updateBaldioData(data));
    }

    useEffect(() => {
        reset(propietarioActive)
    }, [])

    return (
        <form className='row' onSubmit={handleSubmit(updateBaldio)}>
            <div className="col-md-12 border-bottom border-1 my-3">
                <p className="text-primary fw-bolder">
                    <FaBuilding /> Lote baldío
                </p>
            </div>

            <div className="col-md-6 mb-3">
                <label className="form-label">Calle *</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("calle_baldio", {
                        required: true,
                    })}
                    placeholder="Calle"
                />
                <small className='text-center text-danger'> {errors.calle_baldio && errors.calle_baldio.message} </small>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Colonia *</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("col_baldio", {
                        required: true,
                    })}
                    placeholder="Colonia"
                />
                <small className='text-center text-danger'> {errors.col_baldio && errors.col_baldio.message} </small>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Código Postal *</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("cp_baldio", {
                        required: true,
                    })}
                    placeholder="Código Postal"
                />
                <small className='text-center text-danger'> {errors.cp_baldio && errors.cp_baldio.message} </small>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Ciudad *</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("ciudad_baldio", {
                        required: true,
                    })}
                    placeholder="Ciudad"
                />
                <small className='text-center text-danger'> {errors.ciudad_baldio && errors.ciudad_baldio.message} </small>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Teléfono</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("telefono_baldio")}
                    placeholder="Teléfono"
                />
                <small className='text-center text-danger'> {errors.telefono_baldio && errors.telefono_baldio.message} </small>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Correo electrónico *</label>
                <input
                    type="text"
                    className="form-control"
                    {...register("correo_baldio", {
                        required: true,
                    })}
                    placeholder="Correo electrónico"
                />
                <small className='text-center text-danger'> {errors.correo_baldio && errors.correo_baldio.message} </small>
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
        </form>
    )
}

export default BaldioForm