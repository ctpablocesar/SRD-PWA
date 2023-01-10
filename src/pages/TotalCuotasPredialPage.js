import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotales } from '../actions/cuotasPredial';
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';

const TotalCuotasPredialPage = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const [comisiones, setComisiones] = useState(0);

    const { totales, comisiones: com, fecha } = useSelector(state => state.cuotasPredial);

    useEffect(() => {
        if (totales) {
            setData(
                totales.map(total => ({ ...total, id: total.index }))
            )
        }
        setComisiones(com)
    }, [totales])


    useEffect(() => {
        dispatch(getTotales(fecha))
    }, [])

    const columns = [
        {
            name: "Clave catastral",
            selector: (row) => row.index,
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
        }
    ]

    const columnsComisiones = [
        {
            name: "Concepto",
            selector: (row) => row.concepto,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Comisión",
            selector: (row) => row.comision,
            sortable: true,
            width: "auto",
            center: true,
        }
    ]

    const infoComisiones = [
        {
            concepto: '1% Dominio',
            comision: (comisiones * .01).toFixed(2)
        },
        {
            concepto: '1.5% Web hosting',
            comision: (comisiones * .015).toFixed(2)
        },
        {
            concepto: '1.5 Certificado se seguridad SSL',
            comision: (comisiones * .015).toFixed(2)
        },
        {
            concepto: '5% Procesador de pagos',
            comision: (comisiones * .05).toFixed(2)
        },
        {
            concepto: '2% Conciliaciones bancarias',
            comision: (comisiones * .02).toFixed(2)
        },
        {
            concepto: '2% Soporte técnico',
            comision: (comisiones * .02).toFixed(2)
        },
        {
            concepto: '2% Servicios administrativos',
            comision: (comisiones * .02).toFixed(2)
        },
        {
            concepto: '15% Total Servicios de "Mes"',
            comision: (comisiones * .15).toFixed(2)
        },
        {
            concepto: 'IVA',
            comision: (comisiones * .16).toFixed(2)
        },
        {
            concepto: 'Total Comisiones',
            comision: (comisiones * .15 + comisiones * .16).toFixed(2)
        },
        {
            concepto: 'Total Ingreso a Recaudar',
            comision: (comisiones).toFixed(2)
        },
    ]

    return (
        <>
            <h1 className="mb-3 fw-bold">
                Total Cuotas impuesto predial
            </h1>
            <AdminCard
                backBtn={true}
            >
                <DataTableComponent columns={columns} data={data} />
                <div className="felx row justify-content-end py-5">
                    <DataTable className='col-sm-6' id="data-table" resizableColumns columnResizeMode="fit" showGridlines rows={10} value={infoComisiones} responsiveLayout="scroll" dataKey="id" emptyMessage="No hay información para mostrar." currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} registros" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                        {columnsComisiones.map((col, index) => (
                            <Column key={index} alignHeader="center" align="center" field={col.selector} header={col.name} style={{ width: "auto", textAlign: "center" }} />
                        ))}
                    </DataTable>
                </div>
            </AdminCard>
        </>
    )
}

export default TotalCuotasPredialPage