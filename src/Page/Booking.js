import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import BookingProduct from './BookingProduct';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { location, email } = service
    console.log(service);

    return (
        <div>

          
        </div>
    );
};

export default Booking;