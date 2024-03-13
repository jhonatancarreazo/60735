import React from 'react'
import useProductData from '../../hooks/useProductData'
import WithLoading from '../hoc/WithLoading';
import ItemList from '../itemList/ItemList';

const ItemListContainer = () => {
    const { data } = useProductData();

    console.log(data)
    const ItemWithLoading = WithLoading(ItemList)
  return (
    <div>
        <ItemWithLoading isLoading={data.length === 0} data={data} />
    </div>
  )
}

export default ItemListContainer
