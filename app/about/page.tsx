'use client';
import { CodeXml, Cog, Wrench } from 'lucide-react';
import { RefObject, useEffect, useRef } from 'react';

export default function About() {
  const divRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
  useEffect(() => {
    divRef.current.classList.remove('opacity-0', '-translate-y-32');
    divRef.current.classList.add('opacity-100');
  });

  return (
    <div
      ref={divRef}
      className="mt-14 mx-16 max-w-3/4 self-center opacity-0 -translate-y-32 duration-1000 transition-all"
    >
      <h1 className="text-5xl font-extrabold flex">ABOUT ME</h1>

      <div className="ml-auto max-w-1/2">
        <p className="text-lg text-zinc-300 text-justify">
          I&apos;m Cyril John Cole, a Computer Science student interested in
          software development.
        </p>

        <p className="text-lg text-zinc-300 text-justify">
          I started programming early in my 6th Grade and later explored 3D
          modeling and texture art through my interest in historical uniforms,
          particularly 1914 to 1918 British uniformology. I enjoy working across
          both technical and creative tools and learning new technologies
          through hands-on experimentation.
        </p>
      </div>

      <div className='flex flex-col gap-1'>
        <h2 className="text-2xl font-">tech stack</h2>
        <p>
          <CodeXml className="inline" /> Java, C++, JavaScript, Lua
        </p>
        <p>
          <Cog className="inline" /> React, Next.js, SolidJS, Astro
        </p>
        <p>
          <Wrench className="inline" /> Git, Blender, Substance 3D Painter
        </p>
      </div>
    </div>
  );
}
