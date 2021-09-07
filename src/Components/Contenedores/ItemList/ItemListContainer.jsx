import ItemList from './ItemList'
import { NavLink } from 'react-router-dom'
const Autos = [
    {id: 1, marca: "Volkswagen", modelo: "Fox", año: 2012, categoria: "auto", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 9000, imgUrl: "../Img/VW-Fox.jpg"},
    {id: 2, marca: "Volkswagen", modelo: "Amarok", año: 2016, categoria: "camioneta",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 15000, imgUrl: "../Img/VW-Amarok.jpeg"},
    {id: 3, marca: "Volkswagen", modelo: "Gol", año: 2010, categoria: "auto",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 8500, imgUrl: "../Img/VW-Gol.jpg"},
    {id: 4, marca: "Fiat", modelo: "Argos", año: 2020, categoria: "auto",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 20000, imgUrl: "../Img/Fiat-Argos.jpg"},
    {id: 5, marca: "Fiat", modelo: "Toro", año: 2019, categoria: "camioneta",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 25000, imgUrl: "../Img/Fiat-Toro.jpg"},
    {id: 7, marca: "Ford", modelo: "Focus RS", año: 2019, categoria: "auto",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 26000, imgUrl: "../Img/Ford.jpg"},
    {id: 8, marca: "Suzuki", modelo: "Fun", año: 2007, categoria: "auto",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 5000, imgUrl: "../Img/Suzuki-Fun.jpg"},
    {id: 9, marca: "Mercedes-Benz", modelo: "Axor", año: 2020, categoria: "camioneta",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 60000, imgUrl: "../Img/MB-Axor.webp"},
    {id: 10, marca: "BWM", modelo: "M2 3.0", año: 2018, categoria: "auto",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 40000, imgUrl: "../Img/BMW-M2.jpg"},
    {id: 11, marca: "BMW", modelo: "X6", año: 2015, categoria: "camioneta",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 65000, imgUrl: "../Img/BMW-X6.jpg"},
    {id: 12, marca: "Renault", modelo: "Duster", año: 2012, categoria: "camioneta",descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", precio: 24000, imgUrl: "../Img/Renault-Duster.webp"},
]

function getAutos(id) {
    if (id===undefined) {
        return Autos
    }else{
        return Autos.find( auto=> auto.id === id)
    }
}
let tarea = new Promise((resolve) => {
    setTimeout(() => {
        resolve(getAutos(1));        
    }, 3000);
});
console.log(tarea);
function ItemListContainer() {
    return (
        <div>
            <NavLink to={'./lista'}>{Autos.map((Autos => <ItemList Autos = {Autos}/>))}</NavLink>
        </div>
    );
}
export default ItemListContainer
export {Autos}