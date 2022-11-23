import React from 'react';
import { Link } from 'react-router-dom';

const Navar = () => {
    const menuItems = <React.Fragment>
    <Link to='/home'>
      <li><a>Home</a></li>
    </Link>
    <Link to='/login'>
    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-orange-400">Login</button>
    </Link>
    <div className='flex items-center cursor-pointer  text-gray-600 capitalize transition-colors  hover:bg-gray-100 '>
                      <svg
                        className='w-5 h-5 mx-1'
                        viewBox='0 0 24 24'
                        fill= 'none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                      </svg>

                      <button type="button" className="px-8 py-3 font-semibold rounded-full bg-orange-400">Sign Out</button>
                    </div>
                  

  </React.Fragment>
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between  w-50 h-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </div>
      <label htmlFor="Dashbord-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
    </div>
  );
};


export default Navar;