import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { startLogin } from '../actions/auth';
import LoaderBtn from '../components/ui/btn/LoaderBtn';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(25).required()
})

const LoginPage = () => {

    const dispatch = useDispatch();

    const { cheking } = useSelector(state => state.ui)

    const [visible, setVisible] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const submitForm = (data) => {
        dispatch(startLogin(data));
    }

    return (
        <>
            <div className="d-lg-flex half py-4" style={{ backgroundImage: `url('assets/assets/img/hero-bg.png')`, height: '100vh',backgroundColor: '#cccccc', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Toaster position="top-center" reverseOrder={false} />
                <div className="container py-5">
                    <Toaster position="top-center" reverseOrder={false} />
                    <div className="row align-items-center justify-content-center" style={{backdropFilter: 'blur(5px)'}}>
                        <div className="col-md-5 mb-5 py-5">
                            <div className="mb-4 text-center">
                                <Link to="/">
                                    <img src='https://ciudadanoscomprometidos.com.mx/SRD/assets/img/logo.png' width="215" height="65" alt="logo" />
                                </Link>
                            </div>
                            <form className="mx-3 px-5" onSubmit={handleSubmit(submitForm)}>
                                <div className="form-group first">
                                    <label className="fw-normal mb-1" htmlFor="email">
                                        Usuario
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? "border border-danger" : ""} `}
                                        placeholder="Correo Electrónico"
                                        id="email"
                                        name="email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    <small className='text-center text-danger'> {errors.email && 'Ingresa un correo electrónico valido'} </small>
                                </div>
                                <div className="form-group last my-3">
                                    <label className="fw-normal mb-1" htmlFor="password">
                                        Contraseña
                                    </label>
                                    <div className="input-group mb-1">
                                        <input
                                            type={
                                                visible
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            className={`form-control ${errors.password && "border border-danger"} `}
                                            placeholder="Contraseña"
                                            id="password"
                                            name="password"
                                            {...register("password", {
                                                required: true,
                                            })}
                                        />
                                        <button className={`btn ${errors.password ? 'btn-outline-danger' : 'btn-outline-primary'}`} type="button" onClick={() => setVisible(!visible)}>
                                            {visible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                        </button>
                                    </div>
                                    <small className='text-center text-danger'> {errors.password && 'La contraseña tiene que tener por lo menos 6 caracteres'} </small>
                                    {/* {loginErrorPass && <small className="text-danger">Contraseña Incorrecta</small>} */}
                                </div>
                                <LoaderBtn typeBtn="submit" textBtn={"Entrar"} classBtn="btn btn-block form-control btn-primary form-inline" isLoading={cheking} />
                                {/* <div className="d-flex pt-4 justify-content-center">
                                    <small className="text-center">
                                        ¿Olvidaste tu contraseña? <NavLink to="/password-recovery"> Click Aquí</NavLink>
                                    </small>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage