import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../../constants'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
const [isMenuActive, setIsMenuActive] = useState(false)
const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState)
}
  return (
    <header className='flex h-fit w-full items-center justify-between p-4 '>
        {/* logo */}
        <Link to="/">
            <img src ={images.logo} alt='logo' className='w-16'/>
        </Link>
        {/* menu burget icon */}
        <div className='cursor-pointer'>
            {isMenuActive ? (
                <AiOutlineClose className='w-6 h-6' onClick={toggleMenuHandler}/>
            ) : (
                <AiOutlineMenu className='w-6 h-6' onClick={toggleMenuHandler}/>
            )}
        </div>
        {/* sidebar container */}
        {isMenuActive && (
            <div className='fixed inset-0'>
                {/* underlay */}
                <div className='fixed inset-0 bg-black opacity-50' onClick={toggleMenuHandler}/>
            </div>
        )}
    </header>
  )
}

export default Header