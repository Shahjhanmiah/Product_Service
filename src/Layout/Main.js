import React from 'react';
import { Outlet } from 'react-router-dom';
import Navar from '../Navar/Navar';
import Footer from '../Page/Footer';

const Main = () => {
    return (
        <div>
            <Navar></Navar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;