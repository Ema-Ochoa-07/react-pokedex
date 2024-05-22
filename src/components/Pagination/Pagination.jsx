import React from 'react'
import './styles/Pagination.css'

const Pagination = ({ paginate, setPaginate, totalPages}) => {

  const handleNext = () => {
    if(paginate !== totalPages) setPaginate(paginate + 1)
  }

  const handlePrev = () => {
    if(paginate !== 1)  {
      setPaginate(paginate - 1)
    }
  }

  return (
    <div className='paginate__number' >

      <button className='paginate__btn' onClick={handlePrev}>
      <i className='bx bxs-chevron-left'></i>
      </button>

      <h3> {paginate} / {totalPages} </h3>

      <button className='paginate__btn' onClick={handleNext}>
      <i className='bx bxs-chevron-right'></i>
      </button>
    </div>
  )
}

export default Pagination