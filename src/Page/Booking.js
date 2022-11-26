import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';


const Booking = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { location, email,productName,phone, _id} = service
    console.log(service);
    const handleBooking = event =>{
         event.preventDefault()
         const booking = {
            location:location,
            email,
            productName,
            phone,
            _id
         }
         console.log(booking)
         fetch('http://localhost:5000/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })



    }

    return (
        <div>


            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <form onSubmit={handleBooking} class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Booking Now</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" defaultValue={user?.email} disabled placeholder= {email} required />
                    </div>
                    <div>
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input type="location" name="location"  placeholder={location} defaultValue={user?.location} disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label for="productName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ProductName</label>
                        <input type="productName" name="productName"  placeholder={productName} defaultValue={user?.productName} disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phonenumber</label>
                        <input type="phone" name="phone"  placeholder={phone} defaultValue={user?.phone} disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label for="_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                        <input type="_id" name="_id"  placeholder={_id} defaultValue={user?._id} disabled class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Booking</button>

                </form>
            </div>

        </div>
    );
};

export default Booking;