import React from 'react'

export default function Size({ data }) {
    return (
        <div className='flex flex-wrap justify-center gap-3'>
            {data.map(e => { 
                return (
                    <span 
                    key={e}
                        className=' text-center content-center cursor-pointer w-[60px] h-[60px] border-[3px] border-solid border-white' 
                    >
                        {e}
                    </span>
                ) 
            })}
        </div>
    )

}
