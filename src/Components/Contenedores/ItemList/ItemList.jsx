import Item from './Item';



function ItemList({autos}) {
    return (
        <div className="container">
            <div className="row">
                 {autos.map((item)=>
                 (<Item key={item} autos={item}/>)  )  }       
            </div>
        </div>
    )
}
export default ItemList