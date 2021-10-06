import React from 'react'

function Form() {
    return (
        <>
            <form>
                <input type="text"  placeholder="ing nombre" name="nombre" />
                <input type="text"  placeholder="ing tel" name="tel" />
                <input type="email" placeholder="ing email" name="email" />
                <input type="email" placeholder="confirme el mail" name="email2" />
                <button className="btn-warning">Terminar compra</button>
            </form>    
        </>
    )
}

export default Form
