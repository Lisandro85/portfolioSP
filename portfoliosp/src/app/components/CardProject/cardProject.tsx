"use client";
import Link from "next/link";
import { project } from "../../../../data";
import Image from "next/image";
import { Project } from "../../interfaces/interfaces";
import { useState } from "react";

export function CardProject() {
  const [currentIndex, setCurrnetIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrnetIndex((prevIndex) =>
      prevIndex === 0 ? project.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrnetIndex((previndex) =>
      previndex === project.length - 1 ? 0 : previndex + 1
    );
  };

  return (
    <div className=" relative w-auto max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${project.length * 100}%`,
        }}
      >
        {project.map((item: Project) => (
          <div key={item.id} className="flex-shrink-0 w-full">
            <div className="transparent p-4 m-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-container font-special ">
                {" "}
                {item.name}
              </h2>
              <p className="text-primary font-special ">
                <strong>Tecnologías:</strong> {item.technologies}
              </p>
              <p className="text-primary font-special ">
                <strong>Caracteristícas:</strong> {item.features}
              </p>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.imgLink}
                  alt={`Vista previa del proyecto ${item.name}`}
                  width={300}
                  height={200}
                  className="rounded hover:opacity-80 transition-opacity duration-300 font-special "
                />
              </Link>
              <Link
                href={item.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-container font-special"
              >
                Ver Repositorio
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {project.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrnetIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
