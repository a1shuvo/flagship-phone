import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-116px)] flex items-center justify-center'>
                <p className='text-2xl'>404 Error. No page found.</p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;