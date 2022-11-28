import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const MyProduct = () => {

    const { user,} = useContext(AuthContext)
    const {homes} = useContext(AuthContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://server-swart-nine.vercel.app/homes?email=shajhan@gmail.com')
        
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    const handledelete = id => {
        fetch(`https://server-swart-nine.vercel.app/homes/${id}`,{
            
            method:'Delete',
            //  headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
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
            <div className="overflow-x-auto bg-slate-400">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>productName</th>
                            <th>Location</th>
                            <th>reselPrice</th>
                            <th>phone</th>
                            <th>eamil</th>
                            <th>fire</th>
                            <th>Advertise</th>


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
                                <td></td>
                                <td><small className='text-orange-300'>advertise</small></td>
                               
                                <td>

                                <td><button  className="btn btn-outline btn-primary">Advertise</button></td>
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