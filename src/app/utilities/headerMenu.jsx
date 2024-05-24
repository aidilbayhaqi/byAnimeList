import React from 'react'

const headerMenu = ({title}) => {
  return (
    <div>
      <div className="p-8">
        <h3 className='text-center text-3xl font-bold'>{title}</h3>
      </div>
    </div>
  )
}

export default headerMenu