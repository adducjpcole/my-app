'use client';
import { BriefcaseBusiness, CircleUserRound, House, Mail } from "lucide-react";
import Image from "next/image";
import JobPanelContent from "./components/JobPanelContent";
import LightPanel from "./components/LightPanel";
import { RefObject, useEffect, useRef } from "react";
import Tooltip from "./components/util/Tooltip";
import Panel from "./components/Panel";
import animRotate from "./components/util/animRotate";

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
            className={`w-3/4 h-auto rounded-2xl ${animRotate}`}
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
                <House className="mx-1" />
              </Tooltip>
              <Tooltip tip={
                <p className="w-44 text-center bg-background text-foreground p-2 rounded-md">
                  cjpcole@addu.edu.ph
                </p>
              }
                className="shadow-2xl shadow-black"
              >
                <Mail className="mx-1" />
              </Tooltip>
            </div>
          </div>
        </LightPanel>
      </div>

      <div className="flex-4">
        <div className="w-3/4">
          <h1 className="text-7xl font-extrabold">
            COLLEGE
          </h1>
          <h1 className="text-7xl font-extrabold text-zinc-700">
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

        <Panel className="border-none bg-opacity-5 bg-[url(/dots.png)] bg-size-[14rem] bg-blend-overlay bg-secondary text-background transition-all">
          <JobPanelContent jobTitle="ROBLOX UGC" dateStart={"2020"} dateEnd={"2024"}>
            <div className="flex justify-around m-8">
              <Image src="/roblox-ugc-1.png" width={512} height={512} className={`w-64 rounded-3xl ${animRotate}`} alt={""} />
              <Image src="/roblox-ugc-2.png" width={512} height={512} className={`w-64 rounded-3xl ${animRotate}`} alt={""} />
            </div>
            <p>
              Initial 3D modeller and texture artist with monthly consistent output.
            </p>
          </JobPanelContent>
        </Panel>
      </div>
    </div>
  );
}

function StatsHighlight({ highlight, subtext }: { highlight: string; subtext: string; }) {
  return (
    <div>
      <h1 className="text-6xl font-bold  ">
        {highlight}
      </h1>
      <p className="text-zinc-400">
        {subtext}
      </p>
    </div>
  );
}
