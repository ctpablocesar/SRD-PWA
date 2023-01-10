import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getBaldios, setPropietarioActive } from "../actions/baseDeDatosGeneral";

import { DataTableComponent } from "../components/table/DataTableComponent";

import { AdminCard } from '../components/ui/AdminCard';
import { AdminHeader } from '../components/ui/AdminHeader';
import { ModalWithBtn } from "../components/ui/btn/ModalWithBtn";

const DatosPropietario = ({ info }) => {
    return (
        <>
            <div className="container">
                <div className="mx-3 mt-2">
                    <h3 className="card-titl">
                        {info.nombre} {info.apellido_pat} {info.apellido_mat}
                    </h3>
                    <hr />
                </div>
                <form>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Correo</h4>
                        {/* <input className="form-control" type="text" value={info.correo} disabled={true} /> */}
                        <p>
                            {info.correo}
                        </p>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Teléfono</h4>
                        {/* <input className="form-control" type="text" value={info.telefono} disabled={true} /> */}
                        <p>
                            {info.telefono}
                        </p>
                    </div>
                    <div className="form-group col-md-12 mb-3">
                        <h4>Celular</h4>
                        {/* <input className="form-control" type="text" value={info.celular} disabled={true} /> */}
                        <p>
                            {info.celular}
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

const DatosBaldio = ({ info }) => {
    return (
        <>
            <div className="container">
                <form className="row">
                    <div className="form-group col-md-6 mb-3">
                        <h4>Calle:</h4>
                        <p>
                            {info.calle_baldio}
                        </p>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <h4>Colonia:</h4>
                        <p>
                            {info.col_baldio}
                        </p>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <h4>Código Postal:</h4>
                        <p>
                            {info.cp_baldio}
                        </p>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <h4>Ciudad:</h4>
                        <p>
                            {info.ciudad_baldio}
                        </p>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <h4>Telefono:</h4>
                        <p>
                            {info.telefono_baldio}
                        </p>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <h4>Correo Electronico:</h4>
                        <p>
                            {info.correo_baldio}
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
                            <h4>Cuota impuesto predial</h4>
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

const DatosFaltantes = ({ info }) => {

    return (
        <>
            <div className="container">
                <form className="row">
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-grou col-md-12 mb-3">
                            <h3 className={`${info.calle_baldio ? 'text-success' : 'text-danger'} font-weight-bolder`}>Calle</h3>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-grou col-md-12 mb-3">
                            <h3 className={`${info.col_baldio ? 'text-success' : 'text-danger'} font-weight-bolder`}>Colonia</h3>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-grou col-md-12 mb-3">
                            <h3 className={`${info.cp_baldio ? 'text-success' : 'text-danger'} font-weight-bolder`}>Código Postal</h3>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-grou col-md-12 mb-3">
                            <h3 className={`${info.ciudad_baldio ? 'text-success' : 'text-danger'} font-weight-bolder`}>Ciudad</h3>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-grou col-md-12 mb-3">
                            <h3 className={`${info.telefono_baldio ? 'text-success' : 'text-danger'} font-weight-bolder`}>Telefono</h3>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex flex-row">
                        <div className="form-grou col-md-12 mb-3">
                            <h3 className={`${info.correo_baldio ? 'text-success' : 'text-danger'} font-weight-bolder`}>Correo Electronico</h3>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

const LotesBaldiosPage = () => {

    const dispatch = useDispatch();

    const { saving } = useSelector(state => state.ui);

    const { baldios } = useSelector(state => state.baseDatos);

    const [rows, setRows] = useState();

    const handleEdit = (data) => {
        dispatch(setPropietarioActive(data));
        window.location.href = `${import.meta.env.VITE_WINDOW_URL}/#/admin/baldio`
    }

    useEffect(() => {
        dispatch(getBaldios())
    }, []);

    useEffect(() => {
        if (baldios.casas) {
            setRows(
                baldios.casas.map((data, index) => ({
                    id: index + 1,
                    clave: (
                        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Información de Propiedad" textBtn={data.clave_unidad_pro} footer={false}>
                            <DatosUnidad info={data} />
                        </ModalWithBtn>
                    ),
                    propietario: (
                        <ModalWithBtn classBtn="btn btn-link text-decoration-none" title="Información de Propietario" textBtn={data.nombre} footer={false}>
                            <DatosPropietario info={data} />
                        </ModalWithBtn>
                    ),
                    estatus: (
                        data.calle_baldio && data.col_baldio && data.cp_baldio && data.ciudad_baldio && data.telefono_baldio && data.correo_baldio
                            ?
                            <ModalWithBtn classBtn="btn btn-link m-0 p-0 text-decoration-none" title="Información de Propietario" textBtn={<span className="badge badge-success p-2">Completado</span>} footer={false}>
                                <DatosBaldio info={data} />
                            </ModalWithBtn>
                            :
                            <ModalWithBtn classBtn="btn btn-link m-0 p-0 text-decoration-none" title="Información Pendiente" textBtn={<span className="badge badge-warning p-2">Pendiente</span>} footer={false}>
                                <DatosFaltantes info={data} />
                            </ModalWithBtn>
                    ),
                    acciones: [
                        <button className="btn btn-success" onClick={() => handleEdit(data)}>
                            <BsPencilSquare />
                        </button>,
                    ],
                }))
            )
        }
    }, [saving])

    const columns = [
        {
            id: "id",
            name: "#",
            selector: (row) => row.id,
            sortable: true,
            width: "7%",
            center: true,
        },
        {
            id: "Clave de unidad",
            name: "Clave catastral",
            selector: (row) => row.clave,
            sortable: true,
            center: true,
        },
        {
            id: "Propietario",
            name: "Propietario",
            selector: (row) => row.propietario,
            sortable: true,
            center: true,
        },
        {
            id: "Estatus",
            name: "Estatus",
            selector: (row) => row.estatus,
            sortable: true,
            center: true,
        },

        {
            id: "Acciones",
            name: "Acciones",
            selector: (row) => row.acciones,
            center: true,
        },
    ];

    return (
        <>
            <AdminHeader
                title='Lotes Baldíos'
            />
            <AdminCard>
                <DataTableComponent columns={columns} data={rows} />
            </AdminCard>
        </>
    );
};

export default LotesBaldiosPage;