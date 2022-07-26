import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import { Cover } from '../Cover'

const Paginate = ({ items }) => {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
        <>
            <div className='films__container'>{
                (currentItems.length)
                  ? currentItems.map(({ images, title, description }, i) => {
                    return (
                        <Cover
                            key={i}
                            image={images['Poster Art'].url}
                            title={title}
                            description={description}
                        />
                    )
                  })
                  : <section className='films__empty'>No results found</section>
            }</div>
            <nav className='paginate-container'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                    containerClassName='paginate'
                    pageLinkClassName='paginate__num'
                    previousLinkClassName='paginate__arrow'
                    activeLinkClassName='paginate__active'
                    nextLinkClassName='paginate__arrow'
                />
            </nav>
        </>
  )
}

export default Paginate
