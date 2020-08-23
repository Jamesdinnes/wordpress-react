import React from 'react'

export const Pagination = ({pages, selectedPage: selectedPageProp , nextPage, previousPage, jump}) => (
   <div>
    <button onClick={() => previousPage()}> prev </button> 
    {pages.map((pageNumber) => ( 
      <button 
        style={selectedPageProp === pageNumber ? {color: 'blue'} : {color: 'black'} } key={`pageNumber${pageNumber}`} 
        onClick={() => jump(pageNumber)}
        > 
        {pageNumber}
        </button>
      ))} 
    <button onClick={() => nextPage()}> next </button> 
  </div> 
)