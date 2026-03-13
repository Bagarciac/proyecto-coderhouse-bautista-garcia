import AddToCart from "./AddToCart";

function ItemDetail ({prod}) {

    if (!prod) {
        return <p>Cargando...</p>;
    }

    return(
        <div className="flex flex-col lg:flex-row mx-20 mt-10">
            <div className="border  flex bg-white rounded  items-center justify-center">
                <img src={prod.thumbnail} alt={prod.title} />
            </div>
            <div className="pl-2.5">
                <h2 className="text-2xl font-bold">{prod.title}</h2>
                <p>{prod.description}</p>
                <p className="text-green-400">Precio: ${prod.price}</p>
                <AddToCart item = {prod} />
            </div>
            

        </div>
    )
}
export default ItemDetail;