import React, { useState, useCallback, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'

import { usePagination } from '../../hooks'
import { Card } from '../card'
import { Pagination } from '../pagination'

import css from './table.module.css'

export const Table = ({data}) => {
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const { currentData, currentPage, maxPage, pageRange, jump, next, prev } = usePagination(data, itemsPerPage)
  const [cards, setCards] = useState(currentData())

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      )
    },
    [cards],
  )

  useEffect(() => {
    setCards(currentData())
 
    // eslint-disable-next-line
  },[itemsPerPage, currentPage, maxPage])

  const renderCard = ({id, description, formattedDuration, language, name, thumbnail, viewDetailsURL}, index) => {
    return (
      <Card
        key={id}
        index={index}
        description={description}
        duration={formattedDuration}
        language={language}
        name={name}
        thumbnail={thumbnail}
        url={viewDetailsURL}
        moveCard={moveCard}
      />
    )
  }

  const Header = () => { 
    const handleItemPerPage = (event) => { 
      setItemsPerPage(parseInt(event.target.value))
    }

    return( 
      <div>
        Results Per Page
        <select onChange={handleItemPerPage} value={itemsPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
    )
  }

  const Footer = () => { 
    return ( 
      <div className={css.footer}>
        <Pagination pages={pageRange()} nextPage={next} previousPage={prev} jump={jump} selectedPage={currentPage} />
      </div>
    )
  }

  return ( 
    <div>
      <Header />
      <DndProvider backend={HTML5Backend}>
        {cards.map((card, i) => renderCard(card, i))}
      </DndProvider>
      <Footer />
    </div>
  )
}
