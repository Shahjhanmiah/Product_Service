import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Allsellers = () => {
    const {users} = useContext(AuthContext)
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/homes')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>

             <div>
      <h3 className='text-3xl'>AllSeller</h3>

      <div className="overflow-x-auto grid md:d-flex">
        <table className="table w-full bg-slate-400 ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>emailAddress</th>
              <th>Delete</th>
              <th>verify </th>
            </tr>
          </thead>
          <tbody>
          {
                            product?.map((product, i) => <tr key={product._id}
                                product={product}>
                                <th>{i + 1}</th>
                                <td>{product.Productnmae}</td>
                                <td>{product.email}</td>
                                <td><button className="btn btn-outline btn-accent">Delete</button></td>
                                <td><button className="btn btn-outline btn-info">verify</button></td>
                                {/* <td><button onClick={() =>handledelete(homes.id)} className='bg-orange-500 text-3xl'>advertise</button></td> */}
                                <td></td>
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

export default Allsellers;