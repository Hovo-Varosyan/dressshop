"use client";
import anime from "animejs/lib/anime.es.js";

export const letterFall = (size) => {
    anime({
      targets: ".letter",
      translateY: [-size * 2, 0],
      duration: 1000,
      delay: anime.stagger(250),
      easing: "easeInElastic(2, 2)",
    });
};
