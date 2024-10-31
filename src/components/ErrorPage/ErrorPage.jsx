import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error.status);
    return (
        <div>
            <h2 className="text-7xl">Opps!!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to={'/'}><button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;