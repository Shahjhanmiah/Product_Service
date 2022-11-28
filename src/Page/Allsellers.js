import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const Allsellers = () => {
    const {user} = useContext(AuthContext)
    const [users,serUsers] = useState([])
    useEffect(()=>{
        fetch('https://server-swart-nine.vercel.app/users')
        .then(res=>res.json())
        .then(data=>serUsers(data))
    },[])
    const handleMakeAdmin = id => {
      fetch(`https://server-swart-nine.vercel.app/users/admin/${id}`,{
          method: 'PUT', 
          headers: {
              authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res => res.json())
      .then(data => {
          if(data.modifiedCount > 0){
              toast.success('Make admin successful.')
             
          }
      })
  
  }
  const handleverifay = (id) =>{
    fetch(`https://server-swart-nine.vercel.app/users/verifay/${id}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  
  
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
              <th>Admin</th>

            </tr>
          </thead>
          <tbody>
          {
                            users.map((user,i) => <tr key={user._id}
                                >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className="btn btn-outline btn-accent">Delete</button></td>
                                <td><button onClick={()=>handleverifay(user._id)}className="btn btn-outline btn-info">verify</button></td>
                                <td><button onClick={() =>handleMakeAdmin(user._id)} className="btn btn-outline btn-primary">Admin</button></td>
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