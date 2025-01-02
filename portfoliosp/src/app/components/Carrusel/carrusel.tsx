"use client";
import { CardProject } from "../CardProject/cardProject";

export function Carrusel() {
  return (
    <div className="display:flex justify:center items:center">
      <h2 className="font-special text-4xl text-primary text-center">
        Proyectos:
      </h2>
      <CardProject />
    </div>
  );
}
