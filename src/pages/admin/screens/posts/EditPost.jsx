import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getSinglePosts } from '../../../../services/index/posts'
import { Link, useParams } from 'react-router-dom';
import ArticleDetailSkeleton from '../../../articleDetail/components/ArticleDetailSkeleton';
import ErrorMessage from '../../../../components/ErrorMessage';
import parseJsonToHtml from '../../../../utils/parsejsonToHtml';

const EditPost = () => {
    const {slug} = useParams();
    const [initialPhoto, setInitialPhoto] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [body, setBody] = useState(null)
    const {data, isLoading, isError} = useQuery({
        queryFn: () => getSinglePosts({slug}),
        queryKey: ['blog', slug],
    }) 

    useEffect(() => {
        if(!isLoading && !isError){
            setInitialPhoto(data?.photo)
            setBody(parseJsonToHtml(data?.body))
        }
    }, [data, isError, isLoading])

  return (
    <div>
         {isLoading ? (
            <ArticleDetailSkeleton/>
            ) : (
            isError ? (
                <ErrorMessage message="Couldn't fetch the post details"/>
            ) : (
                <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                <article className='flex-1'>
                    <div className='mt-4 flex gap-2'>
                        {data?.categories.map((category) => (
                            <Link 
                                to={`/blog?category=${category.name}`}
                                className='text-dark-light text-sm font-roboto inline-block md:text-base'
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                    
                    <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>
                        {data?.title}
                    </h1>
                    <div className='mt-4 prose prose-sm sm:prose-base'>
                        {body}
                    </div>
                </article> 
            </section>
            )
        )}   
    </div>
  )
}

export default EditPost