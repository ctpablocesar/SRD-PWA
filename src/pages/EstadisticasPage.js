import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { saveEstadisticas } from "../actions/estadisticas";
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';
import { AdminHeader } from '../components/ui/AdminHeader';

const EstadisticasPage = () => {

    const dispatch = useDispatch()

    const { data } = useSelector(state => state.estadisticas);

    const [busqueda, setBusqueda] = useState('')

    const [info, setInfo] = useState()

    const [columns, setColumns] = useState([])

    useEffect(() => {
        setInfo(data)
    }, [data])

    const setDataColumn = (value) => {
        value === 3
            ? setColumns([
                {
                    name: "#",
                    selector: (row) => row.numero,
                    sortable: true,
                    width: "auto",
                    center: true,
                },
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
                    name: "Dirección",
                    selector: (row) => row.direccion,
                    sortable: true,
                    width: "auto",
                    center: true,
                },
                {
                    name: "Teléfono",
                    selector: (row) => row.telefono,
                    sortable: true,
                    width: "auto",
                    center: true,
                },
            ])
            : value === 2
                ? setColumns([
                    {
                        name: "#",
                        selector: (row) => row.numero,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Propietario",
                        selector: (row) => row.nombre,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Dirección",
                        selector: (row) => row.direccion,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Nombre",
                        selector: (row) => row.nombre_personal,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Fecha Nacimiento",
                        selector: (row) => row.fecha_nacimiento,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Celular",
                        selector: (row) => row.celular,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Posición",
                        selector: (row) => row.posicion,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                ])
                : setColumns([
                    {
                        name: "#",
                        selector: (row) => row.numero,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Propietario",
                        selector: (row) => row.nombre,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Dirección",
                        selector: (row) => row.direccion,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Marca",
                        selector: (row) => row.marca,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Modelo",
                        selector: (row) => row.modelo,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                    {
                        name: "Placas",
                        selector: (row) => row.placas,
                        sortable: true,
                        width: "auto",
                        center: true,
                    },
                ])
    }

    const handleCharge = (value) => {
        setBusqueda(value)
        if (value === 'vehiculos') {
            dispatch(saveEstadisticas(value))
            setDataColumn(1)
        } else if (value === 'personal') {
            dispatch(saveEstadisticas(value))
            setDataColumn(2)
        } else {

            dispatch(saveEstadisticas(value))
            setDataColumn(3)
        }
    }

    return (
        <>
            <AdminHeader title='Estadísticas' subtitle='En esta página podemos consultar varias categorías de información, como casas construidas, terrenos baldíos, entre otros, esto puede ser muy útil si precisamos de información más especifica.' />

            <AdminCard title='Generales'>

                <form className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group">
                            <Select
                                defaultValue={{ label: "Selcciona una opción", value: 0 }}
                                options={[
                                    {
                                        label: "Casas Construidas",
                                        value: "construidas"
                                    },
                                    {
                                        label: "Casas en Proceso",
                                        value: "proceso"
                                    },
                                    {
                                        label: "Terrenos Baldíos",
                                        value: "baldios"
                                    },
                                    {
                                        label: "Casas Habitadas",
                                        value: "habitadas"
                                    },
                                    {
                                        label: "Casas sin habitar",
                                        value: "sin-habitar"
                                    },
                                    {
                                        label: "Casas Rentadas",
                                        value: "rentadas"
                                    },
                                    {
                                        label: "Vehículos",
                                        value: "vehiculos"
                                    },
                                ]}
                                onChange={({ value }) => handleCharge(value)}
                            />
                        </div>
                    </div>
                </form>

                <div className="col-md-12 mt-5">
                    {busqueda != "" ? (
                        <>
                            <h4 className="mb-3 fw-bolder font-italic">Resultados de {busqueda}</h4>
                            <h5 className="mb-3 fw-bolder font-italic">{data.length} {data.length === 1 ? 'Registro' : 'Registros'}</h5>
                            <DataTableComponent columns={columns} data={info} />
                        </>
                    ) : (
                        <span className="mb-3 alert alert-light justify-content-center text-muted">No hay nada para mostrar</span>
                    )}
                </div>

            </AdminCard>
        </>
    );
};

export default EstadisticasPage;