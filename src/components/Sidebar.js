import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='border-r-4 bg-white'>
      <div className='grid mt-10 mb-10 sm:flex sm:flex-col relative'>
        <div className='text-center mb-10 sm:mb-0 sm:fixed sm:ml-8 sm:mt-14 lg:ml-20 '>
          <Link
            to='/'
            className='dancingScriptFont sm:absolute sm:p-2 cursor-pointer transition-all transform hover:scale-110 '
          >
            <span>F</span>
            <span>looArt</span>
          </Link>
        </div>
        <nav className='mt-4 place-self-center sm:mt-0 sm:inset-y-1/3	sm:ml-6 sm:fixed'>
          <NavLink
            exact
            activeClassName='selected'
            className='tracking-widest mr-10 sm:ml-0 ml-8 sm:mr-0 sm:block my-8 text-lg transition-all transform hover:scale-110 '
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            activeClassName='selected'
            className='tracking-widest mr-10 sm:mr-0  sm:block my-8 text-lg transition-all transform hover:scale-110 '
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            activeClassName='selected'
            className='tracking-widest sm:mr-0 sm:block my-8 text-lg transition-all transform hover:scale-110 '
            to='/contact'
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
