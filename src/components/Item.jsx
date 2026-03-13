import { useNavigate } from "react-router";

function item ({prod}){

    const navigate = useNavigate();

    return(
        <div className="card bg-gray-800 w-96 shadow-sm border rounded-box ">
            <figure className="px-10 pt-10">
            <img
            src={prod.thumbnail}
            alt={prod.title}
            className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{prod.title}</h2>
                <p>{prod.description}</p>
                <div className="card-actions">
                    <button 
                    className="btn btn-primary"
                    onClick={() => navigate(`/product/${prod.id}`)}>

                        ver mas
                    </button>
                </div>
            </div>
        </div> 
    )

}

export default item;