import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario haga scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Aparece después de hacer scroll 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 right-5 md:right-auto w-full max-w-[740px] mx-auto 
        flex justify-end transition-opacity duration-300  
        ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <a
        href="#top"
        className="
          w-8 h-8 sm:right-10 sm:bottom-10 rounded-full 
          border border-mr-primary-green bg-mr-primary-green bg-opacity-10 
          text-mr-primary-green hover:scale-105 flex items-center justify-center
        "
      >
        ↑
      </a>
    </div>
  );
};

export default ScrollToTopBtn;