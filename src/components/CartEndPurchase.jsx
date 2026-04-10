

function CartEndPurchase({ onClose, orderId }) {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                <div role="alert" className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your purchase has been confirmed! Order ID: {orderId}</span>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="btn btn-primary" onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default CartEndPurchase;