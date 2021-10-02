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
                        <label className="text-warning" for="inputName">Nombre</label>
                        <input type="name" class="form-control" id="inputName" placeholder="Nombre"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="text-warning" for="lastName">Apellido</label>
                        <input type="lastName" class="form-control" id="lastName" placeholder="Apellido"/>
                    </div>
                    <div class="form-group">
                        <label className="text-warning" for="inputEmail">Email</label>
                        <input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label className="text-warning" for="inputAddress2">Teléfono</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Teléfono"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea" rows="3"></textarea>
                    </div>
                </div>
                    <button type="submit" class="btn btn-warning">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
