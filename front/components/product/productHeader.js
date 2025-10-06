"use client"
import { useState } from 'react'
import Favorite from './favorite'

export default function ProductHeader({ data }) {
    const { mainFile, hoverFile, _id, title } = data
    const [image, setImage] = useState(mainFile)
    
    return (
        <>

            <div className="absolute  right-0 top-1">
                <Favorite id={_id} />
            </div>
            <div className=" w-full">
                <div className="overflow-hidden" onMouseEnter={() => setImage(hoverFile)} onMouseLeave={() => setImage(mainFile)}>
                    {image.fileType === "image" ?
                        <img className='aspect-3/4' src={"http://localhost:4000" + "/productimg/" + image.name} alt="product" /> 
                        : <video autoPlay muted loop className=' aspect-3/4'><source src={"http://localhost:4000" + "/productvideo/" + image.name}></source></video>}
                </div>
                <p className='p-3 text-center'>{title.en}</p>

            </div> </>

    )
}
