import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ModalWithBtn } from "./btn/ModalWithBtn";
import { RegresarBtn } from "./btn/RegresarBtn";

export const AdminCard = ({ children, title, backBtn = false, modalBtn = null, titleModal, sizeModal = "", linkBtn = "" }) => {
  // modalBtn: Recibe child para la modal de agregar
  // backBtn: True -> Mustra boton de regresar a pantalla anterior
  // Title: titulo de la card
  // Children: Contenido de la card (Tablas, texto, etc)

  return (
    <div className="card">
      <div className="card-header border-bottom border-1">
        <div className="row d-flex justify-content-between">
          <h5 className="card-title col-md-6 pt-2"> {title} </h5>
          <div className="col-md-2 text-right">
            {backBtn && <RegresarBtn />}
            {modalBtn != null && <ModalWithBtn size={sizeModal} title={titleModal} textBtn="Agregar" iconBtn={<FaPlus />} classBtn="btn btn-primary" footer={false} children={modalBtn} />}
            {linkBtn != "" && (
              <Link to={linkBtn} className="btn btn-primary">
                <FaPlus /> Agregar
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};
