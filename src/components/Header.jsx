import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { images } from '../constants';

const NavItemsInfo = [
  {name: 'Home'},
  {name: 'Articles'},
  {name: 'Pages'},
  {name: 'Pricing'},
  {name: 'FAQ'},
];

const NavItem = ({name}) => {
  return (
    <li className='relative group'>
    <a href='/' className='px-4 py-2'>
    {name}
    </a>
    <span className='text-green-900 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
    </li>
  );
};

const Header = () => {
const [navIsVisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
  setNavIsVisible((curState) => {
    return !curState;
  })
}

  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
            <img src={images.logo} alt='logo' className="w-16 h-15"/>
        </div>

        <div className='lg:hidden z-50'>
          {navIsVisible ? (
            <AiOutlineClose className=" w-6 h-6" onClick= {navVisibilityHandler} />
          ) : (
          <AiOutlineMenu className=" w-6 h-6" onClick={navVisibilityHandler}/>
          )}
        </div>

        <div className={`${navIsVisible ? "right-0" : "-right-full"} mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
            <ul className='text-white lg:text-dark-hard flex flex-col lg:flex-row gap-x-2 font-semibold'>
                {NavItemsInfo.map((item) => (
                  <NavItem key={item.name} name={item.name} />
                ))}
            </ul>
            <button className='border-2 border-green-900 px-6 py-2 rounded-full text-green-900 font-semibold hover:bg-green-900 hover:text-white transition-all duration-300'>Sign In</button>
        </div>
      </header>
    </section>
  )
}

export default Header