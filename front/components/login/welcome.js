import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { letterFall } from "../../assets/animation/animatio";
import Image from "next/image";

export default function Welcome() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      const size = entry?.boundingClientRect?.height || 100;
      letterFall(size);
    }
  }, [inView]);
  return (
    <>
      <h1 className="relative text-4xl text-center overflow-hidden" ref={ref}>
        {"WELCOME".split("").map((e, i) => (
          <span key={i} className="letter">
            {e}
          </span>
        ))}
      </h1>
      <div>
        <Image
          src="/TD64.png"
          className="m-auto w-auto py-10"
          width={64}
          height={64}
          alt="i"
        />
      </div>
    </>
  );
}
