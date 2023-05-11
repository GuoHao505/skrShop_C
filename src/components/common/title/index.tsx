import React from 'react'
import './index.scss'

export default function Title({ children }: any) {
    return (
        <div className='title'>
            {children}
        </div>
    )
}