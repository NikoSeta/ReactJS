import {Link} from 'react-router-dom';

function Contacto() {
    return (
        <div className="container">
            <Link to={"/"}>
                <button className="btn-sm btn-warning"> Volver a Home</button>
            </Link>
        <form className="container">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Nombre</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Nombre"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Apellido</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Apellido"/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Email</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Email"/>
            </div>
            <div className="form-group">
                <label for="inputAddress2">Teléfono</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Teléfono"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        </div>
    )
}

export default Contacto
