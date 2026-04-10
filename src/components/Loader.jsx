import { PuffLoader } from 'react-spinners';

function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <PuffLoader color="black" size={60} />
        </div>
    )
}

export default Loader;