import React from 'react';
import { useAuth } from './AuthProvider';
import "./Protected.css"
const ProtectedComponent = ({ children }) => {
    const { isLoggedIn, login } = useAuth();

    // If the user is not logged in, prompt them to log in
    if (!isLoggedIn) {
        return (
            <div className="overlay">
                 <div className="overLayProtected-background" >
                    <div className="overLayProtected-container">
                        <div className=" p-6 rounded-md text-white h-full flex flex-col justify-center space-y-4 ">
       
            
                            <h2 className='text-lg font-bold text-Yellow'>You need to log in to continue</h2>
                            <button onClick={login} className='text-Darkblue ring-2 ring-Yellow bg-Yellow rounded-md w-full'>Log In</button>
           
                         </div>
                     </div>
                </div>
            </div>
        );
    }

    // If the user is logged in, render the children components
    return <>{children}</>;
};

export default ProtectedComponent;
