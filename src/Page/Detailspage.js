import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detailspage = ({service}) => {
    const {productName,location,resalPrice,Selar,originalPrice,yearofuse,catagori,email} = service
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={catagori} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide"><p>{productName}</p></h2>
                        <p className="dark:text-gray-100">location:{location}</p>
                        <p className="dark:text-gray-100">resalPrice:${resalPrice}</p>
                        <p className="dark:text-gray-100">originalPrice:${originalPrice}</p>
                        <p className="dark:text-gray-100">SelarNmae:{Selar}</p>
                        <p className="dark:text-gray-100">yearofuse:{yearofuse}</p>
                        <p className="dark:text-gray-100">email:{email}</p>
                      
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-400 dark:text-gray-900">Read more</button>
                </div>
            </div>

        </div>
    );
};

export default Detailspage;