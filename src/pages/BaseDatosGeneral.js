import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { cleanPropietarioActive, getPropietarios, setPropietarioActive } from '../actions/baseDeDatosGeneral';
import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminHeader } from '../components/ui/AdminHeader';
import { ModalWithBtn } from "../components/ui/btn/ModalWithBtn";

const DatosPersonales = ({ info }) => {
    return (
        <div className="container">
            <h3 className="card-titl text-left">
                {info.nombre} {info.apellido_pat} {info.apellido_mat}
            </h3>
            <hr />
            <form className="row d-flex">
                <div className="form-group col-md-6 mb-3 text-left fw-bold">
                    <label>Correo: </label>
                    <p>
                        {info.correo}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 text-left fw-bold">
                    <label>Contraseña</label>
                    <p>
                        {info.contrasena}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 text-left fw-bold">
                    <label>Teléfono</label>
                    <p>
                        {info.telefono}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 text-left fw-bold">
                    <label>Celular</label>
                    <p>
                        {info.celular}
                    </p>
                </div>
            </form>
        </div>
    );
};

const InformacionPropiedades = ({ info }) => {
    return (
        <div className="container">
            <form className="row justify-content-center p-4">
                <div className="form-group col-md-4 mb-3 fw-bold text-left">
                    <h4>Clave de Catastral</h4>
                    <p>
                        {info.clave_unidad_pro}
                    </p>
                </div>
                <div className="form-group col-md-4 mb-3 fw-bold text-left">
                    <h4>Calle</h4>
                    <p>
                        {info.calle_pro}
                    </p>
                </div>
                <div className="form-group col-md-4 mb-3 fw-bold text-left">
                    <h4>Número</h4>
                    <p>
                        {`#${info.numero_pro}`}
                    </p>
                </div>
                <div className="form-group col-md-12 mb-3 fw-bold text-left">
                    <h4>Descripción</h4>
                    <p>
                        {info.descripcion_pro}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 fw-bold text-left">
                    <h4>Cuota</h4>
                    <p>
                        {`$${info.cuota_pro.toFixed(2)}`}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 fw-bold text-left">
                    <h4>Metros (M²)</h4>
                    <p>
                        {`${info.metros_pro} m²`}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 fw-bold text-left">
                    <h4>Tipo de propiedad</h4>
                    <p>
                        {`${info.tipo_propiedad_pro.toUpperCase()}`}
                    </p>
                </div>
                <div className="form-group col-md-6 mb-3 fw-bold text-left">
                    <h4>Estatus de la propiedad</h4>
                    <p>
                        {`${info.estatus_propiedad_pro.toUpperCase()}`}
                    </p>
                </div>
            </form>
        </div>
    );
};

const InformacionCuotas = ({ info }) => {
    return (
        <div className="container">
            <form className="row d-flex">
                <div className="form-group col-md-12 mb-3 fw-bold">
                    <label>Método de Pago</label>
                    <input className="form-control" type="text" value={info.metodo_pago_pro.toUpperCase()} disabled={true} />
                </div>
                <div className="form-group col-md-6 mb-3 text-left fw-bold">
                    <label>Cuota Suscripción</label>
                    <input className="form-control" type="text" value={`$${info.cuota_mantenimiento_pro.toFixed(2)}`} disabled={true} />
                </div>
                <div className="form-group col-md-6 mb-3 text-left fw-bold">
                    <label>Cuota Efectivo</label>
                    <input className="form-control" type="text" value={`$`} disabled={true} />
                </div>
            </form>
        </div>
    );
};

const InfoClaveUnidad = ({ info }) => {
    return (
        <div className="container">
            <form className="row d-flex">
                <div className="form-group col-md-12 mb-3 fw-bold">
                    <label>Folio</label>
                    <p>
                        " {info._id.toUpperCase()} "
                    </p>
                </div>
            </form>
        </div>
    )
}

const BaseDatosGeneral = () => {

    const dispatch = useDispatch();

    const { propietarios: pro } = useSelector(state => state.baseDatos);
    const { saving } = useSelector(state => state.ui);
    const [rows, setRows] = useState([]);
    const [saved, setSaved] = useState(false);
    const [dataTable, setDataTable] = useState([]);

    const { propietarios } = pro;

    const handleEdit = (data) => {
        dispatch(setPropietarioActive(data));
        window.location.href = `${import.meta.env.VITE_WINDOW_URL}/#/admin/propietario`
    }

    const columnsTable = ["#", "Clave de unidad", "Nombre", "Dirección", "Cuota"]

    const setRow = () => {
        if (propietarios) {
            setDataTable(
                propietarios.map((data, index) => ([
                    index,
                    data.clave_unidad_pro,
                    data.nombre_completo,
                    data.calle_pro,
                    data.cuota_pro,
                ]))
            )
            setRows(
                propietarios.map((data, index) => ({
                    id_usuario: index + 1,
                    clave_unidad: data.clave_unidad_pro,
                    nombre: (
                        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={data.nombre + ' ' + data.apellido_pat + ' ' + data.apellido_mat} title="Datos personales" size="md" footer={false}>
                            <DatosPersonales info={data} />
                        </ModalWithBtn>
                    ),
                    direccion: (
                        <ModalWithBtn classBtn="btn btn-link text-decoration-none" textBtn={data.calle_pro} title="Datos personales" size="lg" footer={false}>
                            <InformacionPropiedades info={data} />
                        </ModalWithBtn>
                    ),
                    cuota_pro: data.cuota_pro,
                    // cuota_mantenimiento_pro: data.cuota_mantenimiento_pro,
                    acciones: [
                        <button className="mx-1 btn btn-success" onClick={() => handleEdit(data)}>
                            <BsPencilSquare />
                        </button>,
                        // <LoaderBtn classBtn="mx-1 btn btn-primary mx-2" textBtn={<BsEnvelope />} loadText="" />,
                        <a href={data.link_maps_pro} className="mx-1 btn btn-warning text-light" target="_blank">
                            <FaMapMarkerAlt />
                        </a>
                    ]
                }))
            )
        }
    }


    useEffect(() => {
        setRow()
    }, [pro, saving])

    useEffect(() => {
        dispatch(getPropietarios())
        dispatch(cleanPropietarioActive())
    }, [saved])

    const columns = [
        {
            id: "id",
            name: "#",
            selector: (row) => row.id_usuario,
        },
        {
            id: "clave_unidad",
            name: "Clave de catastral",
            selector: (row) => row.clave_unidad,
        },
        {
            id: "nombre",
            name: "Nombre",
            selector: (row) => row.nombre,
        },
        {
            id: "direccion",
            name: "Dirección",
            selector: (row) => row.direccion,
        },
        {
            id: "cuota_pro",
            name: "Cuota",
            selector: (row) => row.cuota_pro,
        },
        // {
        //   id: "cuota_mantenimiento_pro",
        //   name: "Cuota mantenimiento",
        //   selector: (row) => row.cuota_mantenimiento_pro,
        // },
        {
            id: "acciones",
            name: "Acciones",
            selector: (row) => row.acciones,
        },
    ];

    return (
        <>
            <AdminHeader
                title='Propietarios'
            // subtitle='Se muestra toda la información general de los colonos, así como de sus propiedades.' 
            />
            <div className="card">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <DataTableComponent columns={columns} data={rows} columnsTable={columnsTable} dataTable={dataTable} />
                </div>
            </div>
        </>
    );
};

export default BaseDatosGeneral;