import Participants from "@/components/Participants";
import React from "react";
import ContainerGlobal from "@/containers/ContainerGlobal";

const About = () => {
  const participantes = [
    {
      nombre: "Alejandro Álvarez",
      rol: "Frontend",
      linkedin: "https://www.linkedin.com/...",
    },
    {
      nombre: "Orlemar Abreu",
      rol: "Tester",
      linkedin: "https://www.linkedin.com/...",
    },
    {
      nombre: "Pablo Murillo",
      rol: "Fullstack",
      linkedin: "https://www.linkedin.com/...",
    },
    {
      nombre: "Laura Bernal",
      rol: "Frontend",
      linkedin: "https://www.linkedin.com/...",
    },
    {
      nombre: "Martín Cosimano",
      rol: "Fullstack",
      linkedin: "https://www.linkedin.com/...",
    },
    {
      nombre: "Carla Toledo",
      rol: "UX / UI",
      linkedin: "https://www.linkedin.com/...",
    },
    {
      nombre: "Candelaria Gonzalez",
      rol: "Fullstack",
      linkedin: "https://www.linkedin.com/in/candelariagonzalezdev/",
    },
  ];

  return (
    <ContainerGlobal>
      <main className="font-dmsans">
        <div className="flex flex-col items-center">
          <h1 className="text-primaryPurple font-bold text-4xl text-center items-center justify-center pb-4">
            Conoce a Nuestro Team
          </h1>
          <p className="text-lg text-center w-full md:w-6/12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
            gravida malesuada quam commodo id integer nam.
          </p>
          <div className="flex flex-col sm:grid sm:grid-cols-8 sm:grid-rows-2 sm:gap-20 md:gap-24 gap-y-10 mt-14">
            {participantes.map((participante, index) => (
              <Participants
                key={index}
                nombre={participante.nombre}
                rol={participante.rol}
                linkedin={participante.linkedin}
                colStart={`col-start-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </ContainerGlobal>
  );
};

export default About;
