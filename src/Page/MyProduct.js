import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const MyProduct = () => {

    const { user,} = useContext(AuthContext)
    const {homes} = useContext(AuthContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/homes?email=shajhan@gmail.com')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const handledelete = id => {
        fetch(`http://localhost:5000/homes/${id}`,{
            method:'Delete',
            // headers: {
            //     // authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('successful.')

                }
            })

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>productName</th>
                            <th>Location</th>
                            <th>reselPrice</th>
                            <th>phone</th>
                            <th>eamil</th>
                            <th>Payment</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((product, i) => <tr key={product._id}
                                product={product}>
                                <th>{i + 1}</th>
                                <td>{product.Productnmae}</td>
                                <td>{product.location}</td>
                                <td>{product.resalPrice}</td>
                                <td>{product.phone}</td>
                                <td>{product.email}</td>
                                {/* <td><button onClick={() =>handledelete(homes.id)} className='bg-orange-500 text-3xl'>advertise</button></td> */}
                                <td><button onClick={() =>handledelete(homes._id)}  className="btn btn-outline btn-warning">Delete</button></td>
                                <td>


                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;