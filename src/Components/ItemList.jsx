import React from 'react'
import ItemCount from './ItemCount'

function ItemList() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <ul className="col-bg-4">
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Volskwagen Fox</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Ford Focus RS</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Susuzki Fun</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Ford Ranger</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Volkswagen Amarok</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Mercedes-Benz Axor</a>
                    </li>
                </ul>
                <ul className="col-bg-4">
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">BMW M2 3.0</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">BMW X6</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Renault Duster</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Volkswagen Gol</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Fiat Argos</a>
                    </li>
                    <li class="list-group">
                        <a href="#" class="list-group-item list-group-item-dark dark" aria-current="true">Fiat Toro</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {ItemList}
