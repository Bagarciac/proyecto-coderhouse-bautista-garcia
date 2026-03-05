import Item from "./Item"

function Itemlist({items}) {
    
    
    
    return (
        
        <div className="grid grid-cols-3 gap-4">
            {items.map(prod => (
               <Item prod={prod} key={prod.id} />
            ))}
            
        </div>
        
    )
}

export default Itemlist;
