import React from 'react'
import { useDataTable } from '../../../../hooks/useDataTable'
import { deleteComment, getAllComments } from '../../../../services/index/comments'
import DataTable from '../../components/DataTable'
import { comment } from 'postcss'

const Comments = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: commentsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
} = useDataTable({
  dataQueryFn: () => getAllComments(userState.userInfo.token, searchKeyword, currentPage),
  dataQueryKey: "comments",
  deleteDataMessage: "Comment is deleted",
  mutateDeleteFn: ({slug,token}) =>{
    return deleteComment({
      commentId: slug,
      token,
    })
  }
})

  return (
    <DataTable 
        pageTitle="Manage Comments" 
        dataListName="Comments" 
        searchInputPlaceHolder="Search Comments..."
        searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
        searchKeywordOnChangeHandler={searchKeywordHandler}
        searchKeyword={searchKeyword}
        tableHandlerTitleList={["Author", "Comment","In Respond to", "Created At",""]}
        isFetching={isFetching}
        isLoading={isLoading}
        data={commentsData?.data}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        headers={commentsData?.headers}
    >
        
    </DataTable>
  )
}

export default Comments