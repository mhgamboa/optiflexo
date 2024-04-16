import React from "react";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

export default function Features({ lang }: { lang?: string }) {
  return (
    <section id="aprender">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Grabados Anilox</h2>

          {/* <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam
            doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <FeatureCard
            imgSrc="/cells/30-60.png"
            imgAlt="Hexagon Cell Shape"
            headingText1="OPTI 60°/30°"
            headingText2={lang === "en" ? "Controlled Channel" : "Optimal Hex-Cell de Grabado"}
            description={
              lang === "en"
                ? "Created with the newest high definition fiber optics technology for all flexography work."
                : "Creado con las màs nueva tecnologìa làser de alta definiciòn de fibra òptica para todos los trabajos de flexografìa."
            }
          />
          <FeatureCard
            imgSrc="/cells/optiX.png"
            imgAlt="Hexagon Cell Shape"
            headingText1="OPTI X"
            headingText2={lang === "en" ? "Reverse Put Recorded" : "Reverse Pon Grabados"}
            description={
              lang === "en"
                ? "Ideal for large volume jobs with heavier layers for highly viscous inks, coatings and adhesives."
                : "Ideal para trabajos de gran volumen con capas màs pesadas para tintas, revistimientos y adhesivos altamente viscosos."
            }
          />
          <FeatureCard
            imgSrc="/cells/optiE.png"
            imgAlt="Rectangle Cell Shape"
            headingText1="OPTI E"
            headingText2={lang === "en" ? "Elongated Cells Engravings" : "Grabados de Cèlulas Alargadas"}
            description={
              lang === "en" ? "Greater ink transfer with better slid coverage." : "Mayor transferencia de tinta con una mejor cobertura do slidos."
            }
          />
          <FeatureCard
            imgSrc="/cells/optiQ.png"
            imgAlt="Diamond Cell Shape"
            headingText1="OPTI Q"
            headingText2={lang === "en" ? "Diamond Engraved" : "Grabados en Forma Diamante"}
            description={
              lang === "en"
                ? "Designed to replace mechanical engravings. Ideal for converting chrome rollers to Anilox engraved with ceramic laser."
                : "Diseñados para remplazar los grabados mecànicos. Ideal para la conversiòn de rodillos de cromo a Anilox grabado con làser de ceràmica."
            }
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8">
          <FeatureCard
            imgSrc="/cells/optiZ.png"
            imgAlt="Curve Cell Shape"
            headingText1={lang === "en" ? "OPTI Z Recorded" : "OPTI Z Grabado"}
            headingText2={lang === "en" ? "Controlled Channel" : "de Canal Controlado"}
            description={
              lang === "en"
                ? "Proven performance with high and tactile finish coatings. Ideal for medium to high BCM jobs with inks, coatings, varnishes or adhesives. Better ink release than standard engravings to eliminate concealment effects."
                : "Liberaciòn òptima de la tinta. Ideal para impresiòn combinada (pantallas, sòlidos, texto fino y medios tonos). Mayores capacidades de LPI y BCM. Adecuado para la opacidad del blanco en sòlido, asì como texto fino y pantallas. Los mejores resultados de conductividad para impresiòn electrònica."
            }
          />
          <FeatureCard
            imgSrc="/cells/optiT.png"
            imgAlt="Line Cell Shape"
            headingText1="OPTI T"
            headingText2={lang === "en" ? "Trihelical Engravings" : "Grabados Trihelical"}
            description={
              lang === "en"
                ? "Proven performance with high and tactile finish coatings. Ideal for medium to high BCM jobs with inks, coatings, varnishes or adhesives. Better ink release than standard engravings to eliminate concealment effects."
                : "Rendimiento comprobado con recubrimientos de acabados táctiles y elevados. Ideal para trabajos de BCM de media a alta con tintas, recubrimientos, barnices o adhesivos. Mejor liberación de tinta que los grabados estándar para eliminar los efectos de ocultación."
            }
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contactar"
            className="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            {lang === "en" ? "Contact Us" : "Contactarnos"}
          </a>
        </div>
      </div>
    </section>
  );
}
