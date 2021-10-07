import React from 'react'

function Form() {
    return (
        <>
            <form>
                <tr>
                    <input type="text"  placeholder="Nombre" name="nombre" />
                </tr>
                <tr>
                    <input type="text"  placeholder="Teléfono" name="tel" />
                </tr>
                <tr>
                    <input type="email" placeholder="E-mail" name="email" />
                </tr>
                <tr>
                    <input type="email" placeholder="Confirme E-mail" name="email2" />
                </tr>
                <tr>
                    <input type="domicilio" placeholder="Domicilio" name="domicilio" />
                </tr>
                <button className="btn-warning">Terminar compra</button>
            </form>    
        </>
    )
}

export default Form
