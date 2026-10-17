import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  direction = "up", // up, left, right, scale
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const getDirectionStyles = () => {
    if (direction === "left") {
      return isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-8";
    }
    if (direction === "right") {
      return isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-8";
    }
    if (direction === "scale") {
      return isVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95";
    }
    // default: "up"
    return isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${getDirectionStyles()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
