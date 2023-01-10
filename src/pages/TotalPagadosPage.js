import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable";
import moment from 'moment';
import { useEffect, useState } from 'react';
import { BsFileEarmarkPdf, BsFillTrash2Fill, BsFillTrashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteCuota, getPagados } from '../actions/cuotasPredial';
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';
import { ModalWithBtn } from '../components/ui/btn/ModalWithBtn';

const TotalPagadosPage = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const { pagados } = useSelector(state => state.cuotasPredial);

    useEffect(() => {
        if (pagados) {
            setData(
                pagados.map(total => ({
                    ...total,
                    id: total.index,
                    acciones: (
                        <>
                            <NavLink to={`/admin/cuotas-predial/pagado-eliminar/${total.id}`} className="btn btn-danger">
                                <BsFillTrash2Fill />
                            </NavLink>
                        </>
                    )
                }))
            )
        }
    }, [pagados])


    useEffect(() => {
        dispatch(getPagados())
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
        },
        {
            name: "Acciones",
            selector: (row) => row.acciones,
            sortable: true,
            width: "auto",
            center: true,
        }
    ]

    return (
        <>
            <h1 className="mb-3 fw-bold">
                Total Pagado
            </h1>
            <AdminCard
                backBtn={true}
            >
                <DataTableComponent columns={columns} data={data} />
            </AdminCard>
        </>
    )
}

export default TotalPagadosPage