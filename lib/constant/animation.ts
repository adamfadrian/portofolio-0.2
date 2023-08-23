// animation fade down with framer motion
export const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

// animation bounce for download cv icon
export const BOUNCING_ANIMATION_VARIANTS = {
    animate: {
      y: [-2, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 0.25,
      },
    },
  }