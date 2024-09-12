import React from 'react'
import { useDataTable } from '../../../../hooks/useDataTable'
import { deleteComment, getAllComments } from '../../../../services/index/comments'
import DataTable from '../../components/DataTable'
import { comment } from 'postcss'
import { stables, images } from '../../../../constants'
import { Link } from 'react-router-dom'

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
        {commentsData?.data.map((comment) => (
            <tr>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/" className="relative block">
                        <img alt={comment?.user?.name} src={comment?.user?.avatar ? stables.UPLOAD_FOLDER_BASE_URL + comment?.user?.avatar : images.userImage} className="mx-auto object-cover rounded-lg w-10 aspect-square"/>
                    </a>                           
                  </div>
                  <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {comment?.user?.name}
                      </p>
                  </div>
              </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                {comment?.replyOnUser !== null &&(
                        <p className="text-gray-900 whitespace-no-wrap">
                            In reply to {" "} <Link to={`/blog/${comment?.post?.slug}/#comment-${comment?._id}`} className='text-green-500'>
                                {comment?.replyOnUser?.name}
                            </Link>
                        </p>
                    )}
                <p className="text-gray-900 whitespace-no-wrap">
                    {comment?.desc}
                </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    <Link to={`/blog/${comment?.post?.slug}`} className='text-green-500'>
                        {comment?.post?.title}
                    </Link>
                </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                    {new Date(comment.createdAt).toLocaleDateString('en-US',{
                        day: "2-digit",
                        month: '2-digit',
                        year:"2-digit",
                        hour: "numeric",
                        minute: "numeric"
                    })}
                </p>
            </td>
            
              </tr>
        ))}
    </DataTable>
  )
}

export default Comments