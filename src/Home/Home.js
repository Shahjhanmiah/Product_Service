import React, { useEffect, useState } from 'react';
import Banner from '../Page/Banner';
import Categories from '../Page/Categories';
import Search from '../Page/Search';

const Home = () => {
    const [service, Setservices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/homes')
            .then(res => res.json())
            .then(data => Setservices(data))
    }, [])


    return (
        <div>
           <Banner></Banner>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-20 mr-20 '>
                {
                    service.map(service => <Categories key={service._id}
                        service={service}>

                    </Categories>)
                }
            </div>
            <Search></Search>
        </div>
    );
};

export default Home;