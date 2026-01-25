'use client';
import { CalendarRange, Github, Globe, Mail, Star } from 'lucide-react';
import Image from 'next/image';
import LightPanel from './components/LightPanel';
import { RefObject, useEffect, useRef, useState } from 'react';
import animHover from './utils/animHover';
import Toast from './components/Toast';

export default function Home() {
  const divRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
  useEffect(() => {
    divRef.current.classList.remove('opacity-0', '-translate-y-32');
    divRef.current.classList.add('opacity-100');
  });

  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('cjpcole@addu.edu.ph');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <div
      ref={divRef}
      className="flex flex-1 not-lg:flex-col mt-14 mx-16 max-w-3/4 self-center opacity-0 -translate-y-32 duration-1000"
    >
      <div className="flex-3 mr-8">
        <LightPanel className="flex-1 flex flex-col py-16 items-center p-8">
          <Image
            src="/avatars/me.png"
            alt="Photograph of Ninja"
            width={0}
            height={0}
            sizes="30vw"
            loading="eager"
            className={`w-3/4 h-auto rounded-xl ${animHover}`}
          />
          <div className="text-center mt-4">
            <h1 className="text-3xl font-semibold">cyril john p. cole</h1>
            <p className="text-zinc-500 font-bold">davao city, philippines</p>
          </div>
          <div className="mt-8 flex flex-row justify-between w-1/2">
            <button className="relative" onClick={copyEmail}>
              <Mail />
              {showToast && <Toast message="Copied to clipboard!" />}
            </button>

            <a target="_blank" href="https://github.com/adducjpcole">
              <Github />
            </a>
          </div>
        </LightPanel>
      </div>

      <div className="flex-4">
        <div className="md:w-3/4 mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold">DEVELOPER</h1>
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-700">
            3D ARTIST
          </h1>

          <div className="md:w-full w-3/4">
            <p className="text-justify">
              Experienced in Java, C#, React, Next.js, SolidJS, Astro, Lua, and
              Substance Painter. Also, a hobbyist 3D modeler and texture artist,
              inspired by historical uniformology
            </p>

            <div className="mt-8 grid grid-cols-3">
              <StatsHighlight highlight="+20" subtext="YEARS OF AGE" />
              <StatsHighlight highlight="+4" subtext="PROJECTS COMPLETED" />
              <StatsHighlight highlight="+3" subtext="SEMESTERS COMPLETED" />
            </div>
          </div>
        </div>

        <LightPanel className="border-none transition-all pb-4">
          <WorkSection workTitle="BABBAGE LITE">
            <div className="flex justify-around m-8">
              <Image
                src="/babbage-lite.png"
                width={0}
                height={0}
                sizes={'100vw'}
                className={`w-3/4 rounded-xl ${animHover}`}
                alt={''}
              />
            </div>
            <p>
              Babbage Lite is an Analytical Engine interpreter based on my
              professor&apos;s simplified lesson on Charles Babbage&apos;s
              Analytical Engine.
            </p>
            <div className="flex flex-row justify-around mt-4">
              <a
                target="_blank"
                href="https://github.com/cyjico/babbage-lite/tree/master"
                className={animHover}
              >
                <Github />
              </a>
              <a
                target="_blank"
                href="https://cyjico.github.io/babbage-lite/"
                className={animHover}
              >
                <Globe />
              </a>
            </div>
          </WorkSection>
          <hr className="my-4 border-zinc-400" />

          <WorkSection
            workTitle="HISTORIA SOCIETAS"
            workSubtitle="3D Model and Texture Artist"
            dateStart={'2020'}
            dateEnd={'2024'}
          >
            <div className="flex justify-around m-8">
              <Image
                src="/roblox-ugc-1.png"
                width={0}
                height={0}
                sizes={'100vw'}
                className={`w-1/3 rounded-xl ${animHover}`}
                alt={''}
              />
              <Image
                src="/roblox-ugc-2.png"
                width={0}
                height={0}
                sizes={'100vw'}
                className={`w-1/3 rounded-xl ${animHover}`}
                alt={''}
              />
            </div>
            <p>
              Initial 3D modeller and texture artist for a Roblox UGC group
              &quot;Historia Societas&quot; with monthly consistent output.
            </p>
          </WorkSection>
          <hr className="my-4 border-zinc-400" />

          <WorkSection workTitle="VIRTUAL GRAPH PAPER">
            <div className="flex justify-around m-8">
              <Image
                src="/virtual-graph-paper.png"
                width={0}
                height={0}
                sizes={'100vw'}
                className={`w-3/4 rounded-xl ${animHover}`}
                alt={''}
              />
            </div>
            <p>
              Virtual graph paper made with plain JavaScript and the Canvas API.
            </p>
          </WorkSection>
        </LightPanel>
      </div>
    </div>
  );
}

function StatsHighlight({
  highlight,
  subtext,
}: {
  highlight: string;
  subtext: string;
}) {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl font-bold">{highlight}</h1>
      <p className="text-xs md:text-base text-zinc-400">{subtext}</p>
    </div>
  );
}

function WorkSection({
  workTitle,
  workSubtitle,
  dateStart,
  dateEnd,
  children,
}: {
  workTitle: string;
  workSubtitle?: string;
  dateStart?: string;
  dateEnd?: string;
  className?: string;
} & React.PropsWithChildren) {
  return (
    <>
      <h2 className="flex flex-row font-bold text-2xl">
        <Star className="mx-2 h-8" />
        {workTitle}
      </h2>

      <div className="ml-10">
        {workSubtitle ? <h2 className="text-base">{workSubtitle}</h2> : <></>}
        {dateStart || dateEnd ? (
          <h2 className="text-sm flex flex-row">
            <CalendarRange className="h-4" />
            {dateStart} - {dateEnd}
          </h2>
        ) : (
          <></>
        )}
      </div>

      <section>{children}</section>
    </>
  );
}
