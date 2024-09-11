import React from 'react'
import { deletePost, getAllPosts } from '../../../../services/index/posts'
import { images, stables } from '../../../../constants'
import Pagination from '../../../../components/Pagination'
import { Link } from 'react-router-dom'
import { useDataTable } from '../../../../hooks/useDataTable'
import DataTable from '../../components/DataTable'

const ManagePost = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: postsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
} = useDataTable({
  dataQueryFn: () => getAllPosts(searchKeyword, currentPage),
  dataQueryKey: "posts",
  deleteDataMessage: "Post is deleted",
  mutateDeleteFn: ({slug,token}) =>{
    return deletePost({
      slug,
      token,
    })
  }
})
  return (
    <DataTable 
      pageTitle="Manage Posts" 
      dataListName="Posts" 
      searchInputPlaceHolder="Post title..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
    />
  )
}

export default ManagePost