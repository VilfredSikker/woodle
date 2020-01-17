import React, { ReactNode } from 'react'
import Navbar from './navbar'

interface Props {
    children: ReactNode
}

const Layout = (props:Props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout