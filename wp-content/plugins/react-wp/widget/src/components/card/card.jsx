import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import css from './card.module.css'

export const Card = ({ id, index, description, duration, language, name, thumbnail, url, moveCard }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  
  drag(drop(ref))
  
  return (
    <div className={css.container} style={{ opacity }} ref={preview}>
      <a href={url}>
        <img src={thumbnail} alt="course" className={css.thumbnail}/> 
        <div>{duration}</div>
        <div>{language}</div>
      </a>
      <div className={css.info}>
        <a href={url}>
          <h5 className={css.name}>
            {name}
          </h5> 
        </a>
        <p>
          {description}
        </p>
      </div>
      <div ref={ref} className={css.drag}>
        <div className={css.hamburgerRow}></div>
        <div className={css.hamburgerRow}></div>
        <div className={css.hamburgerRow}></div>
      </div>
    </div>
  )
}
