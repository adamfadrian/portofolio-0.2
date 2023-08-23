import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  // Callback function that checks if the user has scrolled past the threshold
  const onScroll = useCallback(() => {
    // Compare the vertical scroll position to the threshold
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(() => {
    // Add a scroll event listener that triggers the onScroll function
    window.addEventListener("scroll", onScroll);
    // Cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}
