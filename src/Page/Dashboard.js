import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                       <Link to='/search'>
                       <li><a>Addproduct</a></li>
                       </Link>
                       <Link to='/product'>
                       <li><a>MyProduct</a></li>
                       </Link>
                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;