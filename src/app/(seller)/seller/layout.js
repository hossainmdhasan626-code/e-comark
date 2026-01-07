import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <div className='text-5xl font-bold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, optio!

    </div>
    <div>
      {children}
    </div>
    </>
    
  )
}

export default layout