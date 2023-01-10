import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { cleanVehiculos, getInformacionPersonal, setHabitanteActive } from "../actions/informacionPersonal";
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';
import { AdminHeader } from '../components/ui/AdminHeader';

const RegistroVehicularPage = () => {
    const columns = [
        {
            name: "Nombre",
            selector: (row) => row.nombre,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Vehículos",
            selector: (row) => row.vehiculos,
            center: true,
            width: "auto",
        },
    ];

    const { informacionPersonal } = useSelector(state => state.informacionPersonal)

    const dispatch = useDispatch();

    const [data, setData] = useState();

    useEffect(() => {
        if (informacionPersonal.info) {
            setData(
                informacionPersonal.info.map(pro => ({
                    nombre: pro.nombre_completo,
                    vehiculos: (
                        <NavLink onClick={() => dispatch(setHabitanteActive(pro))} className="btn btn-link text-decoration-none" to='/admin/vehiculos'>
                            {pro.vehiculos.length}
                        </NavLink>
                    ),
                }))
            )
        }
    }, [informacionPersonal])

    useEffect(() => {
        dispatch(cleanVehiculos())
        dispatch(getInformacionPersonal())
    }, [])

    return (
        <>
            <AdminHeader
                title='Registro vehicular'
            />
            <AdminCard>
                <DataTableComponent columns={columns} data={data} />
            </AdminCard>
        </>
    );
};

export default RegistroVehicularPage;