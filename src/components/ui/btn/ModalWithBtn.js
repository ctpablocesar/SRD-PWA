export const ModalWithBtn = ({ title, textBtn, iconBtn, classBtn, size = 'lg', footer = true, children }) => {

    /* 
        Tamaños de modal: 
        Chica -> sm
        Mediand -> md
        Grande -> lg
  
        Medidas de las modales de bootstrap
    */

    // modalKey para generar un id distinto en caso de haber varias modales en una pantalla [No tocar si no sabe]
    const modalKey = Math.floor(Math.random() * 10000);

    return (
        <>
            <button className={classBtn} type="button" data-bs-toggle="modal" data-bs-target={`#Modal${modalKey}`}>
                {iconBtn} {textBtn}
            </button>

            <div className="modal fade" id={`Modal${modalKey}`} tabIndex="-1" aria-labelledby="modal" aria-hidden="true" key={modalKey}>
                <div className={`modal-dialog modal-md`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fw-bold" id="modal">
                                {title}
                            </h4>
                            <button type="button" className="btn-close" id="carrarModal" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">{children}
                        </div>
                        {footer && (
                            <div className="modal-footer">
                                <button type="button" id="cerrar-modal" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Aceptar
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
