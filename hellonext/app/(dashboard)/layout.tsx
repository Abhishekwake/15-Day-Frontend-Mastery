import React from 'react'

function layout({children } : { children: React.ReactNode }) {
  return (
    <div>
        <p className='text-3xl'>DASHBAOR</p>
      {children}
    </div>
  )
}

export default layout
