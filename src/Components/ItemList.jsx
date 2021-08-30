import React from 'react';
import ImgCard from '../Img/Ford.jpg';
import ItemCont from './ItemContador';

const Autos = [
    {id: 1, marca: "Volkswagen", modelo: "Fox", año: 2012, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 9000},
    {id: 2, marca: "Volkswagen", modelo: "Amarok", año: 2016, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 15000},
    {id: 3, marca: "Volkswagen", modelo: "Gol", año: 2010, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 8500},
    {id: 4, marca: "Fiat", modelo: "Argos", año: 2020, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 20000},
    {id: 5, marca: "Fiat", modelo: "Toro", año: 2019, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 25000},
    {id: 6, marca: "Ford", modelo: "Ranger", año: 2008, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 9000},
    {id: 7, marca: "Ford", modelo: "Focus RS", año: 2019, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 26000},
    {id: 8, marca: "Suzuki", modelo: "Fun", año: 2007, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 5000 },
    {id: 9, marca: "Mercedes-Benz", modelo: "Axor", año: 2020, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 60000},
    {id: 10, marca: "BWM", modelo: "M2 3.0", año: 2018, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 40000},
    {id: 11, marca: "BMW", modelo: "X6", año: 2015, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 65000},
    {id: 12, marca: "Renault", modelo: "Duster", año: 2012, descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 24000},
]

console.log(Autos.map((auto)=>({marca: auto.marca, modelo: auto.modelo})));

function getAutos (id){
    return Autos.find(auto => auto.id === id)}

let tarea = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(getAutos(1));
        }, 2000);
        reject ("No hay autos")
})

function ItemList() {
    tarea.then( (respuesta) => {console.log(respuesta);
    }, error => {
        console.log('Error', error);
    })
    return (
        <>
        <img src= {ImgCard} className='card-img-top' alt='logo'/>
        {Autos.map((auto)=> <div className='card'>
                                    <div className='card-body'>
                                    <h5 className='card-title'>{auto.marca} {auto.modelo}</h5>
                                    <p className='card-text'>{auto.año}</p>
                                    <p className='card-text'>{auto.descripcion}</p>
                                    <ItemCont/>
                                    <a href='#' className='btn btn-danger'>Comprar</a>
                                </div>
                            </div>)}
        </>
)}
export default ItemList