import React from 'react';
import {FiSearch} from 'react-icons/fi';
import { images } from "../../constants";

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col lg:px-10 px-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Read the most Interesting Articles</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                Explore a diverse collection of articles that spark curiosity and inspire thought. From cutting-edge innovations to timeless insights, our articles cover a wide range of topics designed to inform, entertain, and engage. Whether you're in the mood for a deep dive or a quick read, you'll find something intriguing to enjoy.

            </p>
           <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
                <div className='relative'>
                    <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
                    <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD]rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' type='text' placeholder='Search Articles'/>
                </div>
                <button className='w-full bg-green-900 text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>
                    Search
                </button>
           </div>
           <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7 '>
                <span className='text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:tect-base'>Popular Tags: </span>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                    <li className='rounded-lg bg-green-900 bg-opacity-10 px-3 py-1.5 text-green-900 font-semibold'>Design</li>
                    <li className='rounded-lg bg-green-900 bg-opacity-10 px-3 py-1.5 text-green-900 font-semibold'>User Experience</li>
                    <li className='rounded-lg bg-green-900 bg-opacity-10 px-3 py-1.5 text-green-900 font-semibold'>User Interfaces</li>
                </ul>
           </div>
        </div>

        <div className='hidden lg:block lg:w-1/2'>
            <img className='w-full h-300' src={images.HeroImage} alt='users are reading articles'/>
        </div>
    </section>
  )
}

export default Hero;