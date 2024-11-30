import { useState, useEffect } from "react";

interface Props {
  headPage: string; // Ruta a la que se redirige
}

export default function TestingGoTo({ headPage }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar u ocultar el enlace según el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 left-5 z-10 md:left-auto mx-auto h-fit w-fit
        flex justify-start transition-opacity duration-300
        ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <a
        className="
          w-8 h-8 rounded-full 
          border border-mr-neon-orange bg-mr-neon-orange bg-opacity-10 
          text-mr-neon-orange hover:scale-105 flex items-center justify-center
        "
        href={headPage}
      >
        ←
      </a>
    </div>
  );
}
