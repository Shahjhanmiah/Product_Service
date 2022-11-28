import React, { useEffect, useState } from 'react';
import Advertisedetails from './Advertisedetails';

const Advertise = () => {
    const [service, Setservices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/homes')
            .then(res => res.json())
            .then(data => Setservices(data))
    }, [])

  
    return (
        <div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-20 mr-20 '>
                
            {
                    service.map(service => <Advertisedetails key={service._id}
                        service={service}>

                    </Advertisedetails>)
                }
            </div>
            
        </div>
    );
};

export default Advertise;