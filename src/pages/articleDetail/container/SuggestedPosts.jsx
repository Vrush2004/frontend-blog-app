import React from 'react'

const SuggestedPosts = ({className, header, posts = []}) => {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
        <h2 className='font-roboto font-medium text-dark-hard'>{header}</h2>
        <div className='grid gap-y-5 mt-5'>
            {posts.map((item) => (
                <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                    <img className='aspect-square object-cover rounded-lg w-1/5' src={item.image} alt='mobile'/>
                    <div className='text-sm font-roboto text-dark-hard font-medium'>
                        <h3>{item.title}</h3>
                        <span className='text-xs opacity-60'>
                            {new Date(item.createdAt).toLocaleDateString('en-US',{
                                day: 'numeric',
                                month:'short',
                                year:'numeric',
                            })}
                        </span>
                    </div>  
                </div>
            ))}
        </div>
        <h2 className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>Tags</h2>
    </div>
  )
}

export default SuggestedPosts