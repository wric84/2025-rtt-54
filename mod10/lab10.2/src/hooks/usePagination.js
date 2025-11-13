// totalItems: The total number of items to be paginated.
// itemsPerPage: The number of items to display per page (default to 10).
// initialPage: The page to start on (default to 1).
// Return Values (Object):
// currentPage: The current active page number.
// totalPages: The total number of pages calculated based on totalItems and itemsPerPage.
// startIndex: The starting index of items for the current page (0-based).
// endIndex: The ending index of items for the current page (0-based).
// itemsOnCurrentPage: The actual number of items on the current page (useful for the last page).
// setPage(pageNumber): A function to jump to a specific page number.
// nextPage(): A function to go to the next page.
// prevPage(): A function to go to the previous page.
// canNextPage: Boolean indicating if there is a next page.

import { useState } from "react"

// canPrevPage: Boolean indicating if there is a previous page.
function usePagination(totalItem, itemsPerPage=10, initialPage=1){

    //compute total pages
    const totalPages = totalItem/itemsPerPage
    //need to update initial state
    const [currentPage, setCurrentPage] = useState(initialPage)

    //startIndex
    const startIndex = (currentPage - 1) * itemsPerPage

    //endIndex
    const endIndex = (startIndex + itemsPerPage -1)

    //itemsOnCurrentPage
    const itemsOnCurrentPage = endIndex - startIndex + 1

    //setPage
    function setPage(pages){
        setCurrentPage(pages)
    }

    //canPrevPage
    const canPrevPage = currentPage > 1
    //canNextPage
    const canNextPage = currentPage<totalPages

    //nextPage
    function nextPage(){
        if(canNextPage){
            setCurrentPage(currentPage + 1)
        }
    }
    //prevPage
    function prevPage(){
        if(canPrevPage){
            setCurrentPage(currentPage - 1)
        }
    }
    return{
        canPrevPage,
        canNextPage, 
        prevPage,
        nextPage,
        setPage,
        itemsOnCurrentPage,
        endIndex,
        startIndex,
        totalPages, 
        currentPage
    }
}

export default usePagination