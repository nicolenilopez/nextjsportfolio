"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>C++</li>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Graphic Design</li>
      </ul>
    ),
  },
  {
    title: "estudios",
    id: "estudios",
    content: (
      <ul className="list-disc pl-2">
        <li>IES Torres I Bages</li>
        <li>Institut Obert de Catalunya</li>
      </ul>
    ),
  },
  {
    title: "Idiomas",
    id: "idiomas",
    content: (
      <ul className="list-disc pl-2">
        <li>Español - Nativo</li>
        <li>Inglés - Avanzado</li>
        <li>Catalán - Intermedio</li>
        <li>Francés - Básico</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="mt-20 text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-10">About Me</h2>
          <p className="text-base lg:text-lg">
            Soy una estudiante de Desarrollo de Aplicaciones Web con pasión por crear aplicaciones web 
            interactivas y responsivas. 
            <br></br>
            Mi capacidad de adaptación es rápida y constantemente busco mejorar mis conocimientos y habilidades. 
            Disfruto trabajar en equipo y me entusiasma colaborar con otros para desarrollar aplicaciones 
            extraordinarias. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("estudios")}
              active={tab === "estudios"}
            >
              {" "}
              Estudios{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("idiomas")}
              active={tab === "idiomas"}
            >
              {" "}
              Idiomas{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;