import { Link } from "react-router-dom";
import '../styles/principal.css';


const IndexPage = () => {
    return (
        <>
            <header id="header" className="fixed-top shadow-sm">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-9">
                            <Link to="/" className="logo">
                                <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-md-3 py-3">
                            <Link to="/login" className="btn btn-outline-primary mx-2">
                                Iniciar Sesión
                            </Link>
                            <Link to="/register" className="btn btn-primary mx-2">
                                Registrarse
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="titulo1">
                        <h1>Trámites y servicios</h1>
                    </div>

                    <div className="row icon-boxes">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h4 className="title">
                                    <Link to="#">MUNICIPALES</Link>
                                </h4>
                                <p className="description">Pago de ingresos al municipio</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="ri-folder-keyhole-fill"></i>
                                </div>
                                <h4 className="title">
                                    <a href="#">ESTATALES</a>
                                </h4>
                                <p className="description">Pago de ingresos al estado</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="ri-shield-user-fill"></i>
                                </div>
                                <h4 className="title">
                                    <a href="">FEDERALES</a>
                                </h4>
                                <p className="description">Pago de ingresos al país</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="ri-search-line"></i>
                                </div>
                                <h4 className="title">
                                    <a href="">SERVICIOS DE CONSULTA </a>
                                </h4>
                                <p className="description">Transparencia de impuestos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="clients" className="clients section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/clients/client-1.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/clients/client-2.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/clients/client-3.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/clients/client-4.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/clients/client-5.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
                            <img src="https://ciudadanoscomprometidos.com.mx/SRD/assets/img/clients/client-6.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Ciudadano</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Inscribirse al RFC</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Consultar curp</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Acta de nacimiento</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Unidad y medida de actualizacion</a></li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Gobierno</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Gobierno del estado </a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Comité de Ética</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Alta de notificaciones</a></li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Contribuyentes</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Avisos de privacidad</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Contibunet</a></li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Ubicación</h4>
                                <ul>
                                    <li><i className="bi bi-geo-alt-fill"></i> <a href="#"> Direccion: Calle 20 de noviembre esquina con Juarez
                                        C.P 34000</a></li>
                                    <li><i className="bi bi-telephone-fill"></i> <a href="#"> 618-123-45-67</a></li>
                                    <li><i className="bi bi-clock-fill"></i> <a href="#"> 09:00 - 16:00</a></li>

                                </ul>


                            </div>
                            <div className="extra col-12 text-center ">
                                <a href="#"><span> Centro de Revisión Catastral y Censal</span></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">

                        <div className="copyright">
                            &copy; Copyright <strong><span>Ciudadanos Comprometidos</span></strong>. Todos los derechos reservados
                        </div>

                        <div className="credits">


                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default IndexPage;