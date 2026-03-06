export const withLowStock = (Component) => {
    function WithLowStockComponent(props) {
        const stock = props.prod.stock;
        return (
            <div className={`${stock < 50 ? 'opacity-50' : ''   }` }>   
                <Component {...props}/>
            </div>
            
        )
    }
    return WithLowStockComponent;
}

