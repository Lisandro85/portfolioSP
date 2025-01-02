import Image from "next/image";
import { Globe } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-between p-4 h-20">
      <Image
        className="mt-20 rounded-full ml-5  border-4 border-container shadow-orange-500"
        src="/assets/fotoPerfil.jpg"
        alt="Foto de perfil"
        height={150}
        width={150}
      />

      <h1 className="font-Rubik text-5xl text-primary mt-20">
        {"<Lisandro Bedotti/>"}
      </h1>
      <div className="mt-10">
        <Globe size={50} color="#8b5cf6" />
      </div>
    </div>
  );
}
