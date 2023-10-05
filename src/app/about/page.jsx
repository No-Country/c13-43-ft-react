// Descripción: En términos de código, la página utiliza componentes como "Participants" para mostrar la información de 
// cada miembro del equipo. Estos componentes se generan dinámicamente a partir de una matriz de datos que contiene 
// detalles sobre cada miembro del equipo, como nombre, rol, enlace a LinkedIn y una imagen de perfil.

import Participants from "@/components/Participants";
import React from "react";
import ContainerGlobal from "@/containers/ContainerGlobal";

const About = () => {
  const participantes = [
    {
      nombre: "Alejandro Álvarez",
      rol: "Frontend",
      linkedin: "https://www.linkedin.com/in/alejandro-alvarez-65030a240/",
      headshot: "/Images/about/Ale.jpg"
    },
    {
      nombre: "Orlemar Abreu",
      rol: "Tester",
      linkedin: "https://www.linkedin.com/in/orlemar-abreu/",
      headshot: "/Images/about/Orle.jpg"
    },
    {
      nombre: "Pablo Murillo",
      rol: "Fullstack",
      linkedin: "https://www.linkedin.com/in/pablo-nicolas-murillo/",
      headshot: "/Images/about/Pablo.jpg"
    },
    {
      nombre: "Laura Bernal",
      rol: "Frontend",
      linkedin: "https://www.linkedin.com/in/ingeniera-laura-bernal/",
      headshot: "/Images/about/Laura.jpg"
    },
    {
      nombre: "Martín Cosimano",
      rol: "Fullstack",
      linkedin: "https://www.linkedin.com/in/martin-cosimano/",
      headshot: "/Images/about/Martin.png"
    },
    {
      nombre: "Carla Toledo",
      rol: "UX / UI",
      linkedin: "https://www.linkedin.com/in/carla-m-toledo/",
      headshot: "/Images/about/Carla.jpg"
    },
    {
      nombre: "Candelaria Gonzalez",
      rol: "Fullstack",
      linkedin: "https://www.linkedin.com/in/candelariagonzalezdev/",
      headshot: "/Images/about/Cande.jpg"
    },
  ];

  return (
    <ContainerGlobal>
      <main className="font-dmsans">
        <div className="flex flex-col items-center">
          <h1 className="text-primaryPurple font-bold text-4xl text-center items-center justify-center pb-4">
            Conoce a Nuestro Team
          </h1>
          <p className="text-lg text-center w-full md:w-7/12">Descubre quiénes somos, lo que hacemos y por qué somos apasionados por lo que hacemos. ¡Estamos ansiosos por conocerte!</p>
          <div className="flex flex-col sm:grid sm:grid-cols-8 sm:grid-rows-2 sm:gap-20 md:gap-24 gap-y-10 mt-14">
            {participantes.map((participante, index) => (
              <Participants
                key={index}
                nombre={participante.nombre}
                rol={participante.rol}
                linkedin={participante.linkedin}
                colStart={`col-start-${index + 1}`}
                headshot={participante.headshot}
              />
            ))}
          </div>
        </div>
      </main>
    </ContainerGlobal>
  );
};

export default About;
