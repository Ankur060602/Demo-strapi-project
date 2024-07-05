import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='px-4'>
            <div className='flex items-center justify-center bg-white mx-auto rounded-lg my-4 p-4'>
                <div className='text-2xl font-medium'>{children}</div>
            </div>
        </div>
    )
}

export default Layout