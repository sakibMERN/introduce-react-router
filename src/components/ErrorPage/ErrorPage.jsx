import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const home = useNavigate();
    console.log(error);
    const handleGoBackHome = () => {
        home('/')
    }
    return (
        <div>
            <h2 className='text-red-600 text-7xl'>Opps !!!</h2>
            <h5>{error.message || error.statusText}</h5>
            {
                error.status === 404 && <div>
                   <h3>Page not found</h3>
                   <p>Go back where you from</p> 
                   <button onClick={handleGoBackHome}>Go Back</button>
                   <Link to={'/'}>Home</Link>
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;