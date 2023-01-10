import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { getRentadas, setPropietarioActive } from "../actions/baseDeDatosGeneral";
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';
import { AdminHeader } from '../components/ui/AdminHeader';
import { ModalWithBtn } from "../components/ui/btn/ModalWithBtn";


const DatosInquilino = ({ info }) => {
    return (
        <>
            <div className="container">
                <div className="mx-3 mt-2">
                    <h3 className="card-titl text-left">
                        {info.nombre_inquilino} {info.apellido_pat_inquilino} {info.apellido_mat_inquilino}
                    </h3>
                    <hr />
                </div>
                <form className="text-bold">
                    <div className="form-group col-md-12 mb-3">
                        <h4>Correo:</h4>
                        <p>
                            {info.correo_inquilino}
                        </p>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Teléfono:</h4>
                        <p>
                            {info.telefono_inquilino}
                        </p>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Celular:</h4>
                        <p>
                            {info.celular_inquilino}
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

const DatosPropietario = ({ info }) => {
    return (
        <>
            <div className="container">
                <div className="mx-3 mt-2">
                    <h3 className="card-tile">
                        {info.nombre} {info.apellido_pat} {info.apellido_mat}
                    </h3>
                    <hr />
                </div>
                <form>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Correo</h4>
                        <p>
                            {info.correo}
                        </p>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Teléfono</h4>
                        <p>
                            {info.telefono}
                        </p>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Celular</h4>
                        <p>
                            {info.celular}
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

const DatosUnidad = ({ info }) => {
    return (
        <>
            <div className="container">
                <form className="">
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-group col-md-4 mb-3">
                            <h4>Correo</h4>
                            <p>
                                {info.correo}
                            </p>
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <h4>Teléfono</h4>
                            <p>
                                {info.telefono}
                            </p>
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <h4>Celular</h4>
                            <p>
                                {info.celular}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <h4>Descripción</h4>
                        <p>
                            {info.descripcion_pro}
                        </p>
                    </div>
                    <div className="col-sm-12 d-flex flex-row">
                        <div className="col-sm-6">
                            <h4>Cuota de mantenimiento mensual</h4>
                            <p>
                                {info.cuota_mantenimiento_pro}
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h4>Metros ²</h4>
                            <p>
                                {info.metros_pro}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 d-flex flex-row">
                        <div className="col-sm-6">
                            <h4>Tipo de casa</h4>
                            <p>
                                {info.tipo_propiedad_pro}
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h4>Estatus de la casa</h4>
                            <p>
                                {info.estatus_propiedad_pro}
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

const CasasRentaPage = () => {

    const dispatch = useDispatch();

    const { casas } = useSelector(state => state.baseDatos.rentadas);
    const { saving } = useSelector(state => state.ui);

    const [rows, setRows] = useState([]);

    const columns = [
        {
            name: "#",
            selector: (row) => row.id,
            sortable: true,
            width: "7%",
            center: true,
        },
        {
            name: "Clave catastral",
            selector: (row) => row.clave_unidad,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Datos del inquilino",
            selector: (row) => row.inquilino,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Datos del propietario",
            selector: (row) => row.propietario,
            sortable: true,
            width: "auto",
            center: true,
        },
        {
            name: "Acciones",
            selector: (row) => row.acciones,
            center: true,
            width: "auto",
        },
    ];

    const handleEdit = (data) => {
        dispatch(setPropietarioActive(data));
        window.location.href = `${import.meta.env.VITE_WINDOW_URL}/#/admin/inquilino`
    }

    useEffect(() => {
        if (casas) {
            setRows(
                casas.map((data, index) => ({
                    id: index + 1,
                    clave_unidad: (
                        <ModalWithBtn size="lg" classBtn="btn btn-link text-decoration-none" title="Datos de la casa" textBtn={data.clave_unidad_pro} footer={false}>
                            <DatosUnidad info={data} />
                        </ModalWithBtn>
                    ),
                    inquilino: (
                        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Inquilino Prueba" textBtn={data.nombre_inquilino} footer={false}>
                            <DatosInquilino info={data} />
                        </ModalWithBtn>
                    ),
                    propietario: (
                        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Propietario Prueba" textBtn={data.nombre} footer={false}>
                            <DatosPropietario info={data} />
                        </ModalWithBtn>
                    ),
                    acciones: [
                        <button className="btn btn-success" onClick={() => handleEdit(data)}>
                            <BsPencilSquare />
                        </button>
                    ],
                }))
            )
        }
    }, [saving])

    useEffect(() => {
        dispatch(getRentadas());
    }, [])

    return (
        <>
            <AdminHeader
                title="Casas en Renta"
            />

            <AdminCard title="Información de casas en renta">
                <DataTableComponent columns={columns} data={rows} />
            </AdminCard>
        </>
    );
};

export default CasasRentaPage;