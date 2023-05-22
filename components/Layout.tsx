import React, { FC } from 'react'

interface Props {
    children: React.ReactNode
}
const Layout:FC <Props> = ({children}) => {
  return (
    <div className='bg-blue'>{children}</div>
  )
}

export default Layout