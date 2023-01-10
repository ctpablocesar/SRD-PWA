import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteCuota } from '../actions/cuotasPredial';

import { AdminCard } from '../components/ui/AdminCard';
import { useForm } from '../hooks/useForm';

const EliminarCuotasPage = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const [value, handleInputChange] = useForm({
        motivo: ''
    });

    const handledeleteIngreso = () => {
        dispatch(deleteCuota({ id, motivo: value.motivo }))
    }

    return (
        <AdminCard title="Eliminar" backBtn={true}>
            <form onSubmit={(e) => (e.preventDefault(), handledeleteIngreso())}>
                <div className='my-3'>
                    <label htmlFor="motivo">Motivo:</label>
                    <input
                        className='form-control'
                        type="text"
                        name='motivo'
                        id='motivo'
                        value={value.motivo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button
                    className='btn btn-danger my-3'
                    type="submit"
                >
                    Eliminar
                </button>
            </form>
        </AdminCard>
    )
}

export default EliminarCuotasPage