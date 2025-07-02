import React from 'react'

export default function DividerLine() {
    return (
        <div className=" relative flex justify-between w-full gap-2 items-center   ">
            <span>+</span>
            <span className='border-0 h-1 w-full mt-1.5'><hr /></span>
            <span>+</span>
        </div>
    )
}
