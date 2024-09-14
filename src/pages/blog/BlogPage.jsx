import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../../services/index/posts'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import ArticleCardSkeleton from '../../components/ArticleCardSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import ArticleCard from '../../components/ArticleCard'
import MainLayout from '../../components/MainLayout'
import Pagination from '../../components/Pagination'

let isFirstRun = true;

const BlogPage = () => {
const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading, isError, refetch} = useQuery({
        queryFn: () => getAllPosts("", currentPage, 3),
        queryKey: ["posts"],
        OnError: (error) => {
          toast.error(error.message)
          console.log(error)
        }
      })
      
      useEffect(() =>{
        if(isFirstRun){
            isFirstRun = false
            return
        }
        window.scrollTo(0,0)
        refetch()
      }, [currentPage, refetch])

        return (
            <MainLayout>
                <section className='flex flex-col container mx-auto px-5 py-10'>
                    <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
                    {isLoading ? (
                        [...Array(3)].map((item,index) => (
                            <ArticleCardSkeleton key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
                        ))
                    ) :
                    isError ? ( 
                        <ErrorMessage message="Couldn't fetch the posts data" /> 
                    ) : (
                        data?.data.map((post) => (
                        <ArticleCard 
                            key={post._id}
                            post={post}
                            className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
                        ))
                    )}
                        
                    </div>
                    {!isLoading && (
                        <Pagination
                            onPageChange={(page) => setCurrentPage(page)} 
                            currentPage={currentPage}
                            totalPageCount={JSON.parse(data?.headers?.['x-totalpagecount'])}
                        />
                    )}
                </section>
            </MainLayout>
          
        )
}

export default BlogPage