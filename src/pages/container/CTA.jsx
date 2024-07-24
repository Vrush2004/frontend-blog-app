import React from 'react'

const CTA = () => {
  return (
    <>
        <svg
            className='w-full h-auto max-h-40 translate-y-1'
            preserveAspectRatio='none'
            viewBox='0 0 2160 263'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                id='Wave'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2160 263H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V263Z'
                fill='#003300'
            />
        </svg>

        <section className='relative bg-dark-hard px-5'>
            <div className='container grid grid-cols-12 mx-auto'>
                <div className='col-span-12'>
                    <h2 className='text-white font-roboto font-bold text-2xl'>Get our stories delivered from us to your inbox weekly.</h2>
                    <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto'>
                        <input type='text' className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Your Email'/>
                        <button className='px-4 py-3 rounded-lg w-full bg-green-800 text-white font-bold'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CTA;
