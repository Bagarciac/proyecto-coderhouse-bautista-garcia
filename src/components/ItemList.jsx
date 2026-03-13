import Item from "./Item"
import { ItemWithLowStock } from "./ItemWithLowStock";

function Itemlist({items}) {
    
    
    
    return (
        
        <div className="grid grid-cols-3 gap-4 justify-items-center">
            {items.map(prod => (
               <ItemWithLowStock prod={prod} key={prod.id} />
            ))}
            
        </div>
        
    )
}

export default Itemlist;
