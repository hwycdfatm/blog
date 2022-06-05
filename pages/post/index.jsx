import React, { useRef } from 'react'
import UIPost from '../../components/post'
import Pagination from '../../components/pagination'
const Index = () => {
  const ref = useRef(0)
  return (
    <div>
      <p>rerenders: {ref.current++}</p>
      <UIPost/>
      <UIPost/>
      <UIPost/>
      <UIPost/>
      <Pagination 
        totalPage={25}
      />
    </div>
  )
}

export default React.memo(Index)