
"use client";
import Mainslide from "../../components/home/mainslide";
import clsx from "clsx/lite";
import { useInView } from "react-intersection-observer";
import "./home.css";



export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <>
      <Mainslide />
      <section className="max-w-[1250px] mx-auto">
        <div
          className={clsx(
            "p-3 opacity-0 text-center w-full md:w-1/2 m-auto leading-loose",
            inView && "anim-text"
          )}
          ref={ref}
        >
          <section className="mt-12"> <h4 className="p-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            dignissimos assumenda, rerum maiores quibusdam dolorem minima?
          </h4><p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              deserunt qui atque, voluptas dolor perspiciatis, blanditiis quis,
              veritatis maiores vel eligendi eaque perferendis voluptatum ipsa
              debitis odit impedit illo illum? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Autem enim odit esse rem cum, deleniti
              amet qui possimus consequuntur laudantium id et corporis ad mollitia
              blanditiis dolorum sed saepe perferendis!
            </p></section>


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
            <figure className="p-4 h-max min-w-[300px] ratio-3-4 "><img src="./gyu.jpg" alt="corperative" /></figure>
            <div className="content-center flex-grow">
              <h3 className="text-center my-5 great !text-3xl">Why do we use it?</h3>
              <p className="text-center px-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

          </div>
          <div className="flex gap-8 w-full mt-10">
            <div className="content-center">
              <h3 className="text-center my-5 great !text-3xl">What is Lorem Ipsum? </h3>
              <p className="text-center px-2 md:px-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>

        </section>
      </section>
    </>
  );
}
