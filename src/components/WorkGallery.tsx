"use client";

import Image from "next/image";
import { useState } from "react";

export function WorkGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  const many = images.length > 1;

  return (
    <div className="lg:col-span-6">
      <div className="frame relative aspect-[4/5]">
        {current ? (
          <Image
            src={current}
            alt={many ? `${title}, view ${active + 1}` : title}
            fill
            priority
            sizes="55vw"
            className="object-cover"
          />
        ) : null}
      </div>
      {many ? (
        <ul className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {images.map((src, index) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`${title} image ${index + 1}`}
                aria-current={index === active}
                className={`frame relative block aspect-square w-full ${
                  index === active ? "ring-1 ring-accent" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
