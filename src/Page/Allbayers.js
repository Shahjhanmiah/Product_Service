import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Allbayers = () => {
    const {user} = useContext(AuthContext)
    const [users,serUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allbayers')
        .then(res=>res.json())
        .then(data=>serUsers(data))
    },[])
    return (
        <div>
            <div>

                <div>
                    <h3 className='text-3xl'>Allbayers</h3>

                    <div className="overflow-x-auto grid md:d-flex">
                        <table className="table w-full bg-slate-400 ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>emailAddress</th>
                                    <th>Delete</th>
                                    <th>Admin</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) => <tr key={user._id}
                                    >
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><button className="btn btn-outline btn-accent">Delete</button></td>

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
        </div>
    );
};

export default Allbayers;