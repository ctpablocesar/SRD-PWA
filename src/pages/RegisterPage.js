import AgregarPropietariosForm from "../components/forms/AgregarPropietariosForm"

const RegisterPage = () => {

    return (
        <>
            <div
                className="d-lg-flex half py-4"
                style={{
                    backgroundImage: `url('assets/assets/img/hero-bg.png')`,
                    height: '100vh',
                    backgroundColor: '#cccccc',
                    // backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="container py-5">
                    <div className="row align-items-center justify-content-center" style={{ backdropFilter: 'blur(5px)' }}>
                        <AgregarPropietariosForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage