import { NavLink } from "react-router-dom";

import { BsGraphUp } from "react-icons/bs";
import { FaAddressCard, FaDatabase, FaTable } from "react-icons/fa";


export const AdminSidebar = ({ show }) => {

    return (
        <nav id="sidebar" className={`sidebar ${show ? "" : "d-none"} `}>
            <div className="sidebar-content">
                <NavLink className="sidebar-brand mb-1" to="/admin">
                    <span className="align-middle">
                        <img className="w-75 ml-3" src='assets/assets/img/logo.png' />
                    </span>
                </NavLink>
                <ul className="sidebar-nav">
                    <li className="sidebar-item text-light active my-2">
                        <a data-bs-target="#db" data-bs-toggle="collapse" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="layout"></i>
                            <span className="align-middle">
                                <FaDatabase /> Base de Datos
                            </span>
                        </a>
                        <ul id="db" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li className="sidebar-item">
                                <NavLink to="/admin/" className="sidebar-link">
                                    Base de Datos general
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to="/admin/casas-renta">
                                    Casas en renta
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to="/admin/lotes-baldios">
                                    Lotes Baldíos
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to="/admin/registro-vehicular">
                                    Registro vehicular
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to="/admin/estadisticas">
                                    Estadisticas
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item text-light active my-2">
                        <a data-bs-target="#finanzas" data-bs-toggle="collapse" className="sidebar-link collapsed">
                            <i className="align-middle" data-feather="layout"></i>{" "}
                            <span className="align-middle">
                                {" "}
                                <BsGraphUp /> Finanzas
                            </span>
                        </a>
                        <ul id="finanzas" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to="cuotas-predial">
                                    Cuotas predial
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
