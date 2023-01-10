import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCuotas, setFecha, setTotal } from "../actions/cuotasPredial";
import { DataTableComponent } from "../components/table/DataTableComponent";


const CuotasPage = () => {
    const dispatch = useDispatch();

    const { cuotas } = useSelector((state) => state.cuotasPredial);

    const [data, setData] = useState([]);

    const handleSetFecha = (fecha) => {
        dispatch(setFecha(fecha))
    }

    const handleSetTotal = (data) => {
        dispatch(setTotal(data));
    }

    useEffect(() => {
        if (cuotas) {
            setData(
                cuotas.map((cuota, index) => ({
                    id: index,
                    año: cuota.año,
                    mes: cuota.mes,
                    total_cuotas: (
                        <NavLink onClick={() => handleSetTotal((cuota.total), handleSetFecha(cuota.mes))} to="total" className="text-decoration-none">
                            {cuota.total}
                        </NavLink>
                    ),
                    pendiente: (
                        <NavLink onClick={() => handleSetFecha(cuota.mes)} to="pendiente" className="text-decoration-none">
                            {cuota.pendiente}
                        </NavLink>
                    ),
                    pagado: (
                        <NavLink onClick={() => handleSetFecha(cuota.mes)} to="pagado" className="text-decoration-none">
                            {cuota.pagado}
                        </NavLink>
                    ),
                    estatus: cuota.estatus ? <span className="badge badge-success">Pagado</span> : <span className="badge badge-danger">Pendiente</span>,
                }))
            );
        }
    }, [cuotas]);

    useEffect(() => {
        dispatch(getCuotas());
    }, []);

    const columns = [
        {
            name: "Año",
            selector: (row) => row.año,
            sortable: true,
            width: "7%",
            center: true,
        },
        {
            name: "Total Cuotas",
            selector: (row) => row.total_cuotas,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Pendiente",
            selector: (row) => row.pendiente,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Total Pagado",
            selector: (row) => row.pagado,
            center: true,
            width: "auto",
        },
        {
            name: "Estatus",
            selector: (row) => row.estatus,
            center: true,
            width: "auto",
        },
    ];

    return (
        <>
            <h1 className="mb-3 fw-bold">Cuotas Predial</h1>

            <div className="card">
                <div className="card-body">
                    <div className="col-md-12">
                        <DataTableComponent columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CuotasPage;
