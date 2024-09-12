import React from 'react'
import { useDataTable } from '../../../../hooks/useDataTable'
import { deleteCategory, getAllCategories } from '../../../../services/index/postCategories'
import DataTable from '../../components/DataTable'
import { Link } from 'react-router-dom'

const Categories = () => {
    const {
        userState,
        currentPage,
        searchKeyword,
        data: categoriesData,
        isLoading,
        isFetching,
        isLoadingDeleteData,
        queryClient,
        searchKeywordHandler,
        submitSearchKeywordHandler,
        deleteDataHandler,
        setCurrentPage,
    } = useDataTable({
      dataQueryFn: () => getAllCategories(searchKeyword, currentPage),
      dataQueryKey: "categories",
      deleteDataMessage: "Category is deleted",
      mutateDeleteFn: ({slug,token}) =>{
        return deleteCategory({
          slug,
          token,
        })
      }
    })

  return (
    <DataTable
    pageTitle="" 
    dataListName="Categories" 
    searchInputPlaceHolder="Category title..."
    searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
    searchKeywordOnChangeHandler={searchKeywordHandler}
    searchKeyword={searchKeyword}
    tableHandlerTitleList={["Title", "Created At", ""]}
    isLoading={isLoading}
    isFetching={isFetching}
    data={categoriesData?.data}
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    headers={categoriesData?.headers}
    userState={userState}
  >
    {categoriesData?.data.map((category) => (
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <div className="flex items-center">
                <p className="text-gray-900 whitespace-no-wrap">
                  {category.title}
                </p>
          </div>
        </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {new Date(category.createdAt).toLocaleDateString("en-US",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                        )}
                    </p>
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                    <button 
                        onClick={() => {
                            deleteDataHandler({slug: category?._id, token: userState.userInfo.token})
                        }}
                        disabled={isLoadingDeleteData}
                        type='button' 
                        className='text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed'
                    >
                      Delete
                    </button>
                    <Link 
                        to={`/admin/categories/manage/edit/${category?._id}`} 
                        className="text-green-600 hover:text-green-900"
                    >
                      Edit
                    </Link>
                </td>
          </tr>                     
        ))}                        
  </DataTable>
  )
}

export default Categories