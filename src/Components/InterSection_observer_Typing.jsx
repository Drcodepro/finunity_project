import { useEffect, useRef } from 'react';

const useIntersectionObserver_typing = (options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('typing');
        }
        else{
            entry.target.classList.remove('typing');
        }
      });
    }, [options]);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
};

export default useIntersectionObserver_typing;