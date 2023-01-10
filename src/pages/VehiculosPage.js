import VehiculosForm from '../components/forms/VehiculosForm.js'
import { RegresarBtn } from '../components/ui/btn/RegresarBtn.js'

const VehiculosPage = () => {
    return (
        <div className="card">
            <div className="card-header border-bottom border-1">
                <div className="row d-flex justify-content-between">
                    <h5 className="card-title col-md-6 pt-2"> </h5>
                    <div className="col-md-2 text-right">
                        <RegresarBtn />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <VehiculosForm />
            </div>
        </div>
    )
}

export default VehiculosPage