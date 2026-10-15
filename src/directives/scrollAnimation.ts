// src/directives/smoothCrossfade.ts
import type { Directive } from "vue";

const smoothCrossfade: Directive<HTMLElement> = {
  mounted(el) {
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const fadeStart = window.innerHeight * 0.5;
      const fadeEnd = window.innerHeight * -0.5;
      const opacity = Math.min(
        Math.max((rect.top - fadeEnd) / fadeStart, 0),
        1
      );
      el.style.opacity = opacity.toString();

      var next = el.nextElementSibling as HTMLElement | null;
      if (next) {
        next.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // init
    el.onscroll = onScroll; // save handler to clean up on unmount
  },
  unmounted(el) {
    window.removeEventListener("scroll", (el as any)._onScroll);
  }
};

export default smoothCrossfade;
