import React from 'react'

function Header(props) {
    return (
        <h1 className='text-black text-2xl text-center p-2'>{props.title}</h1>
    )
}

export default Header
