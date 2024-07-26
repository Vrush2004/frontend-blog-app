import React from 'react';
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import SuggestedPosts from './container/SuggestedPosts';
import CommentsContainer from '../../components/comments/CommentsContainer';

const breadCrumbData = [
    {name: "Home", link:'/'},
    {name: "Blog", link:'/blog'},
    {name: "Article Title", link:'/blog/1'}
];

const postData = [
    {
        _id : '1',
        image: images.Post1Image,
        title: 'Help children get better education',
        createdAt:'2023-01-28T15:35:53.607+0000'
    },
    {
        _id : '2',
        image: images.Post1Image,
        title: 'Help children get better education',
        createdAt:'2023-01-28T15:35:53.607+0000'
    },
    {
        _id : '3',
        image: images.Post1Image,
        title: 'Help children get better education',
        createdAt:'2023-01-28T15:35:53.607+0000'
    }
];

const tagsData = [
    'Medical',
    'Lifestyle',
    'Learn',
    'Food',
    'Diet',
    'Education',
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbData}/>
                <img className='rounded-xl w-full' src={images.Post1Image} alt='Mobile' />
                <Link to='/blog?category=selectedCategory' className='text-dark-light text-sm font-roboto inline-block mt-4 md:text-base'>
                    EDUCATION
                </Link>
                <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>
                    Help children get better education
                </h1>
                <div className='mt-4 text-dark-soft'>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nostrum doloribus ea error natus incidunt esse officia, debitis, excepturi, atque perspiciatis ad eligendi consectetur veniam vitae consequatur dolore? Aliquid, nemo!Dolores quas maiores voluptatibus dicta odio perferendis debitis similique earum ab repellendus, consequuntur perspiciatis aliquam voluptatem natus excepturi illo eligendi? Sequi velit sint aperiam consequuntur, eveniet incidunt quisquam exercitationem ut!  
                    </p>
                </div>
                <CommentsContainer className='mt-10' logginedUserId='a'/>
            </article> 
            <SuggestedPosts 
                header='Latest Article' 
                posts={postData} 
                tags={tagsData}
                className='mt-8 lg:mt-0 lg:max-w-xs'
            />
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage