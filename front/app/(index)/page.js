
"use client";
import Mainslide from "../../components/home/mainslide";
import clsx from "clsx/lite";
import { useInView } from "react-intersection-observer";
import "./home.css";
import api from "../../middleware/api";
import { useState, useEffect } from "react"
import DOMPurify from "dompurify";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const [data, setData] = useState([])

  useEffect(() => {
    api.get("/").then((res) => {
      setData(res.data)
      console.log(res.data)
    }
    ).catch(err => console.log(err))
  }, [])
  console.log(data)
  return (
    <>{data?.about ? <>
      <Mainslide data={data.slide} />
      <section className="max-w-[1250px] mx-auto">
        <div
          className={clsx(
            "p-3 opacity-0 text-center w-full md:w-1/2 m-auto leading-loose",
            inView && "anim-text"
          )}
          ref={ref}
        >
          <section className="mt-12"> <h4 className="p-2">
            {data?.about?.textOne.title.en}
          </h4><div dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.about?.textOne.desc.en),
          }}>
            </div>
          </section>


        </div>
        <section>
          <h2 className="text-center  my-16 py-10 ratio-3/4  great !text-4xl">Vestimentum est pulchritudo</h2>
          <div className="gap-5 sm:gap-12 md:gap-16 lg:gap-32 home-vintage my-3 px-4">
            <figure className="p-4">< img src="./cvbcv.jpg" alt="vintage" /></figure>
            <figure className="p-4"><img src="./dfg.jpg" alt="vintage" /></figure>
            <figure className="p-4"><img src="./cvbcv.jpg" alt="vintage" /></figure>
            <figure className="p-4"><img src="./sds.jpg" alt="vintage" /></figure>

          </div>
        </section>

        <section className="about px-4 ">
          <h2 className="great my-16 py-10 text-center !text-4xl">About</h2>
          <div className="flex flex-wrap-reverse justify-center lg:flex-nowrap  gap-8 w-full items-center">
            <figure className="p-4 h-max min-w-[300px] ratio-3-4 "><img src={"http://localhost:4000/images/"+data.about.textTwo.img.name} alt="corperative" /></figure>
            <div className="content-center flex-grow">
              <h3 className="text-center my-5 great !text-3xl">{data?.about?.textTwo.title.en}</h3>
             <div                 dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.about?.textTwo.desc.en),
                }}></div>
            </div>

          </div>
          <div className="flex gap-8 w-full mt-10">
            <div className="content-center">
              <h3 className="text-center my-5 great !text-3xl">{data?.about?.textThre.title.en} </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.about?.textThre.desc.en),
                }}
              ></div>            </div>
          </div>

        </section>
      </section>
    </> :<div><CircularProgress size="30px" /></div> }</>
  );
}
