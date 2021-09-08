import Item from './Item';

function ItemList({ autos }) {
    return (
            <div>
                 {autos.map((auto)=>  <Item auto={auto} />  )  }       
            </div>
    )
}
export default ItemList