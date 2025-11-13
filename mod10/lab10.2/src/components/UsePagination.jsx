import {arr} from '../data/numbers'
import usePagination from '../hooks/usePagination'

function UsePaginationDemo(){

    const {
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
    } = usePagination(arr.length)
    
    console.log(itemsOnCurrentPage);
    const whatPageAreWeOn = arr.slice(startIndex, endIndex +1)

    return(
        <>
        <h1>UsePaginationDemo</h1>
        <h2>Currently viewing page: {currentPage} of {totalPages}</h2>
        {whatPageAreWeOn.map(item => (
            <li>{item}</li>
        ))}
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
        {/* {totalPages.map(page => (
            <button>{page}</button>
        ))} */}
        </>
    )
}

export default UsePaginationDemo