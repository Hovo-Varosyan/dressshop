"use client"
import { useState } from 'react'
import Favorite from './favorite'

export default function ProductHeader({ data }) {
    const { mainImg, hoverImg, _id, title } = data
    const [image, setImage] = useState(mainImg)
    return (
        <>

            <div className="absolute  right-0 top-1">
                <Favorite id={_id} />
            </div>
            <div className=" w-full">
                <div className="overflow-hidden" onMouseEnter={() => setImage(hoverImg)} onMouseLeave={() => setImage(mainImg)}>
                    {image.startsWith("image") ?
                        <img className='aspect-3/4' src={"http://localhost:4000" + "/productimg/" + image} alt="product" /> : <video autoPlay muted loop className=' aspect-3/4'><source src={"http://localhost:4000" + "/productvideo/" + image}></source></video>}
                </div>
                <p className='p-3 text-center'>{title}</p>

            </div> </>

    )
}
