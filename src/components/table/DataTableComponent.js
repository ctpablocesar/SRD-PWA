import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { useSelector } from "react-redux";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { useEffect, useRef, useState } from "react";

export const DataTableComponent = ({ columns, data, columnsTable, dataTable }) => {
    const { propietarios } = useSelector((state) => state.baseDatos.propietarios);

    const { checking } = useSelector((state) => state.ui);

    const exportColumns = columns.map((col) => ({
        title: col.name,
        dataKey: col.id,
    }));

    const tabla = useRef();

    const [info, setInfo] = useState(data);
    const [infoTable, setInfoTable] = useState(dataTable);
    const [porpietariosExcel, setPorpietariosExcel] = useState(propietarios);

    useEffect(() => {
        setInfo(data);
    }, [data]);

    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text("Propietarios", 10, 10);
        autoTable(doc, {
            head: [columnsTable],
            body: dataTable,
        });
        doc.save("lista-propietarios.pdf")(dataTable);
    };

    const handleFilter = (e) => {
        setInfo(data.filter((el) => el.nombre.props.textBtn.toLowerCase().includes(e.target.value.toLowerCase())));
        setInfoTable(dataTable.filter((el) => el[2].toLowerCase().includes(e.target.value.toLowerCase())));
        setPorpietariosExcel(propietarios.filter((el) => el.nombre.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    const header = () => {
        if (!!columnsTable) {
            return (
                <div className="d-flex mx-2 pb-3 row">
                    <label>Buscar por nombre:</label>
                    <input className="form-control col-md-12 w-25 mx-2" type="search" placeholder="Buscar..." onChange={handleFilter} />
                    <Button type="button" className="btn btn-primary bg-primary col-md-2 mr-2" icon={<BsFileEarmarkPdf />} onClick={exportPDF} data-pr-tooltip="PDF" />
                </div>
            )
        } else {
            return <></>
        }
    }

    return (
        <DataTable className="my-3" ref={tabla} id="data-table" resizableColumns columnResizeMode="fit" showGridlines loading={checking} rows={10} value={info} header={header} responsiveLayout="scroll" dataKey="id" emptyMessage="No hay información para mostrar." paginator rowsPerPageOptions={[10, 20, 50, 100]} currentPageReportTemplate="Mostrando {first} - {last} de {totalRecords} registros" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
            {columns.map((col, index) => (
                <Column key={index} alignHeader="center" align="center" field={col.selector} header={col.name} style={{ width: "auto", textAlign: "center" }} />
            ))}
        </DataTable>
    );
};
