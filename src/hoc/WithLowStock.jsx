export const withLowStock = (Component) => {
    function WithLowStockComponent(props) {
        const stock = props.prod.stock;
        const isLowStock = stock > 0 && stock < 10;
        const isNoStock = stock === 0;

        return (
            <div className="relative">
                <Component {...props}/>
                {isLowStock && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold">
                        Low Stock
                    </div>
                )}
                {isNoStock && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                        No Stock
                    </div>
                )}
            </div>

        )
    }
    return WithLowStockComponent;
}

