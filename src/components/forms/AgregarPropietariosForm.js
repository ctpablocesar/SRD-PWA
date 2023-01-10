import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaBuilding, FaFileAlt, FaHome, FaHouseUser, FaRegSave } from "react-icons/fa";
import { GrUpdate } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { savePropietario, updatePropietario } from '../../actions/baseDeDatosGeneral';
import LoaderBtn from '../ui/btn/LoaderBtn';


const schema = yup.object().shape({

    // datos propietario

    // nombre: yup.string().required('Campo requerido'),
    // apellido_pat: yup.string().required('Campo requerido'),
    // apellido_mat: yup.string().required('Campo requerido'),
    // fecha_nacimiento: yup.date('Campo requerido').required('Campo requerido'),
    // correo: yup.string().email('Ingrese un correo valido').required('Campo requerido'),
    // celular: yup.number('Ingrese un numero valido').required('Campo requerido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // telefono: yup.number('Ingrese un numero valido').required('Campo requerido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),

    // datos facturacion

    // razon_social_fac: yup.string(),
    // correo_fac: yup.string().email(),
    // rfc_fac: yup.string(),
    // fraccionamiento_fac: yup.string(),
    // calle_fac: yup.string(),
    // num_interior_fac: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // num_exterior_fac: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // cp_fac: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // ciudad_fac: yup.string(),
    // estado_fac: yup.string(),
    // pais_fac: yup.string(),
    // forma_pago_fac: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // metodo_pago_fac: yup.string(),
    // cfdi_fac: yup.string(),
    // regimen_fiscal_fac: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),

    // datos propiedad

    // calle_pro: yup.string().required('Campo requerido'),
    // numero_pro: yup.number('Ingrese un numero valido').required('Campo requerido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // clave_unidad_pro: yup.string().required('Campo requerido'),
    // descripcion_pro: yup.string().required('Campo requerido'),
    // metros_pro: yup.number('Ingrese un numero valido').required('Campo requerido').positive('Este dato tiene que ser positivo'),
    // metodo_pago_pro: yup.string().required('Campo requerido'),
    // cuota_pro: yup.number('Ingrese un numero valido').required('Campo requerido').positive('Este dato tiene que ser positivo'),
    // cuota_mantenimiento_pro: yup.number('Ingrese un numero valido').required('Campo requerido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // tipo_propiedad_pro: yup.string().required('Campo requerido'),
    // estatus_propiedad_pro: yup.string().required('Campo requerido'),

    // datos inquilino

    // nombre_inquilino: yup.string('Dato no valido'),
    // apellido_pat_inquilino: yup.string('Dato no valido'),
    // apellido_mat_inquilino: yup.string('Dato no valido'),
    // correo_inquilino: yup.string().email('Ingrese un correo electronico valido'),
    // celular_inquilino: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // telefono_inquilino: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),

    // datos lote baldio

    // calle_baldio: yup.string('Dato no valido'),
    // col_baldio: yup.string('Dato no valido'),
    // cp_baldio: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // ciudad_baldio: yup.string('Dato no valido'),
    // telefono_baldio: yup.number('Ingrese un numero valido').positive('Este dato tiene que ser positivo').integer('Este dato tiene que ser un numero entero'),
    // correo_baldio: yup.string().email('Ingrese un correo electronico valido'),
})

