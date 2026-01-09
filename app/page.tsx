'use client';
import { CalendarRange, Github, Globe, House, Mail, Star } from "lucide-react";
import Image from "next/image";
import LightPanel from "./components/LightPanel";
import { RefObject, useEffect, useRef } from "react";
import Tooltip from "./components/util/Tooltip";
import animHover from "./components/util/animRotate";

export default function Home() {
  const divRef = (useRef(null) as unknown as RefObject<HTMLDivElement>);
  useEffect(() => {
    divRef.current.classList.remove('opacity-0', '-mt-56');
    divRef.current.classList.add('opacity-100', 'mt-8');
  });

  return (
    <div ref={divRef} className="flex flex-1 not-lg:flex-col opacity-0 -mt-56 mx-16 duration-1000 max-w-3/4 self-center">
      <div className="flex-3 mr-8">
        <LightPanel className="flex-1 flex flex-col py-16 items-center p-8">
          <Image
            src="/avatars/me.png"
            alt="Photograph of Ninja"
            width={0}
            height={0}
            sizes="100vw"
            className={`w-3/4 h-auto rounded-2xl ${animHover}`}
          />
          <h1 className="text-3xl font-bold text-center mt-4">
            CYRIL JOHN P. COLE
          </h1>
          <div className="block mt-12">
            <p className="mb-4 font-bold text-zinc-500">
              An aspiring student wishing to upskill.
            </p>
            <div className="flex flex-row justify-between">
              <Tooltip tip={
                <p className="w-48 text-center bg-background text-foreground p-2 rounded-md">
                  Davao City, Philippines
                </p>
              }
                className="shadow-2xl shadow-black"
              >
                <House />
              </Tooltip>
              <Tooltip tip={
                <p className="w-44 text-center bg-background text-foreground p-2 rounded-md">
                  cjpcole@addu.edu.ph
                </p>
              }
                className="shadow-2xl shadow-black"
              >
                <Mail />
              </Tooltip>
              <a target="_blank" href="https://github.com/adducjpcole" className={animHover}>
                <Github />
              </a>
            </div>
          </div>
        </LightPanel>
      </div>

      <div className="flex-4">
        <div className="md:w-3/4">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            COLLEGE
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-700">
            STUDENT
          </h1>

          <div className="md:w-full w-3/4">
            <p className="text-justify">
              Passionate about learning and a software hobbyist. 3D Modeller, Programmer, and Texture Artist
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
              <Image src="/babbage-lite.png" width={0} height={0} sizes={"100vw"} className={`w-3/4 rounded-3xl ${animHover}`} alt={""} />
            </div>
            <p>
              Babbage Lite is an Analytical Engine interpreter based on my professor's simplified lesson on Charles Babbage's Analytical Engine.
            </p>
            <div className="flex flex-row justify-around mt-4">
              <a target="_blank" href="https://github.com/cyjico/babbage-lite/tree/master" className={animHover}>
                <Github />
              </a>
              <a target="_blank" href="https://github.com/cyjico/babbage-lite/tree/master" className={animHover}>
                <Globe />
              </a>
            </div>
          </WorkSection>
          <hr className="my-4 border-zinc-400" />

          <WorkSection workTitle="HISTORIA SOCIETAS" workSubtitle="3D Model and Texture Artist" dateStart={"2020"} dateEnd={"2024"}>
            <div className="flex justify-around m-8">
              <Image src="/roblox-ugc-1.png" width={0} height={0} sizes={"100vw"} className={`w-1/3 rounded-3xl ${animHover}`} alt={""} />
              <Image src="/roblox-ugc-2.png" width={0} height={0} sizes={"100vw"} className={`w-1/3 rounded-3xl ${animHover}`} alt={""} />
            </div>
            <p>
              Initial 3D modeller and texture artist for a Roblox UGC group "Historia Societas" with monthly consistent output.
            </p>
          </WorkSection>
          <hr className="my-4 border-zinc-400" />

          <WorkSection workTitle="VIRTUAL GRAPH PAPER">
            <div className="flex justify-around m-8">
              <Image src="/virtual-graph-paper.png" width={0} height={0} sizes={"100vw"} className={`w-3/4 rounded-3xl ${animHover}`} alt={""} />
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

function StatsHighlight({ highlight, subtext }: { highlight: string; subtext: string; }) {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl font-bold">
        {highlight}
      </h1>
      <p className="text-xs md:text-base text-zinc-400">
        {subtext}
      </p>
    </div>
  );
}

function WorkSection({ workTitle, workSubtitle, dateStart, dateEnd, children }: { workTitle: string, workSubtitle?: string, dateStart?: string, dateEnd?: string, className?: string; } & React.PropsWithChildren) {
  return (
    <>
      <h2 className="flex flex-row font-bold text-2xl">
        <Star className="mx-2 h-8" />{workTitle}
      </h2>

      <div className="ml-10">
        {
          workSubtitle ? (<h2 className="text-base">
            {workSubtitle}
          </h2>) : (<></>)
        }
        {
          dateStart || dateEnd ? (<h2 className="text-sm flex flex-row">
            <CalendarRange className="h-4" />{dateStart} - {dateEnd}
          </h2>) : (<></>)
        }
      </div>

      <section>
        {children}
      </section>
    </>
  );
}
