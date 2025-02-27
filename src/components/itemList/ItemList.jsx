import React from 'react'
import Item from '../item/Item'

const ItemList = ({data}) => {
  console.log(data)

  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
            <Item {...el} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
