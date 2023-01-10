import React from 'react'
import { RegresarBtn } from '../components/ui/btn/RegresarBtn'

const Error404Page = () => {
    return (
        <div className="row justify-content-md-center align-middle my-auto mx-auto" style={{ height: '100%' }}>
            {/* <div className="col-12" style={{ height: '70vh', marginTop: '15%' }}> */}
            <h1 className='text-center' style={{ fontSize: '10rem' }}>404</h1>
            <h2 className='display-4 text-center'>Página no encontrada</h2>
            {/* </div> */}
            <div className="col row ">
                <div className="col-sm-1 mx-auto mt-5">
                    <RegresarBtn />
                </div>
            </div>
        </div>
    )
}

export default Error404Page