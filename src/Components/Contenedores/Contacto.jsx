import {Link} from 'react-router-dom';
import '../CSS/Contacto.css'

function Contacto() {
    return (
        <div className="container" id="fondo">
            <Link to={"/"}>
                <button className="btn-sm btn-warning"> Volver a Home</button>
            </Link>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="text-warning">Nombre</label>
                        <input type="name" class="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="text-warning">Apellido</label>
                        <input type="lastName" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label className="text-warning">Email</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="text-warning">Teléfono</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="text-warning" >Dejanos tu consulta.</label>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                </div>
                    <button type="submit" class="btn btn-warning">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
