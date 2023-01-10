import { useEffect, useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { addVehiculo, updateVehiculo } from '../../actions/informacionPersonal';
import { useForm } from '../../hooks/useForm';

const VehiculosForm = () => {

    const dispatch = useDispatch();

    const { habitanteActive } = useSelector(state => state.informacionPersonal)

    const [data, setData] = useState([]);

    useEffect(() => {
        habitanteActive.pro && setData(habitanteActive.pro.vehiculos)
    }, [])

    useEffect(() => { }, [data])

    const handleSendData = () => {
        document.querySelector('#enviar-data-1')
            ? document.querySelector('#enviar-data-1').click()
            : handleSubmit()
    }

    const handleSubmit = () => {
        dispatch(updateVehiculo())
    }

    const handleAddVehiculo = () => {
        setData(prevData => ([...prevData, { marca: '', modelo: '', color: '', placas: '' }]))
    }

    const handleDelete = (info) => {
        setData(prevData => (prevData.filter(el => el.index != info.index)))
    }

    const VehiculoForm = ({ info, handleSubmit, handleDelete }) => {

        const { vehiculo } = useSelector(state => state.informacionPersonal)

        useEffect(() => {
            setValue(info)
        }, [])

        const { index } = info;

        const [value, handleInputChange, reset, setValue] = useForm({
            marca: '',
            modelo: '',
            color: '',
            placas: ''
        });

        const saveData = (e) => {
            e.preventDefault()
            let info = vehiculo;
            info.push(value)
            dispatch(addVehiculo(info))
            document.querySelector(`#enviar-data-${index + 2}`)
                ? document.querySelector(`#enviar-data-${index + 2}`).click()
                : handleSubmit()
        }

        return (
            <div className="container">
                <div className="card">
                    <form className="card-body row" onSubmit={saveData}>
                        <div className="col-md-12 border-bottom border-1 py-2 row d-flex">
                            <div className="col-sm-6 d-flex justify-content-start align-items-center">
                                <p className="text-primary fw-bolder">
                                    <FaCar /> Vehículo {info.index + 1}
                                </p>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-end align-items-center">
                                <p className="btn text-danger fw-bolder" style={{ fontSize: '1.5rem' }} onClick={() => handleDelete(info)}>
                                    <MdDeleteForever />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Marca</label>
                            <input
                                className="form-control"
                                type="text"
                                name='marca'
                                id='marca'
                                value={value.marca}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Modelo</label>
                            <input
                                className="form-control"
                                type="text"
                                name='modelo'
                                id='modelo'
                                value={value.modelo}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Color</label>
                            <input
                                className="form-control"
                                type="text"
                                name='color'
                                id='color'
                                value={value.color}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Placas</label>
                            <input
                                className="form-control"
                                type="text"
                                name='placas'
                                id='placas'
                                value={value.placas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button id={`enviar-data-${info.index + 1}`} className='btn btn-primary' type="submit"
                            style={{ display: 'none' }}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                data.map((info, index) => (
                    <VehiculoForm
                        key={index}
                        info={{ ...info, index }}
                        handleSubmit={handleSubmit}
                        handleDelete={handleDelete}
                    />
                ))
            }
            <div className="row d-flex justify-content-center">
                <div className="col-sm-1">
                    <button className='btn btn-primary mx-2' onClick={handleSendData}>
                        Guardar
                    </button>
                </div>
                <div className="col-sm-1">
                    <button className='btn btn-success mx-2' onClick={handleAddVehiculo}>
                        Agregar
                    </button>
                </div>
            </div>
        </>
    )
}

export default VehiculosForm