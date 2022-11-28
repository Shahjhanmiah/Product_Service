import React, { useEffect, useState } from 'react';

const Myorders = () => {

    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/homes')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
             <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>img</th>
                            <th>pay</th>
                            


                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((product, i) => <tr key={product._id}
                                product={product}>
                                <th>{i + 1}</th>
                                <td>{product.email}</td>
                                <td>{product.catagori}</td>
                                <td><button className="btn btn-outline btn-info">pay</button></td>
                                
                                {/* <td><button onClick={() =>handledelete(homes.id)} className='bg-orange-500 text-3xl'>advertise</button></td> */}
                                {/* <td><button onClick={() =>handledelete(homes._id)}  className="btn btn-outline btn-warning">advertise.</button></td> */}
                                <td>


                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default Myorders;