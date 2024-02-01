import React, { useEffect, useRef } from 'react';

interface InfiniteScrollTriggerProps {
  onVisible: () => void;
}

const InfiniteScrollTrigger: React.FC<InfiniteScrollTriggerProps> = ({ onVisible }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      { threshold: 1.0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onVisible]);

  return <div ref={ref} />;
};

export default InfiniteScrollTrigger;