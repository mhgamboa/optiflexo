import React from "react";
import Image from "next/image";

type Props = {
  imgSrc: string;
  imgAlt: string;
  headingText1: string;
  headingText2: string;
  description: string;
};

export default function FeatureCard({
  imgSrc,
  imgAlt,
  headingText1,
  headingText2,
  description,
}: Props) {
  return (
    <div className="flex rounded-xl border border-gray-800 space-x-4 p-8 shadow-xl transition">
      <div className="relative w-36 h-1/2 sm:h-full my-auto">
        <Image src={imgSrc} className="object-cover rounded-xl" fill={true} alt={imgAlt} />
      </div>
      <div className="flex flex-col">
        <h2 className="mt-4 text-xl font-bold">
          <span className="text-rose-600">{headingText1}</span> {headingText2}:
        </h2>
        <p className="mt-1 text-sm">{description}</p>
      </div>
    </div>
  );
}
