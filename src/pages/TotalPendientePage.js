import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPendientes } from '../actions/cuotasPredial';
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';

const TotalPendientePage = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const { pendientes } = useSelector(state => state.cuotasPredial);

    useEffect(() => {
        if (pendientes) {
            setData(
                pendientes.map(total => ({
                    ...total,
                    id: total.index
                }))
            )
        }
    }, [pendientes])

    useEffect(() => {
        dispatch(getPendientes())
    }, [])

    const columns = [
        {
            name: "Clave catastral",
            selector: (row) => row.unidad,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Nombre",
            selector: (row) => row.nombre,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Método de pago",
            selector: (row) => row.metodo_pago,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Cuota",
            selector: (row) => row.cuota_mantenimiento,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Cuota Recaudar",
            selector: (row) => row.cuota_recaudar,
            sortable: true,
            width: "auto",
            center: true,
        }
    ]

    return (
        <>
            <h1 className="mb-3 fw-bold">
                Total Pendiente
            </h1>
            <AdminCard
                backBtn={true}
            >
                <div className="">
                    <DataTableComponent columns={columns} data={data} />
                </div>
            </AdminCard>
        </>
    )
}

export default TotalPendientePage