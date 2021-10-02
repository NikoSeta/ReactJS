export const autos = [
    {id: 1, marca: "Volkswagen", modelo: "Fox", año: 2012, categoria: "autos", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 9000, imgUrl: "./Img/VW-Fox.jpg"},
    {id: 2, marca: "Volkswagen", modelo: "Amarok", año: 2016, categoria: "camionetas",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 15000, imgUrl: "./Img/VW-Amarok.jpeg"},
    {id: 3, marca: "Volkswagen", modelo: "Gol", año: 2010, categoria: "autos",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 8500, imgUrl: "./Img/VW-Gol.jpg"},
    {id: 4, marca: "Fiat", modelo: "Argos", año: 2020, categoria: "autos",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 20000, imgUrl: "./Img/Fiat-Argos.jpg"},
    {id: 5, marca: "Fiat", modelo: "Toro", año: 2019, categoria: "camionetas",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 25000, imgUrl: "./Img/Fiat-Toro.jpg"},
    {id: 6, marca: "Ford", modelo: "Focus RS", año: 2019, categoria: "autos",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 26000, imgUrl: "./Img/Ford.jpg"},
    {id: 7, marca: "Suzuki", modelo: "Fun", año: 2007, categoria: "autos",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 5000, imgUrl: "./Img/Suzuki-Fun.jpg"},
    {id: 8, marca: "Mercedes-Benz", modelo: "Axor", año: 2020, categoria: "camionetas",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 60000, imgUrl: "../Img/MB-Axor.webp"},
    {id: 9, marca: "BWM", modelo: "M2 3.0", año: 2018, categoria: "autos",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 40000, imgUrl: "./Img/BMW-M2.jpg"},
    {id: 10, marca: "BMW", modelo: "X6", año: 2015, categoria: "camionetas",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 65000, imgUrl: "./Img/BMW-X6.jpg"},
    {id: 11, marca: "Renault", modelo: "Duster", año: 2012, categoria: "camionetas",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 24000, imgUrl: "./Img/Renault-Duster.webp"},
    {id: 12, marca: "Ford", modelo: "Raptor", año: 2021, categoria: "camionetas",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 75000, imgUrl: ".."}
]
export function getId(id) {
    if (id===undefined) {
        return autos
    }else{
        return autos.find( auto=> auto.id === id)
    }
}
export let auto = new Promise((resolve) => {
    setTimeout(() => {
        resolve(getId(1));
    }, 3000);
}); //esta funcion me trae un objeto del array
export const getAuto = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(autos)
    }, 3000);
});//esta funcion me trae un array