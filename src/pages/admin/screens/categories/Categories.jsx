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

  
}

export default Categories