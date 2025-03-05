import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
export default function Slide({ files, mainImg }) {
    const [img, setImg] = useState(mainImg);

    return (
        <section className="flex  flex-grow gap-4 ">
            <div className="flex gap-3 w-full sticky top-0  max-h-[90vh] widt h-max">
                <Swiper
                    direction="vertical"
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation
                    className="w-[120px] "
                >
                    {files.map((name) => (
                        <SwiperSlide
                            className="!h-max cursor-pointer"
                            onMouseEnter={() => setImg(name)}
                            onClick={() => setImg(name)}
                            key={name}
                        >
                            {name.startsWith("image") ? (
                                <Image
                                    src={"http://localhost:4000" + "/productImg/" + name}
                                    width={350}
                                    height={250}
                                    alt="product"
                                />
                            ) : (
                                <video muted loop>
                                    <source
                                        src={"http://localhost:4000" + "/productvideo/" + name}
                                    ></source>
                                </video>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="w-full max-w-[67vh]">
                    {img.startsWith("image") ? (
                        <Image
                            src={"http://localhost:4000" + "/productimg/" + img}
                            priority
                            width={350}
                            height={250}
                            alt="product"
                        />
                    ) : (
                        <video autoPlay muted loop className="w-full aspect-3/4">
                            <source
                                src={"http://localhost:4000" + "/productvideo/" + img}
                            ></source>
                        </video>
                    )}
                </div>
            </div>
        </section>
    );
}