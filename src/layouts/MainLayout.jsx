import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <p>NavBar</p>
            <Outlet></Outlet>
            <p>Footer</p>
        </>
    );
};

export default MainLayout;