const AgregarPropietariosForm = ({ propietarioActive }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })

    const [rentaForm, setRentaForm] = useState("");
    const [loteForm, setloteForm] = useState("");
    const [sendingData, setSendingData] = useState(false);
    const [actualizar, setActualizar] = useState(!!propietarioActive);

    const submitForm = (data) => {
        if (propietarioActive) {
            dispatch(updatePropietario(data));
        } else {
            dispatch(savePropietario(data));
        }
    }

    useEffect(() => {
        if (propietarioActive) {
            const pro = {
                ...propietarioActive,
                fecha_nacimiento: moment(propietarioActive.fecha_nacimiento).format('YYYY-MM-DD')
            }
            reset(pro);
            if (propietarioActive.estatus_propiedad_pro === 'rentada') {
                setRentaForm(propietarioActive.estatus_propiedad_pro);
            } else if (propietarioActive.tipo_propiedad_pro === 'baldio') {
                setloteForm(propietarioActive.tipo_propiedad_pro);
            }
        }
    }, [propietarioActive])

    return (
        <>
            <form className='p-5' onSubmit={handleSubmit(submitForm)} style={{ backdropFilter: 'blur(5px)' }}>
                <div className="row justify-content-center d-flex">

                    {/* Datos del Propietario */}

                    <div className="container mb-3  text-md-left">
                        <div className="row">
                            <div className="col-md-12 border-bottom border-1 my-3">
                                <p className="text-primary fw-bolder">
                                    <FaHouseUser /> Datos del Propietario
                                </p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Nombre(s) *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("nombre", {
                                        required: true,
                                    })}
                                    placeholder="Nombre(s)"
                                />
                                <small className='text-center text-danger'> {errors.nombre && errors.nombre.message} </small>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Apellido Paterno *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("apellido_pat", {
                                        required: true,
                                    })}
                                    placeholder="Apellido Paterno"
                                />
                                <small className='text-center text-danger'> {errors.apellido_pat && errors.apellido_pat.message} </small>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Apellido Materno *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("apellido_mat", {
                                        required: true,
                                    })}
                                    placeholder="Apellido Materno"
                                />
                                <small className='text-center text-danger'> {errors.apellido_mat && errors.apellido_mat.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    {...register("fecha_nacimiento")}
                                />
                                <small className='text-center text-danger'> {errors.fecha_nacimiento && 'Campo requerido'} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Correo *</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("correo", {
                                        required: true,
                                    })}
                                    placeholder="Correo"
                                />
                                <small className='text-center text-danger'> {errors.correo && errors.correo.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Celular *</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("celular", {
                                        required: true,
                                    })}
                                    placeholder="Celular"
                                />
                                <small className='text-center text-danger'> {errors.celular && (errors.celular.type === 'typeError' ? 'Campo requerido' : errors.celular.message)} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Teléfono</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("telefono")}
                                    placeholder="Teléfono"
                                />
                                <small className='text-center text-danger'> {errors.telefono && (errors.telefono.type === 'typeError' ? 'Campo requerido' : errors.telefono.message)} </small>
                            </div>
                        </div>
                    </div>

                    {/* Datos de Facturación */}

                    <div className="container mb-3  text-md-left">
                        <div className="row">
                            <div className="col-md-12 border-bottom border-1 my-3">
                                <p className="text-primary fw-bolder">
                                    <FaFileAlt /> Datos de Facturación
                                </p>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Razón Social</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("razon_social_fac")}
                                    placeholder="Ej. Razon Social" />
                                <small className='text-center text-danger'> {errors.razon_social_fac && errors.razon_social_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Correo</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("correo_fac")}
                                    placeholder="Correo" />
                                <small className='text-center text-danger'> {errors.correo_fac && errors.correo_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">RFC</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("rfc_fac")}
                                    placeholder="RFC" />
                                <small className='text-center text-danger'> {errors.rfc_fac && errors.rfc_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Fraccionamiento</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("fraccionamiento_fac")}
                                    placeholder="Fraccionamiento" />
                                <small className='text-center text-danger'> {errors.fraccionamiento_fac && errors.fraccionamiento_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Calle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("calle_fac")}
                                    placeholder="Calle" />
                                <small className='text-center text-danger'> {errors.calle_fac && errors.calle_fac.message} </small>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label className="form-label">Número Interior</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("num_interior_fac")}
                                    placeholder="Número Interior"
                                    defaultValue={1}
                                />
                                <small className='text-center text-danger'> {errors.num_interior_fac && (errors.num_interior_fac.type === 'typeError' ? 'Campo requerido' : errors.num_interior_fac.message)} </small>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label className="form-label">Número Exterior</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("num_exterior_fac")}
                                    defaultValue={1}
                                    placeholder="Número Exterior" />
                                <small className='text-center text-danger'> {errors.num_exterior_fac && (errors.num_exterior_fac.type === 'typeError' ? 'Campo requerido' : errors.num_exterior_fac.message)} </small>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label className="form-label"> Código Postal</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("cp_fac")}
                                    defaultValue={1}
                                    placeholder="Código Postal" />
                                <small className='text-center text-danger'> {errors.cp_fac && (errors.cp_fac.type === 'typeError' ? 'Campo requerido' : errors.cp_fac.message)} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Ciudad</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("ciudad_fac")}
                                    placeholder="Ciudad" />
                                <small className='text-center text-danger'> {errors.ciudad_fac && errors.ciudad_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Estado</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("estado_fac")}
                                    placeholder="Estado" />
                                <small className='text-center text-danger'> {errors.estado_fac && errors.estado_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">País</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("pais_fac")}
                                    placeholder="País" />
                                <small className='text-center text-danger'> {errors.pais_fac && errors.pais_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Forma de pago</label>
                                <select
                                    className="form-select"
                                    {...register("forma_pago_fac")}
                                >
                                    <option selected disabled>
                                        Selecciona una forma de pago
                                    </option>
                                    <option value="1">01 - Efectivo</option>
                                    <option value="2">02 - Cheque nominativo</option>
                                    <option value="3">03 - Transferencia electrónica de fondos</option>
                                    <option value="4">04 - Tarjeta de credito</option>
                                    <option value="5">05 - Monedero electrónico</option>
                                    <option value="6">06 - Dinero electrónico</option>
                                    <option value="8">08 - Vales de despensa</option>
                                    <option value="12">12 - Dación de pago</option>
                                    <option value="13">13 - Pago por subrogación</option>
                                    <option value="14">14 - Pago por consignación</option>
                                    <option value="15">15 - Condonación</option>
                                    <option value="17">17 - Compensación</option>
                                    <option value="23">23 - Novación</option>
                                    <option value="24">24 - Confusión</option>
                                    <option value="25">25 - Remisión de deuda</option>
                                    <option value="26">26 - Prescipción o caducidad</option>
                                    <option value="27">27 - A satisfaccción del acreedor</option>
                                    <option value="28">28 - Tarjeta de débito</option>
                                    <option value="29">29 - Tarjeta de servicios</option>
                                    <option value="30">30 - Aplicación de anticipos</option>
                                    <option value="99">99 - Por definir</option>
                                    <option value="31">31 - Intermediario pagos</option>
                                </select>
                                <small className='text-center text-danger'> {errors.forma_pago_fac && 'Campo requerido'} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Método de pago</label>
                                <select
                                    className="form-select"
                                    {...register("metodo_pago_fac")}
                                >
                                    <option selected disabled value={0}>
                                        Selecciona un método de pago
                                    </option>
                                    <option value="PUE">Pago de una sola exhibición</option>
                                    <option value="PPD">Pago en parcialidades o diferido</option>
                                </select>
                                <small className='text-center text-danger'> {errors.metodo_pago_fac && errors.metodo_pago_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Uso CFDI</label>
                                <select className="form-select" {...register("cfdi_fac")}>
                                    <option value={0} selected disabled>
                                        Selecciona una opción
                                    </option>
                                    <option value="G01">G01 - Adquisición de mercancias</option>
                                    <option value="G02">G02 - Devoluciones, descuentos o bonificaciones</option>
                                    <option value="G03">G03 - Gastos en general</option>
                                    <option value="I01">I01 - Construcciones</option>
                                    <option value="I02">I02 - Mobiliario y equipo de oficina por inversiones</option>
                                    <option value="I03">I03 - Equipo de transporte</option>
                                    <option value="I04">I04 - Equipo de cómputo y accesorios</option>
                                    <option value="I05">I05 - Dados Troqueles, moldes, matrices y herramental</option>
                                    <option value="I06">I06 - Comunicaciones teléfonicas</option>
                                    <option value="I07">I07 - Comunicaciones satelitales</option>
                                    <option value="I08">I08 - Otra maquinaria y equipo</option>
                                    <option value="P01">P01 - Por definir</option>
                                </select>
                                <small className='text-center text-danger'> {errors.cfdi_fac && errors.cfdi_fac.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Régimen Fiscal</label>
                                <select
                                    className="form-select"
                                    {...register("regimen_fiscal_fac")}
                                >
                                    <option selected disabled value={0}>
                                        Selecciona el Régimen Fiscal
                                    </option>
                                    <option value="601">601 - General de Ley Personas Morales</option>
                                    <option value="603">603 - Personas Morales con Fines no Lucrativos</option>
                                    <option value="605">605 - Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
                                    <option value="606">606 - Arrendamiento</option>
                                    <option value="607">607 - Régimen de Enajenación o Adquisición de Bienes</option>
                                    <option value="608">608 - Demás ingresos</option>
                                    <option value="610">610 - Residentes en el Extranjero sin Establecimiento Permanente en México</option>
                                    <option value="611">611 - Ingresos por Dividendos (socios y accionistas)</option>
                                    <option value="612">612 - Personas Físicas con Actividades Empresariales y Profesionales</option>
                                    <option value="614">614 - Ingresos por intereses</option>
                                    <option value="615">615 - Régimen de los ingresos por obtención de premios</option>
                                    <option value="616">616 - Sin obligaciones fiscales</option>
                                    <option value="620">620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
                                    <option value="621">621 - Incorporación Fiscal</option>
                                    <option value="622">622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
                                    <option value="623">623 - Opcional para Grupos de Sociedades</option>
                                    <option value="624">624 - Coordinados</option>
                                    <option value="625">625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                                    <option value="626">626 - Régimen Simplificado de Confianza</option>
                                </select>
                                <small className='text-center text-danger'> {errors.regimen_fiscal_fac && 'Campo requerido'} </small>
                            </div>
                        </div>
                    </div>

                    {/* Datos de la Propiedad */}

                    <div className="container  text-md-left">
                        <div className="row">
                            <div className="col-md-12 border-bottom border-1 my-3">
                                <p className="text-primary fw-bolder">
                                    <FaHome /> Datos de la Propiedad
                                </p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Calle *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("calle_pro", { required: true })}
                                    placeholder="Calle"
                                />
                                <small className='text-center text-danger'> {errors.calle_pro && errors.calle_pro.message} </small>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Número *</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("numero_pro", { required: true })}
                                    placeholder="Número"
                                />
                                <small className='text-center text-danger'> {errors.numero_pro && (errors.numero_pro.type === 'typeError' ? 'Campo requerido' : errors.numero_pro.message)} </small>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Clave de catastral *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("clave_unidad_pro", { required: true })}
                                    placeholder="Clave de Unidad"
                                />
                                <small className='text-center text-danger'> {errors.clave_unidad_pro && errors.clave_unidad_pro.message} </small>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Link de google maps</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("link_maps_pro")}
                                    placeholder="Link de google maps"
                                />
                                <small className='text-center text-danger'> {errors.numero_pro && (errors.numero_pro.type === 'typeError' ? 'Campo requerido' : errors.numero_pro.message)} </small>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    {...register("descripcion_pro")}
                                    rows={4}
                                    placeholder="Añade una descripción de la propiedad"
                                />
                                <small className='text-center text-danger'> {errors.descripcion_pro && errors.descripcion_pro.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Metros (M²)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("metros_pro")}
                                    placeholder="Metros cuadrados"
                                />
                                <small className='text-center text-danger'> {errors.metros_pro && (errors.metros_pro.type === 'typeError' ? 'Campo requerido' : errors.metros_pro.message)} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Método de pago *</label>
                                <select
                                    className='form-select'
                                    name="metodo_pago_pro"
                                    id="metoodo_pago_pro"
                                    {...register("metodo_pago_pro")}
                                >
                                    <option value="suscripcion">Suscripción</option>
                                    <option value="efectivo">Efectivo</option>
                                    <option value="transferencia">Transferencia</option>
                                </select>
                                <small className='text-center text-danger'> {errors.metodo_pago_pro && errors.metodo_pago_pro.message} </small>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Cuota *</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    step='any'
                                    {...register("cuota_mantenimiento_pro")} placeholder="Cuota " />
                                <small className='text-center text-danger'> {errors.cuota_mantenimiento_pro && (errors.cuota_mantenimiento_pro.type === 'typeError' ? 'Campo requerido' : errors.cuota_mantenimiento_pro.message)} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Tipo de propiedad *</label>
                                <select
                                    className="form-select"
                                    {...register("tipo_propiedad_pro", { required: true })}
                                    onChange={(e) => setloteForm(e.target.value)}
                                >
                                    <option value="construida">Casa Construida</option>
                                    <option value="proceso">Casa en Proceso</option>
                                    <option value="baldio">Terreno Baldío</option>
                                </select>
                                <small className='text-center text-danger'> {errors.tipo_propiedad_pro && errors.tipo_propiedad_pro.message} </small>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Estatus de la propiedad *</label>
                                <select
                                    className="form-select"
                                    {...register("estatus_propiedad_pro", { required: true })}
                                    onChange={(e) => setRentaForm(e.target.value)}
                                >
                                    <option value="habitada">Casa habitada</option>
                                    <option value="rentada">Casa en Renta</option>
                                    <option value="sin habitar">Sin habitar</option>
                                </select>
                                <small className='text-center text-danger'> {errors.estatus_propiedad_pro && errors.estatus_propiedad_pro.message} </small>
                            </div>

                            {rentaForm === "rentada" && (
                                <>
                                    <div className="col-md-12 border-bottom border-1 my-3">
                                        <p className="text-primary fw-bolder">
                                            <FaBuilding /> Inquilino
                                        </p>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Nombre(s) *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("nombre_inquilino", { required: true })}
                                            placeholder="Nombre(s)"
                                        />
                                        <small className='text-center text-danger'> {errors.nombre_inquilino && errors.nombre_inquilino.message} </small>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Apellido Paterno *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("apellido_pat_inquilino", { required: true })}
                                            placeholder="Apellido Paterno"
                                        />
                                        <small className='text-center text-danger'> {errors.apellido_pat_inquilino && errors.apellido_pat_inquilino.message} </small>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Apellido Materno *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("apellido_mat_inquilino", { required: true })}
                                            placeholder="Apellido Materno"
                                        />
                                        <small className='text-center text-danger'> {errors.apellido_mat_inquilino && errors.apellido_mat_inquilino.message} </small>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Correo *</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            {...register("correo_inquilino", { required: true })}
                                            placeholder="Correo"
                                        />
                                        <small className='text-center text-danger'> {errors.correo_inquilino && errors.correo_inquilino.message} </small>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Celular *</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            {...register("celular_inquilino", { required: true })}
                                            defaultValue={0}
                                            placeholder="Celular"
                                        />
                                        <small className='text-center text-danger'> {errors.celular_inquilino && errors.celular_inquilino.message} </small>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Teléfono</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("telefono_inquilino")}
                                            defaultValue={0}
                                            placeholder="Teléfono"
                                        />
                                        <small className='text-center text-danger'> {errors.telefono_inquilino && errors.telefono_inquilino.message} </small>
                                    </div>
                                </>
                            )}

                            {loteForm === "baldio" && (
                                <>
                                    <div className="col-md-12 border-bottom border-1 my-3">
                                        <p className="text-primary fw-bolder">
                                            <FaBuilding /> Lote baldío
                                        </p>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Calle *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("calle_baldio", {
                                                required: true,
                                            })}
                                            placeholder="Calle"
                                        />
                                        <small className='text-center text-danger'> {errors.calle_baldio && errors.calle_baldio.message} </small>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Colonia *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("col_baldio", {
                                                required: true,
                                            })}
                                            placeholder="Colonia"
                                        />
                                        <small className='text-center text-danger'> {errors.col_baldio && errors.col_baldio.message} </small>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Código Postal *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("cp_baldio", {
                                                required: true,
                                            })}
                                            defaultValue={0}
                                            placeholder="Código Postal"
                                        />
                                        <small className='text-center text-danger'> {errors.cp_baldio && errors.cp_baldio.message} </small>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Ciudad *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("ciudad_baldio", {
                                                required: true,
                                            })}
                                            placeholder="Ciudad"
                                        />
                                        <small className='text-center text-danger'> {errors.ciudad_baldio && errors.ciudad_baldio.message} </small>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Teléfono</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("telefono_baldio")}
                                            defaultValue={0}
                                            placeholder="Teléfono"
                                        />
                                        <small className='text-center text-danger'> {errors.telefono_baldio && errors.telefono_baldio.message} </small>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Correo electrónico *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("correo_baldio", {
                                                required: true,
                                            })}
                                            placeholder="Correo electrónico"
                                        />
                                        <small className='text-center text-danger'> {errors.correo_baldio && errors.correo_baldio.message} </small>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {
                        !actualizar
                            ?
                            <div className="col-md-4 my-5">
                                <LoaderBtn
                                    typeBtn="submit"
                                    textBtn={
                                        <>
                                            <FaRegSave /> Guardar
                                        </>
                                    }
                                    isLoading={sendingData}
                                    loadText="Guardando..."
                                />
                            </div>
                            :
                            <div className="col-md-4 my-5">
                                <LoaderBtn
                                    typeBtn="submit"
                                    textBtn={
                                        <>
                                            <GrUpdate /> Actualizar
                                        </>
                                    }
                                    isLoading={sendingData}
                                    loadText="Guardando..."
                                />
                            </div>
                    }
                </div>
            </form>
        </>
    )
}

export default AgregarPropietariosForm