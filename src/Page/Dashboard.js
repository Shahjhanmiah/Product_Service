import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button bg-orange-500">Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-purple-400">

                       <Link to='/search'>
                       <li><a>Addproduct</a></li>
                       </Link>
                       <Link to='/product'>
                       <li><a>MyProduct</a></li>
                       </Link>
                       <Link to='/alluser'>
                        <li><a>Allsellers</a></li>
                       </Link>
                       <Link to='/myorder'>
                        <li><a>Myorders</a></li>
                       </Link>
                       <Link to='/allselar'>
                        <li><a>Allbayers</a></li>
                       </Link>
                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;