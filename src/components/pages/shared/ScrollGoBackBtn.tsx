import { useState, useEffect } from "react";

export default function TestingGoBack() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar u ocultar el botón según el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para ir atrás
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      alert("No hay historial de navegación anterior.");
    }
  };

  return (
    <div
      className={`
        fixed bottom-6 left-5 z-10 md:left-auto mx-auto h-fit w-fit
        flex justify-start transition-opacity duration-300
        ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <button
        className="
          w-8 h-8 rounded-full 
          border border-mr-neon-orange bg-mr-neon-orange bg-opacity-10 
          text-mr-neon-orange hover:scale-105 flex items-center justify-center
        "
        onClick={goBack}
      >
        ←
      </button>
    </div>
  );
}
