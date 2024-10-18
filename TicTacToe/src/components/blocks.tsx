import React from 'react'

interface blockProps {
    value?: string | null
    onClick?: () => void;
}

const Blocks : React.FC<blockProps> = (props) => {
    return (
        <div onClick={props.onClick} className='box-border h-32 w-32 p-4 border-4 border-sky-500 cursor-pointer flex justify-center items-center text-5xl font-medium text-blue-300'>{props.value}</div>
    )
}

export default Blocks
