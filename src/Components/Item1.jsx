import React from 'react'

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

function getAutos (id){
    return Autos.find(auto => auto.id === id)
}
let tarea = new Promise ((resolve, reject) => {
    resolve(getAutos (16));
    reject("no hay autos");
});

function Item1() {

    tarea.then( (respuesta) => {
        console.log(respuesta);

    }, error => {
        console.log('Error', error);

    })

    return (
        <div>
           <a>{}</a> 
        </div>
    )
}

export default Item1
