import React from 'react';
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs';

const breadCrumbData = [
    {name: "Home", link:'/'},
    {name: "Blog", link:'/blog'},
    {name: "Article Title", link:'/blog/1'}
]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5'>
            <article className='flex-1'>
                <BreadCrumbs data={breadCrumbData}/>
            </article>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage