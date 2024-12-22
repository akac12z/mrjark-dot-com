import { useState } from "react";

export interface Heading {
  slug: string;
  text: string;
  level?: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility} className="btn-toggle-toc">
        {isVisible
          ? "Ocultar Tabla de Contenidos"
          : "Mostrar Tabla de Contenidos"}
      </button>
      {isVisible && (
        <div className="toc-container">
          <ul>
            {headings.map((heading) => (
              <li key={heading.slug}>
                <a className="text-sm ml-4" href={`#${heading.slug}`}>
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
