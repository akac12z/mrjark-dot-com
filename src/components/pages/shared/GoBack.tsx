export default function GoBack() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      alert("No hay historial de navegación anterior.");
    }
  };

  return (
    <button
      className="px-1 py-0.5 text-xs font-museo_moderno tracking-widest border border-mr-neon-orange text-mr-text-content rounded opacity-50 hover:opacity-100"
      onClick={goBack}
    >
      Volver
    </button>
  );
}
